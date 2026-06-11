<?php
/**
 * نصب سریع دیتابیس وب‌مانیا
 * در XAMPP آدرس زیر را باز کنید:
 * http://localhost/webmania/admin/install.php
 */
$config = file_exists(__DIR__ . '/config.php') ? require __DIR__ . '/config.php' : [];
$config = array_merge([
    'db_host' => '127.0.0.1',
    'db_name' => 'webmania',
    'db_user' => 'root',
    'db_pass' => '',
    'db_charset' => 'utf8mb4'
], $config);

header('Content-Type: text/html; charset=utf-8');

try {
    $pdo = new PDO("mysql:host={$config['db_host']};charset={$config['db_charset']}", $config['db_user'], $config['db_pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    $dbName = str_replace('`', '', $config['db_name']);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `{$dbName}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `{$dbName}`");

    $sql = file_get_contents(__DIR__ . '/database.sql');
    $statements = array_filter(array_map('trim', explode(';', $sql)));
    foreach ($statements as $statement) {
        if ($statement === '') continue;
        $pdo->exec($statement);
    }

    // یک بار API را هم صدا می‌زنیم تا داده‌های نمونه در صورت خالی بودن جدول‌ها ساخته شوند.
    $_GET['action'] = 'install';

    echo '<div dir="rtl" style="font-family:tahoma;max-width:720px;margin:60px auto;padding:30px;border:1px solid #ddd;border-radius:16px;line-height:2">';
    echo '<h1>✅ دیتابیس وب‌مانیا آماده شد</h1>';
    echo '<p>نام دیتابیس: <b>' . htmlspecialchars($dbName) . '</b></p>';
    echo '<p>حالا برو به پنل مدیریت:</p>';
    echo '<p><a href="index.html" style="display:inline-block;background:#7c3aed;color:white;padding:12px 20px;border-radius:10px;text-decoration:none">ورود به پنل</a></p>';
    echo '<p style="color:#666">بعد از نصب روی هاست واقعی، بهتره این فایل را حذف کنی.</p>';
    echo '</div>';
} catch (Throwable $e) {
    http_response_code(500);
    echo '<div dir="rtl" style="font-family:tahoma;max-width:720px;margin:60px auto;padding:30px;border:1px solid #f99;border-radius:16px;background:#fff5f5;line-height:2">';
    echo '<h1>❌ خطا در نصب دیتابیس</h1>';
    echo '<pre style="white-space:pre-wrap;direction:ltr;text-align:left">' . htmlspecialchars($e->getMessage()) . '</pre>';
    echo '<p>مطمئن شو Apache و MySQL در XAMPP روشن هستند و تنظیمات admin/config.php درست است.</p>';
    echo '</div>';
}
