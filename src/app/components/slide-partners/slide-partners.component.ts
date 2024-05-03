import { Component} from '@angular/core';

@Component({
  selector: 'app-slide-partners',
  templateUrl: './slide-partners.component.html',
  styleUrl: './slide-partners.component.scss'
})
export class SlidePartnersComponent {
  mainPath:string = '../../../assets/images/partners/';

  imagePaths: string[] = [
    `${this.mainPath}amil.webp`,
    `${this.mainPath}bairesdev.webp`,
    `${this.mainPath}Caloi.png`,
    `${this.mainPath}carrefour.webp`,
    `${this.mainPath}dia.webp`,
    `${this.mainPath}cobasi.webp`,
    `${this.mainPath}getnet.webp`,
    `${this.mainPath}fast.webp`,
    `${this.mainPath}panasonic.webp`,
    `${this.mainPath}sodexo.webp`,
    `${this.mainPath}unimed.webp`,
    `${this.mainPath}vigor.webp`,
  ];

}
