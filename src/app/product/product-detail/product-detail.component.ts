import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../api/product/product.service';
import { pluck, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../api/product/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productDetail: ProductModel;
  config: ConfigTab = {
    type: 'information',
  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.productService.getProductById(id))
      )
      .subscribe((data) => {
        this.productDetail = data;
        console.log(this.productDetail);
      });
  }

  selectedTab(type: string): void {
    this.config = { type };
  }
}

interface ConfigTab {
  type: string;
}
