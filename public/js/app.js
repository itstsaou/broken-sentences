// Taken from https://stackoverflow.com/a/39914235
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function app() {
    // TODO(KC): use the npm package with require statement?
    // so we can avoid this waiting for the tracery to finish initialize?
    await sleep(1 * 1000);

    let pocGrammar = {
        "experienceBegin": ["อาหาร"],
        "concept": ["อาหาร", "เมนู"],
        "dish": ["ผัดไทย #mainIngredient#", "ก๋วยเตี๋ยว #noodleModifier1# #noodleModifier2#",
            "ต้มยำกุ้ง", "ส้มตำ", "ยำทะเล", "ข้าวผัด #mainIngredient#", "โจ๊ก #mainIngredient#"
        ],
        "noodleModifier1": ["เส้นเล็ก", "เส้นใหญ่", "น้ำ", "แห้ง"],
        "noodleModifier2": ["น้ำ", "แห้ง"],
        "mainIngredient": ["กุ้ง", "ปู", "ไก่", "หมู"],
        "action": ["ขอ", "คิดเงิน"],
        "experience": ["หวาน", "เปรี้ยว", "เค็ม", "เผ็ด", "จืด", "ขม", "อร่อย"],
        "experienceModifier": ["มาก", "น้อย", ""],
        "ending": ["ครับ", "ค่ะ"],
        "sentence": ["ขอ #dish# #ending#", "คิดเงินด้วย #ending#",
            "คิดเงินค่า #dish# ด้วย#ending#",
            "#dish# #experience# #experienceModifier#"
        ]
    };
    let grammar = tracery.createGrammar(pocGrammar);
    let text = grammar.flatten("#sentence#");
    console.log(text);

    let outputEle = document.getElementById("output");
    outputEle.innerHTML = text;
}

$(window).on("load", () => {
    app();
});