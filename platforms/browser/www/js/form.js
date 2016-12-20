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

//orders
id_address_delivery = 61;
id_address_invoice = 61;
id_cart = 211;
id_currency = 2;
id_lang = 2;
id_customer = 68;
id_carrier = 3;
current_state = 2;
module = 'bca';
invoice_number = 7;
delivery_number = 6;
valid = 1;
id_shop_group = 1;
id_shop = 1;
secure_key = '934e8540bf319a616de539a37c63797b';
payment = 'BCA';
recyclable = 0;
gift = 0;
mobile_theme = 0;
total_discounts = 0;
total_discounts_tax_incl = 0;
total_discounts_tax_excl = 0;
total_paid = 308000;
total_paid_tax_incl = 308000;
total_paid_tax_excl = 308000;
total_paid_real = 308000;
total_products = 300000;
total_products_wt = 300000;
total_shipping = 8000;
total_shipping_tax_incl = 8000;
total_shipping_tax_excl = 8000;
carrier_tax_rate = 0;
total_wrapping = 0;
total_wrapping_tax_incl = 0;
total_wrapping_tax_excl = 0;
round_mode = 2;
round_type = 2;
conversion_rate = 1;
reference = 000000053;
product_id = 190;
product_attribute_id = 0;
product_quantity = 1;
product_name = 'Obat Baru';
product_price = 300000;
unit_price_tax_incl = 300000;
unit_price_tax_excl = 300000;


/*carts
id_address_delivery = 55;
id_address_invoice = 55;
id_currency = 2;
id_customer = 59;
id_lang = 2;
id_product = 139;
quantity = 1;
//id_guests = 0 karena id guest tergantung dari visit user ke web, 0 karena customer blm daftar

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

