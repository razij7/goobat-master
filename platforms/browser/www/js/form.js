var is_guest = '';
var note = '';
var max_payment_days = '';
var id_risk = '';
var show_public_prices = '';
var outstanding_allow_amount = '';
var ape = '';
var siret = '';
var company = '';
var website = '';
var optin = '';
var newsletter = '';
var birthday = '';
var id_gender = '';
var email = '';
var lastname = '';
var firstname = '';
var passwd = '';
var deleted = '';
var last_passwd_gen = '';
var ip_registration_newsletter = '';
var newsletter_date_add = '';
var id_default_group = '';

var id_address_delivery = '';
var id_address_invoice = '';
var id_currency = '';
var id_customer = '';
var id_guest = ''; //tiap buka web, id guest nambah, kalo baru sign up, id customer masuk ke id guest,
var id_lang = '';
var id_shop_group = '';
var id_shop = '';
var id_carrier = '';
var recyclable = '';
var gift = '';
var gift_message = '';
var mobile_theme = '';
var delivery_option = '';
var secure_key = '';
var allow_separated_package = '';
var date_add = '';
var date_upd = '';
var id_product = '';
var id_product_attribute = '';
var quantity = '';
var id_cart = '';
var current_state = '';
var module = '';
var invoice_number = '';
var invoice_date = '';
var delivery_number = '';
var delivery_date = '';
var valid = '';
var date_add = '';
var date_upd = '';
var shipping_number = '';
var id_shop_group = '';
var id_shop = '';
var secure_key = '';
var payment = '';
var recyclable = '';
var gift = '';
var gift_message = '';
var mobile_theme = '';
var total_discounts = '';
var total_discounts_tax_incl = '';
var total_discounts_tax_excl = '';
var total_paid = '';
var total_paid_tax_incl = '';
var total_paid_tax_excl = '';
var total_paid_real = '';
var total_products = '';
var total_products_wt = '';
var total_shipping = '';
var total_shipping_tax_incl = '';
var total_shipping_tax_excl = '';
var carrier_tax_rate = '';
var total_wrapping = '';
var total_wrapping_tax_incl = '';
var total_wrapping_tax_excl = '';
var round_mode = '';
var round_type = '';
var conversion_rate = '';
var reference = '';
var product_id = '';
var product_attribute_id = '';
var product_quantity = '';
var product_name = '';
var product_reference = '';
var product_ean13 = '';
var product_upc = '';
var product_price = '';
var unit_price_tax_incl = '';
var unit_price_tax_excl = '';
var name = '';
var active = '';
var id = '';
var id_manufacturer = '';
var id_supplier = '';
var id_warehouse = '';
var id_country = '';
var id_state = '';
var alias = '';
var vat_number = '';
var address1 = '';
var address2 = '';
var postcode = '';
var city = '';
var other = '';
var phone = '';
var phone_mobile = '';
var dni = '';
var stats_date_from = '';
var stats_date_to = '';
var stats_compare_from = '';
var stats_compare_to = '';
var id_profile = '';
var bo_color = '';
var default_tab = '';
var bo_theme = '';
var bo_css = '';
var bo_width = '';
var bo_menu = '';
var stats_compare_option = '';
var preselect_date_range = '';
var id_last_order = '';
var id_last_customer_message = '';
var id_last_customer = '';
var depends_on_stock = '';
var out_of_stock = '';
var id_order = '';
var id_order_invoice = '';
var weight = '';
var shipping_cost_tax_excl = '';
var shipping_cost_tax_incl  = '';
var tracking_number = '';
var product_quantity_reinjected = '';
var group_reduction = '';
var discount_quantity_applied = '';
var download_hash = '';
var download_deadline = '';
var product_quantity_in_stock = '';
var product_quantity_return = '';
var product_quantity_refunded = '';
var reduction_percent = '';
var reduction_amount = '';
var reduction_amount_tax_incl = '';
var reduction_amount_tax_excl = '';
var product_quantity_discount = '';
var product_supplier_reference = '';
var product_weight = '';
var tax_computation_method = '';
var id_tax_rules_group = '';
var ecotax = '';
var ecotax_tax_rate = '';
var download_nb = '';
var total_price_tax_incl = '';
var total_price_tax_excl = '';
var total_shipping_price_tax_excl = '';
var total_shipping_price_tax_incl = '';
var purchase_supplier_price = '';
var original_product_price = '';
var original_wholesale_price = '';
var id_employee = '';
var id_order_state = '';
var id_owner = '';
var number = '';
var total_discount_tax_excl = '';
var total_discount_tax_incl = '';
var shipping_tax_computation_method = '';
var shop_address = '';
var invoice_address = '';
var delivery_address = '';
var order_reference = '';
var amount = '';
var payment_method = '';
var transaction_id = '';
var card_number = '';
var card_brand = '';
var card_expiration = '';
var card_holder = '';

//orders
/*syarat orders :
	secure key
	id_cart
	id_customer
	id_address_delivery
	id_address_invoice
*/
/*
id_address_delivery = 61;
id_address_invoice = 61;
id_cart = 218;
id_currency = 2;
id_lang = 2;
id_customer = 68;
id_carrier = 0;
current_state = 3;
module = 'bca';
id_shop = 1;
secure_key = '934e8540bf319a616de539a37c63797b';
payment = 'BCA';
total_discounts = 0;//ke float sendiri
total_discounts_tax_incl = 0;//ke float sendiri
total_discounts_tax_excl = 0;//ke float sendiri
total_paid = 348000;//ke float sendiri
total_paid_tax_incl = 348000;//ke float sendiri
total_paid_tax_excl = 348000;//ke float sendiri
total_paid_real = 0;//ke float sendiri
total_products = 340000;//ke float sendiri
total_products_wt = 340000//ke float sendiri
total_shipping = 8000;//ke float sendiri
total_shipping_tax_incl = 8000;//ke float sendiri
total_shipping_tax_excl = 8000;//ke float sendiri
conversion_rate = 1;

objectData[0][1] = 61//id_address_delivery
objectData[0][2] = 61// id_address_invoice
objectData[0][3] = 218//id_cart
objectData[0][4] = 2//id_currency
objectData[0][5] = 2//id_lang
objectData[0][6] = 68//id_customer
objectData[0][7] = 0//id_carrier
objectData[0][8] = 3//current_state
objectData[0][9] = 'bca'//module
objectData[0][19] = 1//id_shop
objectData[0][20] = '934e8540bf319a616de539a37c63797b'//secure_key
objectData[0][21] = 'BCA'//payment
objectData[0][26] = 0//total_discounts
objectData[0][27] = 0//total_discounts_tax_incl
objectData[0][28] = 0//total_discounts_tax_excl
objectData[0][29] = 348000//total_paid
objectData[0][30] = 348000//total_paid_tax_incl
objectData[0][31] = 348000//total_paid_tax_excl
objectData[0][32] = 0//total_paid_real
objectData[0][33] = 340000//total_products
objectData[0][34] = 340000//total_products_wt
objectData[0][35] = 8000//total_shipping
objectData[0][36] = 8000//total_shipping_tax_incl
objectData[0][37] = 8000//total_shipping_tax_excl
objectData[0][44] = 1//conversion_rate
*/

//carts
/*
id_address_delivery = 61;
id_address_invoice = 61;
id_currency = 2;
id_customer = 68;
id_lang = 2;
id_product = 187;
quantity = 1;
*/
//id_guests = 0 karena id guest tergantung dari visit user ke web, 0 karena customer blm daftar
/*
objectData[1][1] = 55;
objectData[1][2] = 55;
objectData[1][3] = 2;
objectData[1][4] = 59;
objectData[1][6] = 2;
objectData[1][19] = 139;
objectData[1][22] = 1;
*/



//FORM customers

/*
id_default_group = 3;
id_lang = 2;
passwd = 'tesaja';
lastname = 'Aja';
firstname = 'Razi';
email = 'razijamil@improva.co.id';

objectData[2][1] = 3;
objectData[2][2] = 2;
objectData[2][8] = 'tesaja';
objectData[2][9] = 'Aja';
objectData[2][10] = 'Razi';
objectData[2][11] = 'razijamil@improva.co.id';
*/

//FORM addresses -- lastname dan firstname harus di get dari customer sesuai id customer

/*
id_customer = 59;
id_country = 111;
id_state = 11;
alias = 'Home';
company = 'PT Improva';
lastname = 'jamil';
firstname = 'raziz';
address1 = 'Pulomas Utara no 42';
postcode = 13210;
city = 'Jakarta Timur';
phone = 109109;

objectData[3][1] = 59;
objectData[3][5] = 111;
objectData[3][6] = 11;
objectData[3][7] = 'Home';
objectData[3][8] = 'PT Improva';
objectData[3][9] = 'jamil';
objectData[3][10] = 'raziz';
objectData[3][12] = 'Pulomas Utara no 42';
objectData[3][14] = 13210;
objectData[3][15] = 'Jakarta Timur';
objectData[3][17] = 109109;
*/
//FORM EMPLOYEES

/*
id_lang = 2; 
passwd = 'asdasd';
lastname = 'J';
firstname = 'R';
email = 'razijamilf@gmail.com'
id_profile = 3;

objectData[5][1] = 2;
objectData[5][7] = 'asdasd';
objectData[5][8] = 'J';
objectData[5][9] = 'R';
objectData[5][10] = 'razijamilf@gmail.com';
objectData[5][13] = 3;
*/

//FORM stock_availables

/*
id_product = 187;
id_product_attribute = 0;
quantity = 1;
depends_on_stock = 0;
out_of_stock = 2;

objectData[6][1] = 187;
objectData[6][2] = 0;
objectData[6][5] = 1;
objectData[6][6] = 0;
objectData[6][7] = 2;
*/

//FORM order_carriers
/*
objectData[7][1] = 12;
objectData[7][2] = 4;
*/
//FORM order_details
/*
objectData[8][1] = 11;
	objectData[8][10] = 0;
	objectData[8][11] = 1;
	objectData[8][12] = 'CENDO CATARLENT EYE DROPS 5 ML';
	objectData[8][13] = 2;
	objectData[8][17] = 30300.000000;
	webService.create('order_details');
*/

//FORM order_histories
/*
	objectData[9][2] = 12;
	objectData[9][3] = 12;
	webService.create('order_histories');
*/
//FORM order_owners <------------ MASIH ERROR
/*
objectData[10][2] = 12;
	
	webService.create('order_owners');
*/
//FORM order_invoices
/*
objectData[11][1] = 11;
	objectData[11][2] = 0;
	
	webService.create('order_invoices');
*/
//FORM order_payments
/*
objectData[12][2] = 11;
	objectData[12][3] = 0;
	
	webService.create('order_payments');
*/
