const translations = {
  ja: {
    metaTitle: "DB Bottleneck Analyzer | PostgreSQL安全診断・比較ツール",
    metaDescription: "DB Bottleneck Analyzerは、PostgreSQLを読み取り専用・低負荷で観測し、DBAの初動順に問題候補と改善前後を確認できるWindows向けツールです。",
    buyNow: "決済へ進む",
    checkoutEnglish: ""
  },
  en: {
    metaTitle: "DB Bottleneck Analyzer | Safe PostgreSQL diagnostics and comparison",
    metaDescription: "DB Bottleneck Analyzer observes PostgreSQL in read-only, low-impact mode and presents issues and before/after changes in a DBA-first order.",
    navWorkflow: "Workflow", navSafety: "Safety", navReports: "Reports", navRequirements: "Requirements", languageLabel: "Language",
    preview: "Preview v0.3.0", salesPreparing: "Preparing for sale",
    heroTitle: "Problem SQL and tables,<br>in a DBA-first order.",
    heroLead: "DB Bottleneck Analyzer is a Windows tool that observes PostgreSQL statistics and catalogs in read-only mode, bringing locks, priority SQL, tables, and before/after changes into one view.",
    purchaseInfo: "Purchase information", seeWorkflow: "See the workflow",
    heroNote: "The built-in sample needs no database connection. Experience an incident and its improvement with no traffic to a real database.",
    actionQueue: "Action queue", queueOrder: "Impact → target → evidence → next check",
    findingLock: "Order update blocked for 48 seconds", findingLockTarget: "Target: orders / nightly_batch", findingSql: "Order search SQL mean: 1.85 seconds", findingTable: "dead tuples 1.82M / 23%",
    critical: "Critical", warning: "Warning", review: "Review", afterTuning: "After tuning", improved: "95% better",
    dbChanges: "Changes to the DB", maxConnection: "Maximum connections", queryTimeout: "SQL timeout", refreshDefault: "Auto-refresh default",
    workflowTitle: "Keep the first-response order intact", workflowLead: "Start with the candidates that have the greatest impact, then move to the next safe check instead of scanning a list of results.",
    step1Title: "Review priorities", step1Body: "Review locks, long transactions, SQL, and table candidates in impact order.",
    step2Title: "Inspect the evidence", step2Body: "Inspect SQL statistics, candidate related tables, dead tuples, and observed execution sources.",
    step3Title: "Compare before and after", step3Body: "Compare equivalent snapshots and review changes per SQL and table.",
    safetyTitle: "Observe. Do not modify.", safetyLead: "Production use is limited to Observe and Recommend. Changes and load tests stay in a test environment.",
    doesTitle: "What DB Bottleneck Analyzer does", does1: "Reads statistics views and system catalogs", does2: "One connection, serial collection, bounded rows", does3: "Stops SQL at 1.5 s and lock waits at 0.25 s", does4: "Builds an E-R structure from foreign keys",
    doesNotTitle: "What DB Bottleneck Analyzer does not do", doesNot1: "Run VACUUM or change settings", doesNot2: "Run EXPLAIN ANALYZE in production", doesNot3: "Terminate sessions or add extensions", doesNot4: "Read business rows from application tables",
    privacyTitle: "Choose retention and SQL visibility", privacy1: "Keep results only in memory", privacy2: "Use the OS credential vault for encrypted history only when requested", privacy3: "Choose no SQL text, masked summary, or normalized full text", privacy4: "Never include passwords in reports",
    safetyCaution: "Zero load is not guaranteed. Start in a test environment or during a low-traffic period.",
    reportsTitle: "Continue the review outside the app", reportsLead: "Save Japanese or English reports for tuning explanations, review, or AI-assisted analysis.",
    mdReport: "Review and AI analysis", htmlReport: "Share and read in a browser", xlsxReport: "Sort and annotate in a spreadsheet", jsonReport: "Integrate with other tools", exportWarning: "Exports may contain sensitive database names, table names, and SQL summaries. Follow your organization's handling policy.",
    purchaseTitle: "Preparing for public sales", purchaseLead: "Purchase will open here after pricing, code signing, terms, and refund conditions are finalized.",
    license1: "One-time Windows license planned", license2: "Stripe in Japan and Polar outside Japan planned", license3: "Offline activation considered for hospitals and restricted networks",
    regionLabel: "Purchase region", regionJapan: "Japan", regionGlobal: "Outside Japan", paymentProvider: "Payment provider",
    checkoutNote: "Payment details are entered on Stripe or Polar. This site does not store card numbers.", checkoutEnglish: "Polar checkout is currently shown in English for Indonesian.", buyNow: "Continue to checkout",
    requirementsTitle: "System requirements", postgresVersions: "Preparing validation for PostgreSQL 14, 17, and 18", connection: "Connection", connectionValue: "TCP/IP; a dedicated read-only user is recommended", extensions: "Extension", extensionsValue: "Uses pg_stat_statements only when already enabled; never installs it automatically",
    legalPending: "Sales are being prepared. Checkout links and license delivery procedures will be finalized before orders open."
  },
  es: {
    metaTitle: "DB Bottleneck Analyzer | Diagnóstico y comparación segura de PostgreSQL", metaDescription: "DB Bottleneck Analyzer observa PostgreSQL en modo de solo lectura y bajo impacto, y presenta los problemas en el orden de trabajo de un DBA.",
    navWorkflow: "Flujo", navSafety: "Seguridad", navReports: "Informes", navRequirements: "Requisitos", languageLabel: "Idioma", preview: "Versión preliminar v0.3.0", salesPreparing: "Venta en preparación",
    heroTitle: "SQL y tablas problemáticos,<br>en el orden de trabajo del DBA.", heroLead: "DB Bottleneck Analyzer es una herramienta para Windows que observa estadísticas y catálogos de PostgreSQL en modo de solo lectura, y reúne bloqueos, SQL prioritario, tablas y cambios antes/después en una sola vista.",
    purchaseInfo: "Información de compra", seeWorkflow: "Ver el flujo de diagnóstico", heroNote: "La muestra incluida no necesita conexión a una base de datos. Permite revisar un incidente y su mejora sin tráfico hacia una base real.",
    actionQueue: "Cola de acciones", queueOrder: "Impacto → objetivo → evidencia → siguiente revisión", findingLock: "Actualización de pedido bloqueada durante 48 segundos", findingLockTarget: "Objetivo: orders / nightly_batch", findingSql: "Media de búsqueda de pedidos: 1,85 segundos", findingTable: "filas muertas 1,82 M / 23 %", critical: "Crítico", warning: "Alerta", review: "Revisar", afterTuning: "Después del ajuste", improved: "95 % mejor",
    dbChanges: "Cambios en la BD", maxConnection: "Máximo de conexiones", queryTimeout: "Tiempo límite SQL", refreshDefault: "Actualización automática",
    workflowTitle: "Respeta el orden de la primera respuesta", workflowLead: "Empieza por los candidatos de mayor impacto y avanza hacia la siguiente revisión segura.", step1Title: "Revisar prioridades", step1Body: "Revisa bloqueos, transacciones largas, SQL y tablas por impacto.", step2Title: "Examinar la evidencia", step2Body: "Consulta estadísticas SQL, tablas relacionadas, filas muertas y orígenes observados.", step3Title: "Comparar antes y después", step3Body: "Compara capturas equivalentes y revisa cambios por SQL y tabla.",
    safetyTitle: "Observar sin modificar.", safetyLead: "En producción se limita a observar y recomendar. Los cambios y pruebas de carga se realizan en un entorno de prueba.", doesTitle: "Lo que hace DB Bottleneck Analyzer", does1: "Lee vistas estadísticas y catálogos del sistema", does2: "Una conexión, recopilación en serie y filas limitadas", does3: "Detiene SQL a 1,5 s y esperas de bloqueo a 0,25 s", does4: "Genera la estructura E-R desde claves externas", doesNotTitle: "Lo que DB Bottleneck Analyzer no hace", doesNot1: "Ejecutar VACUUM o cambiar parámetros", doesNot2: "Ejecutar EXPLAIN ANALYZE en producción", doesNot3: "Finalizar sesiones o añadir extensiones", doesNot4: "Leer datos de negocio de las tablas", privacyTitle: "Retención y visibilidad SQL elegibles", privacy1: "Mantener resultados solo en memoria", privacy2: "Historial cifrado solo cuando se solicita", privacy3: "Elegir sin SQL, resumen ocultando valores o texto normalizado", privacy4: "No incluir contraseñas en informes", safetyCaution: "No se garantiza carga cero. Empieza en pruebas o en un periodo de baja actividad.",
    reportsTitle: "Continúa el análisis fuera de la aplicación", reportsLead: "Guarda informes en japonés o inglés para explicar ajustes, revisar o analizar con IA.", mdReport: "Revisión y análisis con IA", htmlReport: "Compartir y leer en el navegador", xlsxReport: "Ordenar y anotar en una hoja", jsonReport: "Integración con otras herramientas", exportWarning: "Las exportaciones pueden contener nombres de bases, tablas y resúmenes SQL sensibles. Sigue las normas de tu organización.",
    purchaseTitle: "Preparando la venta pública", purchaseLead: "La compra se habilitará cuando se definan precio, firma de código, condiciones y reembolsos.", license1: "Licencia de pago único para Windows prevista", license2: "Stripe en Japón y Polar fuera de Japón", license3: "Activación sin conexión prevista para hospitales y redes restringidas", regionLabel: "Región de compra", regionJapan: "Japón", regionGlobal: "Fuera de Japón", paymentProvider: "Proveedor de pago", checkoutNote: "El pago se introduce en Stripe o Polar. Este sitio no guarda números de tarjeta.", checkoutEnglish: "", buyNow: "Continuar al pago",
    requirementsTitle: "Requisitos del sistema", postgresVersions: "Preparando la validación para PostgreSQL 14, 17 y 18", connection: "Conexión", connectionValue: "TCP/IP; se recomienda un usuario exclusivo de solo lectura", extensions: "Extensión", extensionsValue: "Usa pg_stat_statements solo si ya está activa; no la instala automáticamente", legalPending: "La venta está en preparación. Los enlaces de pago y la entrega de licencias se confirmarán antes de aceptar pedidos."
  }
};

translations.id = {
  metaTitle: "DB Bottleneck Analyzer | Diagnosis dan perbandingan PostgreSQL yang aman", metaDescription: "DB Bottleneck Analyzer mengamati PostgreSQL dalam mode hanya-baca dan berdampak rendah, lalu menampilkan masalah berdasarkan urutan respons DBA.",
  navWorkflow: "Alur", navSafety: "Keamanan", navReports: "Laporan", navRequirements: "Persyaratan", languageLabel: "Bahasa", preview: "Pratinjau v0.3.0", salesPreparing: "Penjualan sedang disiapkan",
  heroTitle: "SQL dan tabel bermasalah,<br>dalam urutan respons DBA.", heroLead: "DB Bottleneck Analyzer adalah alat Windows yang mengamati statistik dan katalog PostgreSQL dalam mode hanya-baca, serta menyatukan lock, SQL prioritas, tabel, dan perubahan sebelum/sesudah dalam satu tampilan.", purchaseInfo: "Informasi pembelian", seeWorkflow: "Lihat alur diagnosis", heroNote: "Sampel bawaan tidak memerlukan koneksi database. Anda dapat melihat insiden dan perbaikannya tanpa trafik ke database nyata.",
  actionQueue: "Antrean tindakan", queueOrder: "Dampak → target → bukti → pemeriksaan berikutnya", findingLock: "Pembaruan pesanan terblokir selama 48 detik", findingLockTarget: "Target: orders / nightly_batch", findingSql: "Rata-rata SQL pencarian pesanan: 1,85 detik", findingTable: "dead tuples 1,82 juta / 23%", critical: "Kritis", warning: "Peringatan", review: "Periksa", afterTuning: "Setelah tuning", improved: "95% lebih baik",
  dbChanges: "Perubahan ke DB", maxConnection: "Koneksi maksimum", queryTimeout: "Batas waktu SQL", refreshDefault: "Refresh otomatis bawaan", workflowTitle: "Pertahankan urutan respons awal", workflowLead: "Mulai dari kandidat dengan dampak terbesar, lalu lanjutkan ke pemeriksaan aman berikutnya.", step1Title: "Periksa prioritas", step1Body: "Periksa lock, transaksi panjang, SQL, dan kandidat tabel berdasarkan dampak.", step2Title: "Periksa bukti", step2Body: "Lihat statistik SQL, kandidat tabel terkait, dead tuples, dan sumber eksekusi yang teramati.", step3Title: "Bandingkan sebelum dan sesudah", step3Body: "Bandingkan snapshot dengan kondisi setara dan tinjau perubahan per SQL dan tabel.",
  safetyTitle: "Amati tanpa mengubah.", safetyLead: "Penggunaan produksi dibatasi pada Observe dan Recommend. Perubahan dan uji beban dilakukan di lingkungan pengujian.", doesTitle: "Yang dilakukan DB Bottleneck Analyzer", does1: "Membaca tampilan statistik dan katalog sistem", does2: "Satu koneksi, pengambilan serial, dan batas jumlah baris", does3: "Menghentikan SQL pada 1,5 dtk dan tunggu lock pada 0,25 dtk", does4: "Membuat struktur E-R dari foreign key", doesNotTitle: "Yang tidak dilakukan DB Bottleneck Analyzer", doesNot1: "Menjalankan VACUUM atau mengubah pengaturan", doesNot2: "Menjalankan EXPLAIN ANALYZE di produksi", doesNot3: "Mengakhiri sesi atau menambah ekstensi", doesNot4: "Membaca data bisnis dari tabel aplikasi", privacyTitle: "Pilih retensi dan visibilitas SQL", privacy1: "Simpan hasil hanya di memori", privacy2: "Gunakan penyimpanan terenkripsi hanya jika diminta", privacy3: "Pilih tanpa teks SQL, ringkasan tersamarkan, atau teks normalisasi", privacy4: "Tidak memasukkan kata sandi dalam laporan", safetyCaution: "Beban nol tidak dijamin. Mulailah di lingkungan pengujian atau saat trafik rendah.",
  reportsTitle: "Lanjutkan peninjauan di luar aplikasi", reportsLead: "Simpan laporan Jepang atau Inggris untuk penjelasan tuning, peninjauan, atau analisis dengan AI.", mdReport: "Peninjauan dan analisis AI", htmlReport: "Bagikan dan baca di browser", xlsxReport: "Urutkan dan beri catatan di spreadsheet", jsonReport: "Integrasi dengan alat lain", exportWarning: "Ekspor dapat berisi nama database, nama tabel, dan ringkasan SQL yang sensitif. Ikuti kebijakan organisasi Anda.",
  purchaseTitle: "Mempersiapkan penjualan publik", purchaseLead: "Pembelian akan dibuka setelah harga, penandatanganan kode, ketentuan, dan kebijakan refund selesai.", license1: "Lisensi sekali bayar untuk Windows direncanakan", license2: "Stripe di Jepang dan Polar di luar Jepang", license3: "Aktivasi offline dipertimbangkan untuk rumah sakit dan jaringan terbatas", regionLabel: "Wilayah pembelian", regionJapan: "Jepang", regionGlobal: "Di luar Jepang", paymentProvider: "Penyedia pembayaran", checkoutNote: "Data pembayaran dimasukkan di Stripe atau Polar. Situs ini tidak menyimpan nomor kartu.", checkoutEnglish: "Halaman pembayaran Polar saat ini ditampilkan dalam bahasa Inggris untuk pengguna bahasa Indonesia.", buyNow: "Lanjut ke pembayaran",
  requirementsTitle: "Persyaratan sistem", postgresVersions: "Menyiapkan validasi untuk PostgreSQL 14, 17, dan 18", connection: "Koneksi", connectionValue: "TCP/IP; pengguna khusus hanya-baca direkomendasikan", extensions: "Ekstensi", extensionsValue: "Menggunakan pg_stat_statements hanya jika sudah aktif; tidak memasangnya secara otomatis", legalPending: "Penjualan sedang dipersiapkan. Tautan pembayaran dan prosedur pengiriman lisensi akan ditetapkan sebelum pesanan dibuka."
};

translations.ko = {
  metaTitle: "DB Bottleneck Analyzer | 안전한 PostgreSQL 진단 및 비교", metaDescription: "DB Bottleneck Analyzer는 PostgreSQL을 읽기 전용·저부하 방식으로 관찰하고 DBA의 초기 대응 순서에 따라 문제와 전후 변화를 보여 줍니다.",
  navWorkflow: "진단 흐름", navSafety: "안전 설계", navReports: "보고서", navRequirements: "시스템 요구사항", languageLabel: "언어", preview: "미리보기 v0.3.0", salesPreparing: "판매 준비 중",
  heroTitle: "문제가 있는 SQL과 테이블을<br>DBA의 초기 대응 순서대로.", heroLead: "DB Bottleneck Analyzer는 PostgreSQL 통계와 카탈로그를 읽기 전용으로 관찰하고 잠금, 우선 SQL, 테이블, 개선 전후 차이를 한 화면에서 확인하는 Windows 도구입니다.", purchaseInfo: "구매 안내", seeWorkflow: "진단 흐름 보기", heroNote: "내장 샘플은 DB 연결이 필요하지 않습니다. 실제 DB 통신이나 부하 없이 문제 발생부터 개선 확인까지 체험할 수 있습니다.",
  actionQueue: "우선 대응 대기열", queueOrder: "영향 → 대상 → 근거 → 다음 확인", findingLock: "주문 업데이트가 48초 동안 차단됨", findingLockTarget: "대상: orders / nightly_batch", findingSql: "주문 검색 SQL 평균 1.85초", findingTable: "dead tuples 182만 / 23%", critical: "심각", warning: "경고", review: "확인 필요", afterTuning: "튜닝 후", improved: "95% 개선",
  dbChanges: "DB 변경", maxConnection: "최대 연결 수", queryTimeout: "SQL 시간 제한", refreshDefault: "자동 새로 고침 기본값", workflowTitle: "초기 대응 순서를 유지합니다", workflowLead: "결과를 나열하는 대신 영향이 큰 후보부터 다음의 안전한 확인으로 진행합니다.", step1Title: "우선순위 확인", step1Body: "잠금, 장기 트랜잭션, SQL, 테이블 후보를 영향 순서로 확인합니다.", step2Title: "근거 확인", step2Body: "SQL 통계, 관련 테이블 후보, dead tuples, 관찰된 실행 소스를 확인합니다.", step3Title: "개선 전후 비교", step3Body: "동일한 조건의 스냅샷을 비교하여 SQL 및 테이블별 변화를 확인합니다.",
  safetyTitle: "관찰하되 변경하지 않습니다.", safetyLead: "운영 환경에서는 Observe와 Recommend로 제한하고 변경 및 부하 테스트는 검증 환경에서 수행합니다.", doesTitle: "DB Bottleneck Analyzer가 하는 일", does1: "통계 뷰와 시스템 카탈로그 읽기", does2: "최대 1개 연결, 순차 수집, 행 수 제한", does3: "SQL 1.5초, 잠금 대기 0.25초에 중단", does4: "외래 키에서 E-R 구조 생성", doesNotTitle: "DB Bottleneck Analyzer가 하지 않는 일", doesNot1: "VACUUM 실행 또는 설정 변경", doesNot2: "운영 환경에서 EXPLAIN ANALYZE 실행", doesNot3: "세션 종료 또는 확장 추가", doesNot4: "업무 테이블의 실제 데이터 읽기", privacyTitle: "보관 및 SQL 표시 선택", privacy1: "분석 결과를 메모리에만 보관", privacy2: "요청한 경우에만 OS 자격 증명 저장소로 암호화 보관", privacy3: "SQL 미수집, 마스킹 요약, 정규화 전문 중 선택", privacy4: "보고서에 비밀번호를 포함하지 않음", safetyCaution: "부하가 전혀 없음을 보장하지 않습니다. 검증 환경이나 저부하 시간대에서 먼저 확인하세요.",
  reportsTitle: "앱 밖에서도 검토를 이어갑니다", reportsLead: "일본어 또는 영어 보고서를 저장해 튜닝 설명, 검토, AI 분석에 활용할 수 있습니다.", mdReport: "검토 및 AI 분석", htmlReport: "브라우저에서 공유 및 열람", xlsxReport: "스프레드시트에서 정렬 및 메모", jsonReport: "다른 도구와 연동", exportWarning: "내보낸 파일에는 DB명, 테이블명, SQL 요약 등 기밀 정보가 포함될 수 있습니다. 조직의 취급 정책을 따르세요.",
  purchaseTitle: "판매 시작을 준비하고 있습니다", purchaseLead: "가격, 코드 서명, 이용약관, 환불 조건이 확정되면 이 페이지에서 구매할 수 있습니다.", license1: "Windows용 일회성 구매 라이선스 예정", license2: "일본은 Stripe, 일본 외 지역은 Polar 예정", license3: "병원 및 폐쇄망을 위한 오프라인 인증 검토", regionLabel: "구매 지역", regionJapan: "일본", regionGlobal: "일본 외 지역", paymentProvider: "결제 서비스", checkoutNote: "결제 정보는 Stripe 또는 Polar에서 입력합니다. DB Bottleneck Analyzer 사이트는 카드 번호를 저장하지 않습니다.", checkoutEnglish: "", buyNow: "결제로 이동",
  requirementsTitle: "시스템 요구사항", postgresVersions: "PostgreSQL 14, 17, 18 검증 준비 중", connection: "연결", connectionValue: "TCP/IP 연결, 전용 읽기 전용 사용자 권장", extensions: "확장", extensionsValue: "이미 활성화된 경우에만 pg_stat_statements 사용, 자동 설치 안 함", legalPending: "판매 준비 중입니다. 주문 접수 전에 결제 링크와 라이선스 제공 절차를 확정합니다."
};

Object.assign(translations.ja, {
  navLicense: "ライセンス",
  licenseTitle: "閉域環境で共有しやすい端末ライセンス", licenseLead: "人数ではなく、DB Bottleneck Analyzerを実行する診断端末の台数を基準にする予定です。", standardPlan: "基本ライセンス案", deviceLimit: "診断端末 3台まで", deviceDefinition: "DB Bottleneck AnalyzerをインストールするWindows PC、踏み台サーバー、VMをそれぞれ1台として数えます。", userCountLabel: "利用人数", unlimited: "制限なし", userCountNote: "購入者本人または同一法人内の利用者が共有できます。", databaseCountLabel: "接続先DB", databaseCountNote: "同じ購入者が管理するPostgreSQLへ接続できます。", offlineLabel: "閉域・オフライン", offlinePlanned: "販売版で対応予定", offlineNote: "常時オンライン認証やテレメトリーを前提にしない方式を検討しています。", licenseCaution: "現在のプレビュー版にはライセンス制御はありません。正式販売前に端末認証、移行方法、利用規約を確定します。",
  purchaseTitle: "地域に合わせた買い切り価格を検討中", purchaseLead: "表示言語とは別に購入地域を選べます。価格、コード署名、利用規約、返金条件の確定後に販売を開始します。", license1: "1ライセンスで診断端末3台までを予定", license2: "利用人数と接続先PostgreSQL数は制限しない予定", license3: "閉域環境向けにオフライン認証を予定", regionWest: "米国・欧州（スペイン除く）・カナダ", regionKorea: "韓国", regionSpanish: "スペイン・中南米", regionIndonesia: "インドネシア", plannedPrice: "販売予定価格", priceJpNote: "税抜14,900円＋消費税1,490円", priceTaxNote: "税額と最終合計は決済画面で確認してください。"
});

Object.assign(translations.en, {
  navLicense: "License",
  licenseTitle: "A device license suited to restricted networks", licenseLead: "The planned limit is based on devices running DB Bottleneck Analyzer, not the number of people using them.", standardPlan: "Standard license proposal", deviceLimit: "Up to 3 diagnostic devices", deviceDefinition: "Each Windows PC, jump server, or VM with DB Bottleneck Analyzer installed counts as one device.", userCountLabel: "Users", unlimited: "Unlimited", userCountNote: "The purchaser and users within the same legal entity may share the licensed devices.", databaseCountLabel: "Target databases", databaseCountNote: "Connect to PostgreSQL systems managed by the same purchaser.", offlineLabel: "Restricted / offline", offlinePlanned: "Planned for the paid release", offlineNote: "The design will not depend on continuous online checks or telemetry.", licenseCaution: "The current preview has no license enforcement. Device activation, transfer rules, and terms will be finalized before sales.",
  purchaseTitle: "Considering one-time regional pricing", purchaseLead: "Choose a purchase region independently of the display language. Sales will open after pricing, code signing, terms, and refunds are finalized.", license1: "One license for up to 3 diagnostic devices planned", license2: "No planned limit on users or target PostgreSQL databases", license3: "Offline activation planned for restricted networks", regionWest: "US, Europe (except Spain), and Canada", regionKorea: "South Korea", regionSpanish: "Spain and Latin America", regionIndonesia: "Indonesia", plannedPrice: "Planned price", priceJpNote: "JPY 14,900 before tax + JPY 1,490 tax", priceTaxNote: "Tax and the final total will be confirmed at checkout."
});

Object.assign(translations.es, {
  navLicense: "Licencia",
  licenseTitle: "Licencia por dispositivo apta para redes cerradas", licenseLead: "El límite previsto se basa en los dispositivos que ejecutan DB Bottleneck Analyzer, no en el número de usuarios.", standardPlan: "Propuesta de licencia básica", deviceLimit: "Hasta 3 dispositivos de diagnóstico", deviceDefinition: "Cada PC Windows, servidor de salto o VM con DB Bottleneck Analyzer cuenta como un dispositivo.", userCountLabel: "Usuarios", unlimited: "Sin límite", userCountNote: "El comprador y los usuarios de la misma entidad jurídica pueden compartir los dispositivos.", databaseCountLabel: "Bases de datos", databaseCountNote: "Conexión a sistemas PostgreSQL administrados por el mismo comprador.", offlineLabel: "Red cerrada / sin conexión", offlinePlanned: "Previsto para la versión comercial", offlineNote: "El diseño no dependerá de validación continua en línea ni telemetría.", licenseCaution: "La versión preliminar actual no aplica licencias. La activación, transferencia y condiciones se definirán antes de la venta.",
  purchaseTitle: "Evaluando precios regionales de pago único", purchaseLead: "La región de compra se elige por separado del idioma. La venta comenzará tras definir precios, firma, condiciones y reembolsos.", license1: "Una licencia para hasta 3 dispositivos de diagnóstico", license2: "Sin límite previsto de usuarios ni bases PostgreSQL", license3: "Activación sin conexión prevista para redes cerradas", regionWest: "EE. UU., Europa (excepto España) y Canadá", regionKorea: "Corea del Sur", regionSpanish: "España y Latinoamérica", regionIndonesia: "Indonesia", plannedPrice: "Precio previsto", priceJpNote: "JPY 14.900 sin impuestos + JPY 1.490 de impuesto", priceTaxNote: "Los impuestos y el total final se confirmarán al pagar."
});

Object.assign(translations.id, {
  navLicense: "Lisensi",
  licenseTitle: "Lisensi perangkat untuk lingkungan jaringan tertutup", licenseLead: "Batas yang direncanakan dihitung dari perangkat yang menjalankan DB Bottleneck Analyzer, bukan jumlah pengguna.", standardPlan: "Rencana lisensi dasar", deviceLimit: "Hingga 3 perangkat diagnosis", deviceDefinition: "Setiap PC Windows, jump server, atau VM yang memasang DB Bottleneck Analyzer dihitung sebagai satu perangkat.", userCountLabel: "Pengguna", unlimited: "Tanpa batas", userCountNote: "Pembeli dan pengguna dalam badan hukum yang sama dapat berbagi perangkat berlisensi.", databaseCountLabel: "Database tujuan", databaseCountNote: "Hubungkan ke sistem PostgreSQL yang dikelola pembeli yang sama.", offlineLabel: "Jaringan tertutup / offline", offlinePlanned: "Direncanakan untuk versi berbayar", offlineNote: "Desain tidak akan bergantung pada pemeriksaan online terus-menerus atau telemetri.", licenseCaution: "Versi pratinjau saat ini belum memiliki pembatasan lisensi. Aktivasi perangkat, pemindahan, dan ketentuan akan ditetapkan sebelum penjualan.",
  purchaseTitle: "Menyiapkan harga sekali bayar per wilayah", purchaseLead: "Wilayah pembelian dapat dipilih terpisah dari bahasa. Penjualan dibuka setelah harga, penandatanganan kode, ketentuan, dan refund ditetapkan.", license1: "Satu lisensi untuk hingga 3 perangkat diagnosis", license2: "Jumlah pengguna dan database PostgreSQL tidak dibatasi", license3: "Aktivasi offline direncanakan untuk jaringan tertutup", regionWest: "AS, Eropa (kecuali Spanyol), dan Kanada", regionKorea: "Korea Selatan", regionSpanish: "Spanyol dan Amerika Latin", regionIndonesia: "Indonesia", plannedPrice: "Harga rencana", priceJpNote: "JPY 14.900 sebelum pajak + pajak JPY 1.490", priceTaxNote: "Pajak dan jumlah akhir akan dikonfirmasi saat checkout."
});

Object.assign(translations.ko, {
  navLicense: "라이선스",
  licenseTitle: "폐쇄망에서 공유하기 쉬운 장치 라이선스", licenseLead: "사용자 수가 아니라 DB Bottleneck Analyzer를 실행하는 진단 장치 수를 기준으로 할 예정입니다.", standardPlan: "기본 라이선스안", deviceLimit: "진단 장치 최대 3대", deviceDefinition: "DB Bottleneck Analyzer가 설치된 Windows PC, 점프 서버, VM을 각각 1대로 계산합니다.", userCountLabel: "사용자 수", unlimited: "제한 없음", userCountNote: "구매자 본인 또는 동일 법인 내 사용자가 라이선스 장치를 공유할 수 있습니다.", databaseCountLabel: "접속 대상 DB", databaseCountNote: "동일 구매자가 관리하는 PostgreSQL 시스템에 접속할 수 있습니다.", offlineLabel: "폐쇄망 / 오프라인", offlinePlanned: "유료 버전에서 지원 예정", offlineNote: "상시 온라인 확인이나 텔레메트리에 의존하지 않는 방식을 검토합니다.", licenseCaution: "현재 미리보기 버전에는 라이선스 제한이 없습니다. 정식 판매 전에 장치 인증, 이전 방법, 이용 약관을 확정합니다.",
  purchaseTitle: "지역별 일회성 구매 가격 검토 중", purchaseLead: "표시 언어와 별도로 구매 지역을 선택할 수 있습니다. 가격, 코드 서명, 약관, 환불 조건을 확정한 후 판매를 시작합니다.", license1: "라이선스 1개당 진단 장치 최대 3대 예정", license2: "사용자 수와 접속 PostgreSQL 수는 제한하지 않을 예정", license3: "폐쇄망용 오프라인 인증 예정", regionWest: "미국·유럽(스페인 제외)·캐나다", regionKorea: "대한민국", regionSpanish: "스페인·중남미", regionIndonesia: "인도네시아", plannedPrice: "예정 가격", priceJpNote: "세전 JPY 14,900 + 세금 JPY 1,490", priceTaxNote: "세금과 최종 합계는 결제 화면에서 확인합니다."
});

Object.assign(translations.ja, {
  preview: "Windows版 v0.4.1", trialAvailable: "14日間無料試用", downloadTrial: "14日間無料で試す", unsignedNote: "現在のWindows版は未署名です。組織のセキュリティ規程に従い、まず検証端末で確認してください。", plannedPrice: "販売価格", postgresVersions: "PostgreSQL 14・17・18で接続・診断検証済み",
  heroNote: "インストールだけでは試用期間は始まりません。最初の実DB診断が成功した時点から14日間、全機能を試せます。",
  licenseLead: "常時オンライン認証を使わず、DB Bottleneck Analyzerを実行する診断端末1台に紐づきます。", standardPlan: "Standardライセンス", deviceLimit: "診断端末 1台", deviceDefinition: "DB Bottleneck Analyzerを実行するWindows PC、踏み台サーバー、VMのいずれか1台に固定します。", offlinePlanned: "対応済み", offlineNote: "端末申請ファイルと署名済みライセンスを使い、DB情報を販売者へ送りません。", licenseCaution: "端末交換やWindows再導入時は、購入情報を確認してライセンスを再発行します。",
  purchaseTitle: "14日間試してから、必要なら買い切り", purchaseLead: "日本国内向けStandardライセンスをStripeで購入できます。日本国外向けのPolar決済は準備中です。", license1: "1ライセンスにつき診断端末1台", license2: "同一組織内の利用人数と接続先PostgreSQL数は制限なし", license3: "購入後は端末申請ファイルをメールで送り、オフラインライセンスを受け取ります", globalPreparing: "日本国外向け決済は準備中",
  deliveryTitle: "購入後のライセンス受取手順", deliveryLead: "インストーラーは試用版と製品版で共通です。再ダウンロードは不要です。", delivery1Title: "購入を完了", delivery1Body: "Stripeの注文番号と購入時メールアドレスを控えます。", delivery2Title: "端末申請を出力", delivery2Body: "アプリの「ライセンス」から.dba-requestを保存します。DB情報やSQLは含まれません。", delivery3Title: "メールで申請", delivery3Body: "注文番号、購入時メールアドレス、端末申請ファイルを", delivery3Tail: "へ送ります。", delivery4Title: "ライセンスを読込", delivery4Body: "販売者から届く.dba-licenseを同じ画面で読み込むと正規版になります。", deliveryTiming: "初期販売では購入確認後2営業日以内の手動発行を予定しています。自動発行ではありません。", legalPending: "日本国内向け販売を受付中です。日本国外向け決済は準備中です。"
});

Object.assign(translations.en, {
  preview: "Windows v0.4.1", trialAvailable: "14-day free trial", downloadTrial: "Try free for 14 days", unsignedNote: "The current Windows build is unsigned. Follow your organization's security policy and evaluate it on a test device first.", plannedPrice: "Price", postgresVersions: "Connection and diagnostics tested with PostgreSQL 14, 17, and 18", heroNote: "Installation does not start the trial. All features are available for 14 days after the first successful analysis of a real database.",
  licenseLead: "No continuous online activation is required. The license is bound to one Windows device running DB Bottleneck Analyzer.", standardPlan: "Standard license", deviceLimit: "One diagnostic device", deviceDefinition: "The license is bound to one Windows PC, jump server, or VM running DB Bottleneck Analyzer.", offlinePlanned: "Available", offlineNote: "Activation uses a device request and signed license without sending database information to the vendor.", licenseCaution: "For device replacement or Windows reinstallation, contact us with your purchase details for reissuance.",
  purchaseTitle: "Try for 14 days, then buy only if it helps", purchaseLead: "The Standard license is available through Stripe for customers in Japan. Polar checkout for other regions is being prepared.", license1: "One diagnostic device per license", license2: "Unlimited users and PostgreSQL targets within the same organization", license3: "After purchase, email the device request and receive an offline license", globalPreparing: "Global checkout coming soon",
  deliveryTitle: "How to receive your license", deliveryLead: "The same installer is used for the trial and full version; no second download is needed.", delivery1Title: "Complete payment", delivery1Body: "Keep the Stripe order number and purchase email address.", delivery2Title: "Export a device request", delivery2Body: "In the app, open License and save the .dba-request file. It contains no database information or SQL.", delivery3Title: "Send the request", delivery3Body: "Email the order number, purchase email, and device request to", delivery3Tail: ".", delivery4Title: "Import the license", delivery4Body: "Import the returned .dba-license in the same screen to activate the full version.", deliveryTiming: "During the initial release, licenses are issued manually within two business days after purchase verification. Issuance is not automatic.", legalPending: "Sales are open for Japan. Checkout for other regions is being prepared."
});

Object.assign(translations.es, {
  preview: "Windows v0.4.1", trialAvailable: "Prueba gratuita de 14 días", downloadTrial: "Probar gratis durante 14 días", unsignedNote: "La versión actual de Windows no está firmada. Siga la política de seguridad de su organización y pruébela primero en un equipo de evaluación.", plannedPrice: "Precio", postgresVersions: "Conexión y diagnóstico probados con PostgreSQL 14, 17 y 18", heroNote: "La instalación no inicia la prueba. Todas las funciones están disponibles durante 14 días desde el primer análisis correcto de una base de datos real.",
  licenseLead: "No requiere autenticación continua. La licencia se vincula a un dispositivo Windows que ejecuta DB Bottleneck Analyzer.", standardPlan: "Licencia Standard", deviceLimit: "Un dispositivo de diagnóstico", deviceDefinition: "La licencia se vincula a un PC Windows, servidor de salto o VM.", offlinePlanned: "Disponible", offlineNote: "La activación usa una solicitud de dispositivo y una licencia firmada sin enviar datos de la base al vendedor.", licenseCaution: "Para cambiar de dispositivo o reinstalar Windows, solicite una reemisión con los datos de compra.",
  purchaseTitle: "Pruébelo 14 días y compre solo si le resulta útil", purchaseLead: "La licencia Standard está disponible en Japón mediante Stripe. El pago con Polar para otras regiones está en preparación.", license1: "Un dispositivo de diagnóstico por licencia", license2: "Usuarios y bases PostgreSQL ilimitados dentro de la misma organización", license3: "Después de comprar, envíe la solicitud del dispositivo y reciba una licencia offline", globalPreparing: "Pago internacional próximamente",
  deliveryTitle: "Cómo recibir la licencia", deliveryLead: "El instalador es el mismo para prueba y versión completa.", delivery1Title: "Complete el pago", delivery1Body: "Guarde el número de pedido de Stripe y el correo usado en la compra.", delivery2Title: "Exporte la solicitud", delivery2Body: "En Licencia, guarde el archivo .dba-request. No contiene datos de la base ni SQL.", delivery3Title: "Envíe la solicitud", delivery3Body: "Envíe por correo el pedido, el correo de compra y el archivo a", delivery3Tail: ".", delivery4Title: "Importe la licencia", delivery4Body: "Importe el archivo .dba-license recibido para activar la versión completa.", deliveryTiming: "En la fase inicial, la licencia se emite manualmente en un máximo de dos días hábiles tras verificar la compra.", legalPending: "La venta está abierta en Japón. El pago para otras regiones está en preparación."
});

Object.assign(translations.id, {
  preview: "Windows v0.4.1", trialAvailable: "Uji coba gratis 14 hari", downloadTrial: "Coba gratis 14 hari", unsignedNote: "Build Windows saat ini belum ditandatangani. Ikuti kebijakan keamanan organisasi dan uji terlebih dahulu di perangkat evaluasi.", plannedPrice: "Harga", postgresVersions: "Koneksi dan diagnosis diuji dengan PostgreSQL 14, 17, dan 18", heroNote: "Instalasi tidak memulai masa uji coba. Semua fitur tersedia selama 14 hari setelah analisis database nyata pertama berhasil.",
  licenseLead: "Tidak memerlukan aktivasi online terus-menerus. Lisensi terikat ke satu perangkat Windows yang menjalankan aplikasi.", standardPlan: "Lisensi Standard", deviceLimit: "Satu perangkat diagnosis", deviceDefinition: "Lisensi terikat ke satu PC Windows, jump server, atau VM.", offlinePlanned: "Tersedia", offlineNote: "Aktivasi menggunakan permintaan perangkat dan lisensi bertanda tangan tanpa mengirim data database.", licenseCaution: "Untuk penggantian perangkat atau instalasi ulang Windows, ajukan penerbitan ulang dengan data pembelian.",
  purchaseTitle: "Coba 14 hari, lalu beli bila bermanfaat", purchaseLead: "Lisensi Standard tersedia melalui Stripe di Jepang. Checkout Polar untuk wilayah lain sedang disiapkan.", license1: "Satu perangkat diagnosis per lisensi", license2: "Pengguna dan target PostgreSQL tanpa batas dalam organisasi yang sama", license3: "Setelah membeli, kirim permintaan perangkat dan terima lisensi offline", globalPreparing: "Checkout global segera hadir",
  deliveryTitle: "Cara menerima lisensi", deliveryLead: "Installer uji coba dan versi penuh sama; tidak perlu mengunduh ulang.", delivery1Title: "Selesaikan pembayaran", delivery1Body: "Simpan nomor pesanan Stripe dan email pembelian.", delivery2Title: "Ekspor permintaan perangkat", delivery2Body: "Di menu Lisensi, simpan .dba-request. File ini tidak berisi data database atau SQL.", delivery3Title: "Kirim permintaan", delivery3Body: "Kirim nomor pesanan, email pembelian, dan file permintaan ke", delivery3Tail: ".", delivery4Title: "Impor lisensi", delivery4Body: "Impor .dba-license yang diterima untuk mengaktifkan versi penuh.", deliveryTiming: "Pada tahap awal, lisensi diterbitkan manual dalam dua hari kerja setelah pembelian diverifikasi.", legalPending: "Penjualan dibuka untuk Jepang. Checkout wilayah lain sedang disiapkan."
});

Object.assign(translations.ko, {
  preview: "Windows v0.4.1", trialAvailable: "14일 무료 체험", downloadTrial: "14일 무료로 사용", unsignedNote: "현재 Windows 빌드는 코드 서명이 없습니다. 조직의 보안 규정에 따라 검증 장치에서 먼저 확인하세요.", plannedPrice: "판매 가격", postgresVersions: "PostgreSQL 14, 17, 18 연결 및 진단 검증 완료", heroNote: "설치만으로 체험 기간이 시작되지 않습니다. 실제 DB의 첫 진단 성공 시점부터 14일간 모든 기능을 사용할 수 있습니다.",
  licenseLead: "상시 온라인 인증 없이 DB Bottleneck Analyzer를 실행하는 Windows 장치 1대에 연결됩니다.", standardPlan: "Standard 라이선스", deviceLimit: "진단 장치 1대", deviceDefinition: "Windows PC, 점프 서버 또는 VM 중 한 대에 라이선스가 연결됩니다.", offlinePlanned: "지원", offlineNote: "DB 정보를 판매자에게 보내지 않고 장치 요청 파일과 서명된 라이선스로 인증합니다.", licenseCaution: "장치 교체나 Windows 재설치 시 구매 정보를 확인한 후 재발급합니다.",
  purchaseTitle: "14일 사용해 본 뒤 필요할 때 구매", purchaseLead: "일본에서는 Stripe로 Standard 라이선스를 구매할 수 있습니다. 그 외 지역의 Polar 결제는 준비 중입니다.", license1: "라이선스 1개당 진단 장치 1대", license2: "동일 조직 내 사용자 수와 PostgreSQL 대상 수는 제한 없음", license3: "구매 후 장치 요청 파일을 이메일로 보내 오프라인 라이선스를 받습니다", globalPreparing: "해외 결제 준비 중",
  deliveryTitle: "구매 후 라이선스 수령 방법", deliveryLead: "체험판과 정식판은 같은 설치 파일을 사용하므로 다시 다운로드할 필요가 없습니다.", delivery1Title: "결제 완료", delivery1Body: "Stripe 주문 번호와 구매 이메일을 보관합니다.", delivery2Title: "장치 요청 내보내기", delivery2Body: "앱의 라이선스 화면에서 .dba-request를 저장합니다. DB 정보와 SQL은 포함되지 않습니다.", delivery3Title: "이메일로 신청", delivery3Body: "주문 번호, 구매 이메일, 장치 요청 파일을", delivery3Tail: "로 보냅니다.", delivery4Title: "라이선스 가져오기", delivery4Body: "받은 .dba-license를 같은 화면에서 가져오면 정식판이 활성화됩니다.", deliveryTiming: "초기 판매에서는 구매 확인 후 영업일 기준 2일 이내에 수동 발급합니다.", legalPending: "일본 내 판매를 시작했습니다. 해외 결제는 준비 중입니다."
});

const japaneseFallback = {};
document.querySelectorAll("[data-i18n]").forEach((node) => { japaneseFallback[node.dataset.i18n] = node.innerHTML; });

const supported = ["ja", "en", "es", "id", "ko"];
const params = new URLSearchParams(window.location.search);
const requested = params.get("lang") || navigator.language.slice(0, 2);
let currentLanguage = supported.includes(requested) ? requested : "en";

function t(key) {
  return (translations[currentLanguage] && translations[currentLanguage][key]) || japaneseFallback[key] || key;
}

function applyLanguage(language) {
  currentLanguage = supported.includes(language) ? language : "en";
  document.documentElement.lang = currentLanguage;
  document.getElementById("language-select").value = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.innerHTML = t(node.dataset.i18n); });
  document.title = translations[currentLanguage].metaTitle;
  document.querySelector('meta[name="description"]').content = translations[currentLanguage].metaDescription;
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("lang", currentLanguage);
  history.replaceState(null, "", nextUrl);
  updateCheckout();
}

function updateCheckout() {
  const region = document.getElementById("purchase-region");
  const isJapan = region.value === "jp";
  const provider = isJapan ? "Stripe" : "Polar";
  const pricePlans = {
    jp: { price: "16,390円（税込）", note: "priceJpNote", link: "stripeJapan" },
    west: { price: "$79–$89", note: "priceTaxNote", link: "polarWest" },
    kr: { price: "₩100,000–₩110,000", note: "priceTaxNote", link: "polarKorea" },
    es: { price: "$49–$69", note: "priceTaxNote", link: "polarSpanish" },
    id: { price: "$29–$39 / 約Rp450,000", note: "priceTaxNote", link: "polarIndonesia" }
  };
  const plan = pricePlans[region.value] || pricePlans.west;
  const links = window.DBBA_CHECKOUT_LINKS || {};
  const configuredUrl = links[plan.link] || (provider === "Polar" ? links.polarGlobal : "");
  const url = allowedCheckoutUrl(provider, configuredUrl) ? configuredUrl : "";
  document.getElementById("planned-price").textContent = plan.price;
  document.getElementById("price-note").textContent = t(plan.note);
  document.getElementById("provider-name").textContent = provider;
  const button = document.getElementById("checkout-button");
  const stripeContainer = document.getElementById("stripe-buy-container");
  stripeContainer.hidden = !isJapan;
  button.hidden = isJapan;
  button.disabled = !url;
  button.textContent = url ? t("buyNow") : t("globalPreparing");
  button.dataset.checkoutUrl = url || "";
  const note = document.getElementById("checkout-language-note");
  const showEnglishNote = currentLanguage === "id" && provider === "Polar";
  note.hidden = !showEnglishNote;
  note.textContent = showEnglishNote ? t("checkoutEnglish") : "";
}

function allowedCheckoutUrl(provider, value) {
  if (!value) return false;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return false;
    return provider === "Stripe" ? url.hostname === "buy.stripe.com" : url.hostname === "buy.polar.sh";
  } catch {
    return false;
  }
}

document.getElementById("language-select").addEventListener("change", (event) => applyLanguage(event.target.value));
document.getElementById("purchase-region").addEventListener("change", updateCheckout);
document.getElementById("checkout-button").addEventListener("click", (event) => {
  const url = event.currentTarget.dataset.checkoutUrl;
  if (url) window.location.assign(url);
});

const defaultRegions = { ja: "jp", en: "west", es: "es", id: "id", ko: "kr" };
document.getElementById("purchase-region").value = defaultRegions[currentLanguage] || "west";
applyLanguage(currentLanguage);
