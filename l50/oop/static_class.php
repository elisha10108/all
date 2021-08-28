<?php 
  class TaxClass {
    

    static function addVat($price){
      return $price * 1.17;
    }


    static function addShipping($price){
      return $price * 1.10;
    }




  }

