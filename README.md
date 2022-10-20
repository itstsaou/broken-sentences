# Broken Sentences

A collection of grammars for [Tracery](https://github.com/galaxykate/tracery). This work is inspired by a wonderful talk by Kate Compton 
at 2021 Strang Loop Conference titled "Poems in an accidental language".

## What is Tracery?

> Tracery is a JavaScript library, by GalaxyKate, that uses grammars to generate surprising new text.

For a tutorial on Tracery, see http://www.crystalcodepalace.com/traceryTut.html

## Why call it broken?

The grammar defined here will not be able to fully represent the complex nature of human languages.

## Proof of Concept

The vocabulary in this PoC is taken from Elementary Thai course offered here at Ohio University. For more information about the course
and other language courses, please visit https://www.ohio.edu/cis/world-languages

```json
{
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
}
```
