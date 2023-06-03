import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductHttpService extends BaseHttpService<Product> {
  otroRequest() {
    this.url;
    //code
    //code to create another apart to the BaseHttpService methods :D
  }
}
