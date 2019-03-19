import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hall-page',
  templateUrl: './hall-page.component.html',
  styleUrls: ['./hall-page.component.less']
})
export class HallPageComponent implements OnInit {
  hallArray: any = [
    { 
      imageUrl: 'https://pp.userapi.com/c850436/v850436359/a55c9/1Iba9FVYCQ0.jpg', 
      title: 'Зал AVIATOR', 
      desc: 'Площадь зала - 67,2м', 
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    { 
      imageUrl: 'https://sun1.dataix-by-minsk.userapi.com/c850036/v850036795/11f50f/NzwFUdxoFYE.jpg', 
      title: 'Зал НИКОЛЬ', 
      desc: 'Площадь зала - 70м2', 
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    { 
      imageUrl: 'https://pp.userapi.com/c850520/v850520358/ac0ec/yjDMZpCCG9A.jpg', 
      title: 'Зал BALANCE', 
      desc: 'Площадь зала - 40м2', 
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    { 
      imageUrl: 'https://pp.userapi.com/c851428/v851428358/aeedc/_eyNFV3Rb4o.jpg', 
      title: 'Зал SHABBY BABY', 
      desc: 'Площадь зала - 27м2', 
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    { 
      imageUrl: 'https://pp.userapi.com/c849228/v849228776/145913/Bcv3ITOwWY8.jpg', 
      title: 'Зал FANTASY', 
      desc: 'Площадь зала - 51,6м2', 
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    { 
      imageUrl: 'https://pp.userapi.com/c830209/v830209889/c64a/6EmSxllI5x8.jpg', 
      title: 'Уличная локация', 
      desc: 'Локация на улице! Не предполагает источников света и тепловых приборов. При предварительном бронировании можно взять снег- машину)', 
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    { 
      imageUrl: 'https://pp.userapi.com/c847016/v847016157/19a8f1/3Kpo26KJ9_8.jpg', 
      title: 'Зал FAMILY', 
      desc: 'Площадь зала - 59,4м2. Панорамные окна. Зал разделен на 2 комнаты', 
      rating: [{
        count: 12,
        rate: 4
      }]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
