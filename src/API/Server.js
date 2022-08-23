import React from 'react';

let reasonArr = [
  {action:'Позвал', content:'в кино'},{action:'Попросил', content:'помочь с работой'},{action:'Предложил', content:'вызвать "девочек"'},
  {action:'Позвал', content:'бухать'},{action:'Попросил', content:'посидеть с детьми'},{action:'Предложил', content:'нажраться'},
  {action:'Позвал', content:'на ужин'},{action:'Попросил', content:'скинуть интимку'},{action:'Предложил', content:'сходить в клуб'},
  {action:'Позвал', content:'на дачу'},{action:'Попросил', content:'занять денег'},{action:'Предложил', content:'половой акт'},
  {action:'Позвал', content:'гулять'},{action:'Попросил', content:'довести в больницу'},{action:'Предложил', content:'сунуть палец в розетку'},
];

let whoArr = [
  {sex:'и', who:'Родители'},{sex:'', who:'Брат'},{sex:'', who:'Муж'},{sex:'', who:'Бомж'},{sex:'', who:'Друг'},
  {sex:'а', who:'Сестра'},{sex:'', who:'Коллега'},{sex:'и', who:'Друзья'},{sex:'а', who:'Мама'},{sex:'', who:'Отец'},
  {sex:'и', who:'Незнакомцы'},{sex:'и', who:'Наркоманы'},{sex:'и', who:'Свингеры'},{sex:'', who:'Клоун'},{sex:'', who:'Начальник'},
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export class Server{
  static count_cards = 0;

  static getCards(limit){
    let cards = [];
    for(let i = 0; i<limit; i++){
      let card ={};
      let indexReadon = getRandomInt(0, reasonArr.length);
      let indexWho = getRandomInt(0, whoArr.length);

      let str = whoArr[indexWho]['who']+ ' ' + reasonArr[indexReadon]['action'] + whoArr[indexWho]['sex']+ ' ' + reasonArr[indexReadon]['content'];
      card['content'] = str;
      card['id'] = Server.count_cards;
      cards.push(card);
      Server.count_cards+=1;
    }
    return cards;
  }
}
