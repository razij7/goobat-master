var objectData = [];
objectData[0] 	=	[id,
					id_address_delivery,
					id_address_invoice,
					id_cart,
					id_currency,
					id_lang,
					id_customer,
					id_carrier,
					current_state,
					module,
					invoice_number,
					invoice_date,
					delivery_number,
					delivery_date,
					valid,
					date_add,
					date_upd,
					shipping_number,
					id_shop_group,
					id_shop,
					secure_key,
					payment,
					recyclable,
					gift,
					gift_message,
					mobile_theme,
					total_discounts,
					total_discounts_tax_incl,
					total_discounts_tax_excl,
					total_paid,
					total_paid_tax_incl,
					total_paid_tax_excl,
					total_paid_real,
					total_products,
					total_products_wt,
					total_shipping,
					total_shipping_tax_incl,
					total_shipping_tax_excl,
					carrier_tax_rate,
					total_wrapping,
					total_wrapping_tax_incl,
					total_wrapping_tax_excl,
					round_mode,
					round_type,
					conversion_rate,
					reference,
					product_id,
					product_attribute_id,
					product_quantity,
					product_name,
					product_reference,
					product_ean13,
					product_upc,
					product_price,
					unit_price_tax_incl,
					unit_price_tax_excl];
					
objectData[1] 	= 	[id,
					id_address_delivery,
					id_address_invoice,
					id_currency,
					id_customer,
					id_guest,
					id_lang,
					id_shop_group,
					id_shop,
					id_carrier,
					recyclable,
					gift,
					gift_message,
					mobile_theme,
					delivery_option,
					secure_key,
					allow_separated_package,
					date_add,
					date_upd,
					id_product,
					id_product_attribute,
					id_address_delivery,
					quantity];
					
objectData[2] 	= 	[id,
					id_default_group,
					id_lang,
					newsletter_date_add,
					ip_registration_newsletter,
					last_passwd_gen,
					secure_key,
					deleted,
					passwd,
					lastname,
					firstname,
					email,
					id_gender,
					birthday,
					newsletter,
					optin,
					website,
					company,
					siret,
					ape,
					outstanding_allow_amount,
					show_public_prices,
					id_risk,
					max_payment_days,
					active,
					note,
					is_guest,
					id_shop,
					id_shop_group,
					date_add,
					date_upd];

objectData[3] = 	[id, //0
					id_customer,
					id_manufacturer,
					id_supplier,
					id_warehouse,
					id_country,
					id_state,
					alias,
					company,
					lastname,
					firstname,
					vat_number,
					address1, //12
					address2, //13
					postcode,
					city,
					other,
					phone,
					phone_mobile,
					dni,
					deleted,
					date_add,
					date_upd];
					
objectData[4]	=	[id,
					name,
					active];
					
objectData[5] = 	[id,
					id_lang,
					last_passwd_gen,
					stats_date_from,
					stats_date_to,
					stats_compare_from,
					stats_compare_to,
					passwd,
					lastname,
					firstname,
					email,
					active,
					optin,
					id_profile,
					bo_color,
					default_tab,
					bo_theme,
					bo_css,
					bo_width,
					bo_menu,
					stats_compare_option,
					preselect_date_range,
					id_last_order,
					id_last_customer_message,
					id_last_customer];

objectData[6] = 	[id,
					id_product,
					id_product_attribute,
					id_shop,
					id_shop_group,
					quantity,
					depends_on_stock,
					out_of_stock];
					
objectData[7] = 	[id,
					id_order, //order.id
					id_carrier, //order.id_carrier
					id_order_invoice , //order.invoice_number
					weight , //order.associations.order_rows.order_row.product_quantity * product.weight
					shipping_cost_tax_excl, //order.total_shipping_tax_excl ?
					shipping_cost_tax_incl , //order.total_shipping_tax_incl ?
					tracking_number , //order.shipping_number
					date_add ];

objectData[8] = 	[id,
					id_order ,//order.id
					product_id ,//order.associations.order_rows.order_row[i].product_id
					product_attribute_id ,//order.associations.order_rows.order_row[i].product_attribute_id
					product_quantity_reinjected ,//default 0
					group_reduction ,//default 0.00
					discount_quantity_applied ,//default 0
					download_hash ,//default ''
					download_deadline ,//default 0000-00-00 00:00:00
					id_order_invoice ,//order.invoice_number
					id_warehouse ,//default 0 
					id_shop ,//order.id_shop
					product_name ,//order.associations.order_rows.order_row[i].product_name
					product_quantity ,//order.associations.order_rows.order_row[i].product_quantity
					product_quantity_in_stock , //stock_availables ?
					product_quantity_return , //default 0
					product_quantity_refunded , //default 0
					product_price ,//order.associations.order_rows.order_row[i].product_price
					reduction_percent , //default 0.00
					reduction_amount , //default 0.00000
					reduction_amount_tax_incl,//default 0.00000
					reduction_amount_tax_excl,//default 0.00000
					product_quantity_discount,//default 0.00000
					product_ean13,//default ''
					product_upc,//default ''
					product_reference,//default ''
					product_supplier_reference,//default ''
					product_weight,//product.weight
					tax_computation_method,
					id_tax_rules_group,
					ecotax,
					ecotax_tax_rate,
					download_nb,
					unit_price_tax_incl,//order.associations.order_rows.order_row[i].unit_price_tax_incl
					unit_price_tax_excl ,//order.associations.order_rows.order_row[i].unit_price_tax_excl
					total_price_tax_incl,
					total_price_tax_excl,
					total_shipping_price_tax_excl,
					total_shipping_price_tax_incl,
					purchase_supplier_price,
					original_product_price,
					original_wholesale_price];
					
objectData[9] = 	[id,
					id_employee  ,// default 0
					id_order_state  ,//order.current_state
					id_order  ,//order.id
					date_add];
					
objectData[10] = 	[id,
					id_owner   ,
					id_order   ,//order.id
					date_add];
					
objectData[11] = 	[id,
					id_order ,//order.id
					number  ,//order.invoice_number
					delivery_number  ,
					delivery_date  ,
					total_discount_tax_excl ,
					total_discount_tax_incl ,
					total_paid_tax_excl ,//order.total_paid_tax_excl
					total_paid_tax_incl ,//order.total_paid_tax_incl
					total_products ,//order.total_product
					total_products_wt ,//order.total_product_wt
					total_shipping_tax_excl ,//order.total_shipping_tax_excl
					total_shipping_tax_incl ,//order.total_shipping_tax_iincl
					shipping_tax_computation_method ,
					total_wrapping_tax_excl ,
					total_wrapping_tax_incl ,
					shop_address  ,//default goobat<br />Indonesia
					invoice_address  ,
					delivery_address  ,
					note  ,
					date_add];
					
objectData[12] = 	[id,
					order_reference  ,//order.reference
					id_currency   ,//order.id_currency
					amount   ,//order.total_paid ?
					payment_method   ,//order.payment
					conversion_rate  ,//order.conversion_rate
					transaction_id  ,
					card_number  ,
					card_brand  ,
					card_expiration  ,
					card_holder  ,
					date_add];