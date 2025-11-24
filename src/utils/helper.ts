// این تابع یک مقدار رشته‌ای را به عدد تبدیل می‌کند.
// اگر مقدار معتبر (finite number) باشد همان عدد برگردانده می‌شود.
// و اگر نامعتبر باشد (مثل null، خالی یا NaN)، عدد پیش‌فرض (fallback) برمی‌گردد.
export const toNum = (v: string | null, fallback: number): number => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

// --------------------------------------------------------------------
// این تابع یک رشته CSV (مثل "apple, banana, orange") را به آرایه‌ای از رشته‌ها تبدیل می‌کند.
// ابتدا رشته را بر اساس ویرگول جدا می‌کند، فاصله‌های اضافی هر بخش را حذف می‌کند
// و مقادیر خالی را هم فیلتر می‌کند. نتیجه یک لیست تمیز از مقادیر است.
export const parseCSV = (v: string | null): string[] =>
  (v ?? "").split(",").map(s => s.trim()).filter(Boolean);

// --------------------------------------------------------------------
// این تابع یک مقدار (رشته یا عدد) را به رشته‌ای lowercase تبدیل می‌کند.
// اگر مقدار null یا undefined بود، یک رشته خالی "" برمی‌گرداند.
// هدف آن یکنواخت‌سازی متن‌ها برای مقایسه است (مثل برندها یا دسته‌ها).
export const low = (s?: string | number | null) =>
  s == null ? "" : String(s).toLowerCase();

// --------------------------------------------------------------------
// این تابع شبیه toNum است اما به جای بازگرداندن یک مقدار fallback،
// اگر ورودی نامعتبر باشد undefined برمی‌گرداند.
// این حالت برای پارامترهایی مثل minPrice یا maxPrice مفید است
// چون نبود مقدار و مقدار نامعتبر باید به معنای "عدم فیلتر" باشد.
export const toNumOrUndef = (raw: string | null): number | undefined => {
  if (raw == null) return undefined;
  const s = raw.trim();

  if (s === "") return undefined;
  const n = Number(s);
  return Number.isFinite(n) ? n : undefined;
};

// --------------------------------------------------------------------
// این تابع یک رشته CSV را گرفته و آن را به یک Set از مقادیر یکتا تبدیل می‌کند.
// دقیقا مثل parseCSV عمل می‌کند، فقط تفاوت اینجاست که خروجی مجموعه (Set) است
// و بنابراین مقادیر تکراری حذف می‌شوند.
export const splitCSV = (v: string | null): Set<string> =>
  new Set((v ?? "").split(",").map(s => s.trim()).filter(Boolean));

// --------------------------------------------------------------------
// این تابع برعکس splitCSV عمل می‌کند.
// یک Set از مقادیر را گرفته و آن‌ها را با ویرگول به هم متصل می‌کند
// و یک رشته CSV می‌سازد (مثلاً {"apple","banana"} → "apple,banana").
export const joinCSV = (s: Set<string>): string =>
  Array.from(s).join(",");
