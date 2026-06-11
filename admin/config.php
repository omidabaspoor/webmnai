<?php
/**
 * تنظیمات پنل مدیریت وب‌مانیا
 * مهم: قبل از آپلود عمومی، نام کاربری و رمز عبور را تغییر دهید.
 * برای ساخت هش رمز جدید می‌توانید در PHP اجرا کنید:
 * echo password_hash('رمز-جدید', PASSWORD_DEFAULT);
 */
return [
    'admin_username' => 'admin',
    // رمز پیش‌فرض: admin12345 — حتماً قبل از آپلود تغییر دهید.
    'admin_password' => 'admin12345',
    // اگر خواستید امن‌تر باشد، مقدار بالا را حذف و هش رمز را اینجا بگذارید.
    'admin_password_hash' => '',
    'max_upload_mb' => 12,
    'allowed_image_types' => ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    'allowed_file_types' => ['application/zip', 'application/x-zip-compressed', 'application/pdf'],

    // تنظیمات دیتابیس MySQL برای XAMPP
    'db_host' => '127.0.0.1',
    'db_name' => 'webmania',
    'db_user' => 'root',
    'db_pass' => '',
    'db_charset' => 'utf8mb4',

    // تنظیمات اتصال امن سمت سرور به هوش مصنوعی پشتیبانی
    'ai_api_url' => 'https://api.gapgpt.app/v1/chat/completions',
    'ai_model' => 'gemini-2.5-flash-lite',
    'ai_api_key' => 'sk-i2HdRrxo7o07wHUIJz2c7LX0uXkAY2dzpfpHgQwHLgxW6jbs'
];
