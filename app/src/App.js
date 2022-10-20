import React from 'react';

import styled, { css } from 'styled-components'
import tracery from 'tracery-grammar';

const rawGrammar = {
  "experienceBegin": ["อาหาร"],
  "concept": ["อาหาร", "เมนู"],
  "dish": [
    "ผัดไทย #mainIngredient#", "ก๋วยเตี๋ยว #noodleModifier1# #noodleModifier2#",
    "ต้มยำกุ้ง", "ส้มตำ", "ยำทะเล", "ข้าวผัด #mainIngredient#", "โจ๊ก #mainIngredient#"
  ],
  "noodleModifier1": ["เส้นเล็ก", "เส้นใหญ่", "น้ำ", "แห้ง"],
  "noodleModifier2": ["น้ำ", "แห้ง"],
  "mainIngredient": ["กุ้ง", "ปู", "ไก่", "หมู"],
  "action": ["ขอ", "คิดเงิน"],
  "experience": ["หวาน", "เปรี้ยว", "เค็ม", "เผ็ด", "จืด", "ขม", "อร่อย"],
  "experienceModifier": ["มาก", "น้อย", ""],
  "ending": ["ครับ", "ค่ะ"],
  "sentence": [
    "ขอ #dish# #ending#", "คิดเงินด้วย #ending#",
    "คิดเงินค่า #dish# ด้วย#ending#",
    "#dish# #experience# #experienceModifier#"
  ]
};

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    const grammar = tracery.createGrammar(rawGrammar);
    let texts = [];
    for (let index = 0; index < 5; index++) {
      texts.push(grammar.flatten("#sentence#"));
    }

    this.state = {
      grammar: grammar,
      texts: texts,
    };
    
  }

  handleClick() {
    let texts = [];
    for (let index = 0; index < 5; index++) {
      texts.push(this.state.grammar.flatten("#sentence#"));
    }
    this.setState({
      texts: texts,
    });
  }

  render() {
    return (
      <div>
        <section>
          <Title>Broken Sentences</Title>
          <ul>
            {this.state.texts.map((v) => {
              return <li>{v}</li>
            })}
          </ul>
          <Button onClick={() => this.handleClick()} primary>Reroll</Button>
        </section>
      </div>
    );
  }
}

export default App;
