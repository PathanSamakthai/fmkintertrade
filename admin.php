<?php
/* =========================================================================
   FMK Intertrade — Admin (อัปโหลดรูปขึ้นเว็บ)
   -------------------------------------------------------------------------
   วิธีใช้:  วางไฟล์นี้ไว้ที่ public_html/admin.php  แล้วเปิด
             https://fmkintertrade.shop/admin.php
   ========================================================================= */

/* ====== ① ตั้งรหัสผ่าน (เปลี่ยนทันทีก่อนใช้งานจริง!) ====== */
$ADMIN_USER = 'admin';
$ADMIN_PASS = 'FMKadmin2026!';      // <<< เปลี่ยนรหัสนี้เป็นของคุณ
/* ========================================================= */

session_start();
date_default_timezone_set('Asia/Bangkok');

$UPLOAD_DIR = __DIR__ . '/uploads';
$MAX_BYTES  = 12 * 1024 * 1024;     // 12 MB ต่อไฟล์

/* 8 ช่องรูปบนหน้าเว็บ  (key => [ชื่อที่แสดง, ความกว้างสูงสุด px]) */
$SLOTS = [
  'hero'      => ['Hero — ภาพใหญ่หน้าแรก (งานจริง/ห้องเย็น/โลจิสติกส์)', 1600],
  'about'     => ['About — More Than a Trading Company (แนวตั้ง 4:5)',   1200],
  'project-1' => ['Project 1 — Evaporative Livestock Housing',           1400],
  'project-2' => ['Project 2 — Cold Storage & Packing',                  1200],
  'project-3' => ['Project 3 — Protected Cultivation',                   1200],
  'article-1' => ['Article 1 — Livestock / Environmental',               1000],
  'article-2' => ['Article 2 — Cold Chain',                              1000],
  'article-3' => ['Article 3 — Regional Trade / Logistics',              1000],
];

/* ---------- helpers ---------- */
function csrf() {
  if (empty($_SESSION['csrf'])) $_SESSION['csrf'] = bin2hex(random_bytes(16));
  return $_SESSION['csrf'];
}
function logged_in() { return !empty($_SESSION['ok']); }

function save_image($tmp, $dest, $maxW) {
  $info = @getimagesize($tmp);
  if (!$info) return 'ไฟล์นี้ไม่ใช่รูปภาพ';
  $mime = $info['mime'];
  $allow = ['image/jpeg','image/png','image/webp'];
  if (!in_array($mime, $allow)) return 'รองรับเฉพาะ JPG / PNG / WEBP';

  if (!function_exists('imagecreatetruecolor')) {           // ไม่มี GD → บันทึกไฟล์ดิบ
    return move_uploaded_file($tmp, $dest) ? true : 'บันทึกไฟล์ไม่สำเร็จ';
  }
  $src = null;
  if     ($mime === 'image/jpeg') $src = @imagecreatefromjpeg($tmp);
  elseif ($mime === 'image/png')  $src = @imagecreatefrompng($tmp);
  elseif ($mime === 'image/webp' && function_exists('imagecreatefromwebp')) $src = @imagecreatefromwebp($tmp);
  if (!$src) return move_uploaded_file($tmp, $dest) ? true : 'อ่านรูปไม่สำเร็จ';

  $w = imagesx($src); $h = imagesy($src);
  $nw = $w; $nh = $h;
  if ($w > $maxW) { $nw = $maxW; $nh = (int)round($h * $maxW / $w); }
  $dst = imagecreatetruecolor($nw, $nh);
  $white = imagecolorallocate($dst, 255, 255, 255);         // แบน alpha ลงพื้นขาว
  imagefilledrectangle($dst, 0, 0, $nw, $nh, $white);
  imagecopyresampled($dst, $src, 0, 0, 0, 0, $nw, $nh, $w, $h);
  $ok = imagejpeg($dst, $dest, 84);
  imagedestroy($src); imagedestroy($dst);
  return $ok ? true : 'บันทึกรูปไม่สำเร็จ';
}

$msg = ''; $err = '';

/* ---------- logout ---------- */
if (isset($_GET['logout'])) { $_SESSION = []; session_destroy(); header('Location: admin.php'); exit; }

/* ---------- login ---------- */
if (!logged_in() && ($_SERVER['REQUEST_METHOD'] === 'POST') && isset($_POST['login'])) {
  if (!hash_equals(csrf(), $_POST['csrf'] ?? '')) { $err = 'เซสชันหมดอายุ ลองใหม่'; }
  elseif (hash_equals($ADMIN_USER, $_POST['user'] ?? '') && hash_equals($ADMIN_PASS, $_POST['pass'] ?? '')) {
    $_SESSION['ok'] = true; session_regenerate_id(true); header('Location: admin.php'); exit;
  } else { $err = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'; }
}

/* ---------- upload / delete ---------- */
if (logged_in() && $_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['slot'])) {
  $slot = $_POST['slot'];
  if (!isset($SLOTS[$slot])) { $err = 'ช่องรูปไม่ถูกต้อง'; }
  elseif (!hash_equals(csrf(), $_POST['csrf'] ?? '')) { $err = 'เซสชันหมดอายุ ลองใหม่'; }
  else {
    if (!is_dir($UPLOAD_DIR)) @mkdir($UPLOAD_DIR, 0755, true);
    $dest = $UPLOAD_DIR . '/' . $slot . '.jpg';
    if (isset($_POST['delete'])) {
      if (is_file($dest)) @unlink($dest);
      $msg = 'ลบรูป “' . $SLOTS[$slot][0] . '” แล้ว (กลับไปเป็น placeholder)';
    } else {
      if (empty($_FILES['image']['name'])) { $err = 'ยังไม่ได้เลือกไฟล์'; }
      elseif ($_FILES['image']['error'] !== UPLOAD_ERR_OK) { $err = 'อัปโหลดล้มเหลว (โค้ด ' . $_FILES['image']['error'] . ')'; }
      elseif ($_FILES['image']['size'] > $MAX_BYTES) { $err = 'ไฟล์ใหญ่เกิน 12 MB'; }
      else {
        $r = save_image($_FILES['image']['tmp_name'], $dest, $SLOTS[$slot][1]);
        if ($r === true) $msg = 'อัปโหลด “' . $SLOTS[$slot][0] . '” สำเร็จ!';
        else $err = $r;
      }
    }
  }
}

$is_default_pass = ($ADMIN_PASS === 'FMKadmin2026!');
header('Content-Type: text/html; charset=utf-8');
?><!doctype html>
<html lang="th"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>FMK Admin — จัดการรูปภาพ</title>
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:'Segoe UI',system-ui,'Noto Sans Thai',sans-serif;background:#0A2439;color:#1A1A1A}
  a{color:#0E5B91}
  .top{background:#0C2E48;color:#fff;padding:16px 22px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
  .top b{letter-spacing:.04em}.top .gold{color:#C9A050}
  .wrap{max-width:1080px;margin:24px auto;padding:0 16px}
  .card{background:#fff;border-radius:14px;padding:20px;box-shadow:0 10px 40px rgba(0,0,0,.25)}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  @media(max-width:720px){.grid{grid-template-columns:1fr}}
  .slot{border:1px solid #DCE3DF;border-radius:12px;overflow:hidden;background:#F7F9F8}
  .slot .thumb{aspect-ratio:16/9;background:repeating-linear-gradient(135deg,#e7ede9 0 10px,#eef3f0 10px 20px);display:flex;align-items:center;justify-content:center;color:#8a938e;font-size:12px}
  .slot .thumb img{width:100%;height:100%;object-fit:cover;display:block}
  .slot .body{padding:14px}
  .slot h3{font-size:14.5px;margin:0 0 10px}
  input[type=file]{width:100%;font-size:13px;margin-bottom:10px}
  input[type=text],input[type=password]{width:100%;padding:11px 12px;border:1px solid #cbd3ce;border-radius:9px;font-size:15px;margin-bottom:12px}
  .btn{background:#0E5B91;color:#fff;border:0;padding:10px 16px;border-radius:9px;font-size:14px;font-weight:700;cursor:pointer}
  .btn.gold{background:#C9A050}.btn.ghost{background:#fff;color:#b4232a;border:1px solid #e3c9c9}
  .row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
  .flash{padding:12px 16px;border-radius:10px;margin-bottom:16px;font-size:14px}
  .flash.ok{background:#e6f4ea;color:#1e6b38;border:1px solid #b7e0c3}
  .flash.no{background:#fdeaea;color:#a3242a;border:1px solid #f0c4c4}
  .warn{background:#fff6e0;color:#8a6400;border:1px solid #f0dca0;padding:12px 16px;border-radius:10px;margin-bottom:16px;font-size:13.5px}
  .login{max-width:380px;margin:8vh auto}
  .muted{color:#68736e;font-size:12.5px}
</style></head>
<body>
<div class="top"><span><b>FMK <span class="gold">ADMIN</span></b> · จัดการรูปภาพเว็บไซต์</span>
<?php if (logged_in()): ?><a href="?logout" style="color:#C9A050;font-weight:700">ออกจากระบบ</a><?php endif; ?></div>

<div class="wrap">
<?php if ($msg): ?><div class="flash ok"><?=htmlspecialchars($msg)?></div><?php endif; ?>
<?php if ($err): ?><div class="flash no"><?=htmlspecialchars($err)?></div><?php endif; ?>

<?php if (!logged_in()): ?>
  <div class="card login">
    <h2 style="margin:0 0 16px">เข้าสู่ระบบ</h2>
    <form method="post">
      <input type="hidden" name="csrf" value="<?=csrf()?>">
      <input type="text" name="user" placeholder="ชื่อผู้ใช้" autocomplete="username" required>
      <input type="password" name="pass" placeholder="รหัสผ่าน" autocomplete="current-password" required>
      <button class="btn" name="login" value="1" style="width:100%">เข้าสู่ระบบ</button>
    </form>
  </div>
<?php else: ?>
  <?php if ($is_default_pass): ?>
    <div class="warn">⚠️ คุณยังใช้รหัสผ่านเริ่มต้น — เปิดไฟล์ <b>admin.php</b> แล้วแก้บรรทัด <code>$ADMIN_PASS</code> เป็นรหัสของคุณทันที</div>
  <?php endif; ?>
  <div class="card">
    <p class="muted" style="margin-top:0">อัปโหลดรูปแต่ละช่อง แล้วรูปจะขึ้นบนเว็บทันที (กด Ctrl+Shift+R ที่หน้าเว็บเพื่อเห็นรูปใหม่). ระบบย่อขนาด/บีบอัดให้อัตโนมัติ.</p>
    <div class="grid">
    <?php foreach ($SLOTS as $key => $meta):
      $file = $UPLOAD_DIR . '/' . $key . '.jpg';
      $has  = is_file($file);
      $srcp = 'uploads/' . $key . '.jpg?t=' . ($has ? filemtime($file) : '0');
    ?>
      <div class="slot">
        <div class="thumb"><?php if ($has): ?><img src="<?=$srcp?>" alt=""><?php else: ?>ยังไม่มีรูป (แสดง placeholder)<?php endif; ?></div>
        <div class="body">
          <h3><?=htmlspecialchars($meta[0])?></h3>
          <form method="post" enctype="multipart/form-data">
            <input type="hidden" name="csrf" value="<?=csrf()?>">
            <input type="hidden" name="slot" value="<?=$key?>">
            <input type="file" name="image" accept="image/jpeg,image/png,image/webp" required>
            <div class="row">
              <button class="btn" type="submit"><?=$has?'เปลี่ยนรูป':'อัปโหลด'?></button>
              <?php if ($has): ?>
                <button class="btn ghost" type="submit" name="delete" value="1" formnovalidate onclick="return confirm('ลบรูปนี้?')">ลบรูป</button>
              <?php endif; ?>
            </div>
          </form>
        </div>
      </div>
    <?php endforeach; ?>
    </div>
  </div>
  <p class="muted" style="text-align:center;margin-top:18px">FMK Intertrade · ระบบจัดการรูปภาพ</p>
<?php endif; ?>
</div>
</body></html>
