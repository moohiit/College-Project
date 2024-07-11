<?php
require 'vendor/autoload.php';
// This will output the barcode as HTML output to display in the browser
$name="Mohit";
$redColor = [255, 0, 0];
$generator = new Picqer\Barcode\BarcodeGeneratorHTML();
echo $generator->getBarcode($name, $generator::TYPE_CODE_128,3, 50),"<br>";
