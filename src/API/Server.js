import React from 'react';

let reasonArr = [
  {action:'позвал', content:'в кино'},{action:'попросил', content:'помочь с работой'},{action:'предложил', content:'вызвать "девочек"'},
  {action:'позвал', content:'бухать'},{action:'попросил', content:'посидеть с детьми'},{action:'предложил', content:'нажраться'},
  {action:'позвал', content:'на ужин'},{action:'попросил', content:'скинуть интимку'},{action:'предложил', content:'сходить в клуб'},
  {action:'позвал', content:'на дачу'},{action:'попросил', content:'занять денег'},{action:'предложил', content:'половой акт'},
  {action:'позвал', content:'гулять'},{action:'попросил', content:'довести в больницу'},{action:'предложил', content:'сунуть палец в розетку'},
  {action:'позвал', content:'на охоту'},{action:'попросил', content:'Доесть'},{action:'предложил', content:'создать семью'},
];

let whoArr = [
  {sex:'и', who:'Родители'},{sex:'', who:'Брат'},{sex:'', who:'Муж'},{sex:'', who:'Бомж'},{sex:'', who:'Друг'},
  {sex:'а', who:'Сестра'},{sex:'', who:'Коллега'},{sex:'и', who:'Друзья'},{sex:'а', who:'Мама'},{sex:'', who:'Отец'},
  {sex:'и', who:'Незнакомцы'},{sex:'и', who:'Наркоманы'},{sex:'и', who:'Свингеры'},{sex:'', who:'Клоун'},{sex:'', who:'Начальник'},
  {sex:'', who:'Собака'},{sex:'', who:'Призрак'},{sex:'', who:'Путин'},{sex:'', who:'Анимешник'},{sex:'', who:'Приятель'},
  {sex:'', who:'Наполеон'},{sex:'', who:'Репер'},{sex:'', who:'Пушкин'},{sex:'и', who:'Инопланетяне'},{sex:'и', who:'Аборигены'},
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
