(self.webpackChunk_shopee_rating_microfe_rating_pc = self.webpackChunk_shopee_rating_microfe_rating_pc || []).push([[692], {
    65282: (e, t, _) => {
        "use strict";
        _.d(t, {
            j: () => s
        }),
        _(6714),
        _(87363);
        var a = _(6575)
          , i = _(57662)
          , o = _(60124);
        const r = 4103
          , n = new a.ENDPOINT({
            biz: r,
            country: (0,
            o.Kd)(),
            uid: 0,
            env: (0,
            o.dU)()
        });
        function s(e, t=!1) {
            if (e && (e.startsWith("https://") || e.startsWith("http://") || e.startsWith("file://")))
                return e;
            try {
                const {url: _} = n.getImgHttpsUrl(r, e, t ? "_tn" : "");
                return _
            } catch (_) {
                return (0,
                i.Jn)(e, t)
            }
        }
    }
    ,
    69932: (e, t, _) => {
        "use strict";
        _.d(t, {
            t: () => s
        });
        var a = _(87363)
          , i = _(15585)
          , o = _(72148);
        const r = {
            container: {
                position: "relative",
                boxSizing: "border-box",
                margin: "15px 0",
                fontSize: 14,
                lineHeight: "20px",
                color: "rgba(0,0,0,0.87)",
                wordBreak: "break-word",
                whiteSpace: "pre-wrap"
            },
            templateTag: {
                color: "rgba(0,0,0,0.4)"
            },
            suffix: {
                position: "absolute",
                right: 0,
                bottom: 0,
                background: "linear-gradient(to left, #ffffff 75%, rgba(255, 255, 255, 0))",
                paddingLeft: "24px"
            }
        };
        function n(e) {
            return e / 16 + "rem"
        }
        function s({isDeleted: e, isHidden: t, comment: _, templateTags: s, hasTemplateTag: l, suffixNode: d}) {
            if (!_)
                return d ? a.createElement("div", {
                    style: r.container
                }, a.createElement("div", {
                    style: r.suffix
                }, d || null)) : null;
            let p;
            if (e)
                p = i.I18n.t("pr_review_deleted");
            else {
                if (t)
                    return null;
                if (l) {
                    const {tmpTagsComments: e, comments: t} = (0,
                    o.mx)(s, _)
                      , i = [];
                    s.forEach(( (t, _) => {
                        const o = e[t];
                        o && i.push(a.createElement("div", {
                            key: _,
                            style: {
                                marginTop: _ ? n(6) : 0
                            }
                        }, a.createElement("span", {
                            style: r.templateTag
                        }, t, ": "), o))
                    }
                    )),
                    t && i.push(a.createElement("div", {
                        key: 100,
                        style: {
                            marginTop: n(12)
                        }
                    }, t)),
                    p = i
                } else
                    p = _
            }
            return a.createElement("div", {
                style: r.container
            }, p, a.createElement("div", {
                style: r.suffix
            }, d || null))
        }
    }
    ,
    23546: (e, t, _) => {
        "use strict";
        _.d(t, {
            N5: () => l,
            SQ: () => d,
            aJ: () => a,
            e5: () => p,
            ge: () => r,
            h4: () => n,
            nA: () => m,
            pq: () => u,
            q3: () => c,
            te: () => s,
            wc: () => i,
            wr: () => o
        });
        const a = "5ae7a873244d8d6bc7b1fb4a452a5043660c6ea86718c7c2295b0a0862dcdd22"
          , i = "240250d341f7bbe8d81c08c6997ccc34765823b371e4962942f42699317415b6"
          , o = "b75ec9bfd0d07f044edb0f896d6b6d1804058e4aac11ca49cd9c7c68ad47e286"
          , r = "2384644a6b18e635dc58a2ba51c0ffced0f61bfafb5ae8aa841323ec1ddb8929"
          , n = "884b6e0ddffd87cf9bee32011bf8f6a69beefe31fc227a145d136bad8f2a25c5"
          , s = "0a771b5912c20216eb22922338eef601bb23d3a5b9adf84e82e97010e11eed22"
          , l = {
            my: "Malaysia",
            sg: "Singapore",
            tw: "Taiwan",
            th: "Thailand",
            br: "Brazil",
            mx: "Mexico",
            id: "Indonesia",
            co: "Colombia",
            cl: "Chile",
            vn: "Vietnam",
            ph: "Philippines"
        }
          , d = "70ea67ac6c484880784e7fed2e6037f98ce4151cb0e00ebc20855fada94ddead"
          , p = "afd10421c1cc0f5bd6336078f9ead3bdba5dcd8818e3c95da9f546f33d1b4bed"
          , c = "8efb20daafe81a559db08c006f6a2dec4ec686fa57cde5ea7c21b60c15c9fb00"
          , m = 616
          , u = 178
    }
    ,
    20431: (e, t, _) => {
        "use strict";
        _.d(t, {
            o: () => a
        });
        const a = _(15585).I18n.create({
            transifyManagerCdnBase: "shopee-rating-rn-i8n-core",
            transifyMapping: {},
            transifyCollectionMapping: {},
            name: "shopee-rating-rn",
            transifyManagerId: 196,
            transifyManagerProject: "SHOPEE_RATING_RN"
        })
    }
    ,
    80207: (e, t, _) => {
        "use strict";
        _.d(t, {
            wl: () => r
        });
        var a = _(15585)
          , i = _(20431)
          , o = _(23546);
        function r(e) {
            return i.o.withI18nCollections([o.nA])(a.I18n.withI18nCollections([o.pq])(e))
        }
    }
    ,
    98937: (e, t, _) => {
        "use strict";
        var a;
        _.d(t, {
            a: () => a
        }),
        function(e) {
            e.add_to_cart = "add_to_cart",
            e.add_to_cart_success = "add_to_cart_success",
            e.add_updates = "add_updates",
            e.add_updates_dialog_description = "add_updates_dialog_description",
            e.add_updates_review_launched = "add_updates_review_launched",
            e.alert_review_hidden = "alert_review_hidden",
            e.alert_reviews_hidden = "alert_reviews_hidden",
            e.all = "all",
            e.ball_girth = "Ball Girth",
            e.bonus_coin_red = "bonus_coin_red",
            e.bonus_coins_hint_text = "bonus_coins_hint_text",
            e.bottom_length = "Bottom Length",
            e.bpg_ribbon_subtitle = "bpg_ribbon_subtitle",
            e.bpg_ribbon_title = "bpg_ribbon_title",
            e.bt_choose_existing = "bt_choose_existing",
            e.bt_take_photo = "bt_take_photo",
            e.btn_back = "btn_back",
            e.btn_back_to_edit = "btn_back_to_edit",
            e.btn_close = "btn_close",
            e.btn_refresh = "btn.refresh",
            e.btn_submit = "btn_submit",
            e.btn_submit_check = "btn_submit_check",
            e.btn_view_rating = "btn_view_rating",
            e.bust = "Bust",
            e.buy_now = "buy_now",
            e.can_not_updated = "can_not_updated",
            e.check_in_feed = "check_in_feed",
            e.clickable_template_hint_text = "Clickable_Template_Hint_Text",
            e.coins = "coins",
            e.coins_content_title = "coins_content_title",
            e.coins_earned_error_tip = "coins_earned_error_tip",
            e.coins_earned_tip = "coins_earned_tip",
            e.coins_panel_footer_tips_five = "coins_panel_footer_tips_five",
            e.coins_panel_footer_tips_four = "coins_panel_footer_tips_four",
            e.coins_panel_footer_tips_one = "coins_panel_footer_tips_one",
            e.coins_panel_footer_tips_seven = "coins_panel_footer_tips_seven",
            e.coins_panel_footer_tips_six = "coins_panel_footer_tips_six",
            e.coins_panel_footer_tips_three = "coins_panel_footer_tips_three",
            e.coins_panel_footer_tips_two = "coins_panel_footer_tips_two",
            e.coins_panel_tip = "coins_panel_tip",
            e.coins_panel_title = "coins_panel_title",
            e.coins_review_human = "coins_review_human",
            e.coins_review_least_media = "coins_review_least_media",
            e.coins_review_media = "coins_review_media",
            e.comfortable_fit = "Comfortable Fit",
            e.day = "day",
            e.deep_discount_end_message = "deep_discount_end_message",
            e.delivery_speed = "delivery_speed",
            e.description_product_page_new = "description_product_page_new",
            e.description_product_page_new__in = "description_product_page_new__IN",
            e.description_product_page_new__my = "description_product_page_new__MY",
            e.description_product_page_new__ph = "description_product_page_new__PH",
            e.description_product_page_new__sg = "description_product_page_new__SG",
            e.driver_rating = "driver_rating",
            e.driver_rating_disclaimer = "driver_rating_disclaimer",
            e.driver_service = "driver_service",
            e.error_no_internet = "error_no_internet",
            e.error_no_internet_content = "error_no_internet_content",
            e.flash_deal_starts_label = "flash_deal_starts_label",
            e.followup_review_after_days = "followup_review_after_days",
            e.followup_successfully_submitted = "followup_successfully_submitted",
            e.foot_length = "Foot Length",
            e.free_shipping_info_message = "free_shipping_info_message",
            e.free_shipping_info_message__mx = "free_shipping_info_message__MX",
            e.free_shipping_info_message_above_mbs = "free_shipping_info_message_above_mbs",
            e.free_shipping_info_message_below_mbs = "free_shipping_info_message_below_mbs",
            e.get_up_to = "get_up_to",
            e.got_it = "got_it",
            e.group_buy = "group_buy",
            e.height = "Height",
            e.hidden_rating_report_toast = "hidden_rating_report_toast",
            e.hint_greeting = "hint_greeting",
            e.hint_super_reviewer_invitation_intro = "hint_super_reviewer_invitation_intro",
            e.hint_super_reviewer_invitation_intro_1 = "hint_super_reviewer_invitation_intro_1",
            e.hint_super_reviewer_invitation_intro_2 = "hint_super_reviewer_invitation_intro_2",
            e.hint_super_reviewer_invitation_intro_3 = "hint_super_reviewer_invitation_intro_3",
            e.hip = "Hip",
            e.ideal_length = "Ideal Length",
            e.include_all_taxes = "include_all_taxes",
            e.invitation_tip_content_1 = "invitation_tip_content_1",
            e.invitation_tip_content_2 = "invitation_tip_content_2",
            e.invitation_tip_content_5 = "invitation_tip_content_5",
            e.invitation_tip_content_6 = "invitation_tip_content_6",
            e.invitation_tip_title_1 = "invitation_tip_title_1",
            e.invitation_tip_title_2 = "invitation_tip_title_2",
            e.invitation_tip_title_3 = "invitation_tip_title_3",
            e.invitation_tip_title_5 = "invitation_tip_title_5",
            e.invitation_tip_title_6 = "invitation_tip_title_6",
            e.item_count = "item_count",
            e.join_pdp = "join_pdp",
            e.label_about_service = "label_about_service",
            e.label_acknowledge = "label_acknowledge",
            e.label_active_date_ago_pdp = "label_active_date_ago_pdp",
            e.label_add_photo = "label_add_photo",
            e.label_add_to_cart = "label_add_to_cart",
            e.label_add_to_cart_pdp = "label_add_to_cart_pdp",
            e.label_age_control_msgs_customize = "label_age_control_msgs_customize",
            e.label_age_control_msgs_customize_repeated = "label_age_control_msgs_customize_repeated",
            e.label_age_control_no_customize = "label_age_control_no_customize",
            e.label_age_control_ok_customize = "label_age_control_ok_customize",
            e.label_alcohol_product_popup_no = "label_alcohol_product_popup_no",
            e.label_alcohol_product_popup_yes = "label_alcohol_product_popup_yes",
            e.label_all = "label_all",
            e.label_apply = "label_apply",
            e.label_auto_translated = "label_auto_translated",
            e.label_back_to_homepage_pdp = "label_back_to_homepage_pdp",
            e.label_back_to_previous = "label_back_to_previous",
            e.label_buy = "label_buy",
            e.label_buy_pdp = "label_buy_pdp",
            e.label_buyer_gallery = "label_buyer_gallery",
            e.label_buyer_rating = "label_buyer_rating",
            e.label_buyer_rating_idscs = "label_buyer_rating_idscs",
            e.label_buyer_rating_empty_desc = "label_buyer_rating_empty_desc",
            e.label_buyer_rating_empty_desc_idscs = "label_buyer_rating_empty_desc_idscs",
            e.label_buyer_rating_empty_tip = "label_buyer_rating_empty_tip",
            e.label_buyer_response = "label_buyer_response",
            e.label_buyer_review_hidden = "label_buyer_review_hidden",
            e.label_buyer_s_response = "label_buyer_s_response",
            e.label_camera = "label_camera",
            e.label_cancel = "label_cancel",
            e.label_cancel_pdp = "label_cancel_pdp",
            e.label_cancel_select = "label_cancel_select",
            e.label_capital_submit = "label_capital_submit",
            e.label_cart_panel_fully_fulfill_by_another_warehouse = "label_cart_panel_fully_fulfill_by_another_warehouse",
            e.label_cart_panel_fully_fulfill_by_multi_warehouse = "label_cart_panel_fully_fulfill_by_multi_warehouse",
            e.label_cb_shipping_from = "label_cb_shipping_from",
            e.label_cc_installment_plan = "label_cc_installment_plan",
            e.label_cc_installment_plan_zero_rate = "label_cc_installment_plan_zero_rate",
            e.label_change_of_mind_accepted = "label_change_of_mind_accepted",
            e.label_chat_response = "label_chat_response",
            e.label_chat_to_offer = "label_chat_to_offer",
            e.label_cod_filter_pdp = "label_cod_filter_pdp",
            e.label_comment = "label_comment",
            e.label_comments = "label_comments",
            e.label_condition_pdp = "label_condition_pdp",
            e.label_condition_used = "label_condition_used",
            e.label_confirm = "Label_confirm",
            e.label_confirm_age = "label_confirm_age",
            e.label_confirm_age_religion = "label_confirm_age_religion",
            e.label_confirm_age_repeated = "label_confirm_age_repeated",
            e.label_confirm_small = "label_confirm_small",
            e.label_cost = "label_cost",
            e.label_delete = "label_delete",
            e.label_deleted_shop = "label_deleted_shop",
            e.label_dismiss = "label_dismiss",
            e.label_dispute_rating_help_info = "label_dispute_rating_help_info",
            e.label_dispute_rating_send_msg = "label_dispute_rating_send_msg",
            e.label_edit = "label_edit",
            e.label_email = "label_email",
            e.label_email_is_invalid = "label_email_is_invalid",
            e.label_enable = "label_enable",
            e.label_error = "label_error",
            e.label_faq_please_fill_in_message = "label_faq_please_fill_in_message",
            e.label_filter_all = "label_filter_all",
            e.label_filter_my_rating = "label_filter_my_rating",
            e.label_filter_product_rating_star = "label_filter_product_rating_star",
            e.label_filter_shop_rating_1_star = "label_filter_shop_rating_1_star",
            e.label_filter_shop_rating_2_star = "label_filter_shop_rating_2_star",
            e.label_filter_shop_rating_3_star = "label_filter_shop_rating_3_star",
            e.label_filter_shop_rating_4_star = "label_filter_shop_rating_4_star",
            e.label_filter_shop_rating_5_star = "label_filter_shop_rating_5_star",
            e.label_filter_to_reply = "label_filter_to_reply",
            e.label_flash_sale_booked_pdp = "label_flash_sale_booked_pdp",
            e.label_fold_review_rule = "label_fold_review_rule",
            e.label_fold_review_title_1 = "label_fold_review_title_1",
            e.label_fold_review_title_2 = "label_fold_review_title_2",
            e.label_free_shipping_cap_pdp = "label_free_shipping_cap_pdp",
            e.label_fully_fulfill_by_seller = "label_fully_fulfill_by_seller",
            e.label_fully_fulfill_by_seller_shopee24 = "label_fully_fulfill_by_seller_shopee24",
            e.label_get_welcome_pkg = "label_get_welcome_pkg",
            e.label_global_sold_count_drawer_content = "label_global_sold_count_drawer_content",
            e.label_global_sold_count_drawer_title = "label_global_sold_count_drawer_title",
            e.label_go_back_pdp = "label_go_back_pdp",
            e.label_go_rating = "label_go_rating",
            e.label_guide_slide = "label_guide_slide",
            e.label_guide_tap = "label_guide_tap",
            e.label_helpful_questionmark = "label_helpful_questionmark",
            e.label_installment_overview_text = "label_installment_overview_text",
            e.label_installment_overview_text_without_interest = "label_installment_overview_text_without_interest",
            e.label_item = "label_item",
            e.label_item_all_model_unavailable = "label_item_all_model_unavailable",
            e.label_item_applicable_for_voucher_cashback = "label_item_applicable_for_voucher_cashback",
            e.label_item_applicable_for_voucher_discount = "label_item_applicable_for_voucher_discount",
            e.label_item_applicable_for_voucher_discount_percentage = "label_item_applicable_for_voucher_discount_percentage",
            e.label_item_applicable_for_voucher_free_shipping = "label_item_applicable_for_voucher_free_shipping",
            e.label_item_not_individual_sale = "label_item_not_individual_sale",
            e.label_item_status_sold_out_pdp = "label_item_status_sold_out_pdp",
            e.label_join = "label_join",
            e.label_kredivo_installment_plan_amount = "label_kredivo_installment_plan_amount",
            e.label_kredivo_installment_plan_amount_per_month = "label_kredivo_installment_plan_amount_per_month",
            e.label_learn_more_pdp = "label_learn_more_pdp",
            e.label_live_streaming_stock_rw = "label_live_streaming_stock_rw",
            e.label_loading = "label_loading",
            e.label_local_review = "label_local_review",
            e.label_location_br = "label_location_BR",
            e.label_location_brazil = "label_location_brazil",
            e.label_location_chile = "label_location_chile",
            e.label_location_cl = "label_location_CL",
            e.label_location_co = "label_location_CO",
            e.label_location_colombia = "label_location_colombia",
            e.label_location_id = "label_location_ID",
            e.label_location_indonesia = "label_location_indonesia",
            e.label_location_malaysia = "label_location_malaysia",
            e.label_location_mexico = "label_location_mexico",
            e.label_location_mx = "label_location_MX",
            e.label_location_my = "label_location_MY",
            e.label_location_ph = "label_location_PH",
            e.label_location_philippine = "label_location_philippine",
            e.label_location_sg = "label_location_SG",
            e.label_location_singapore = "label_location_singapore",
            e.label_location_taiwan = "label_location_taiwan",
            e.label_location_th = "label_location_TH",
            e.label_location_thailand = "label_location_thailand",
            e.label_location_tw = "label_location_TW",
            e.label_location_vietnam = "label_location_vietnam",
            e.label_location_vn = "label_location_VN",
            e.label_login_pdp = "label_login_pdp",
            e.label_lowest_price_guaranteed__vn = "label_lowest_price_guaranteed__VN",
            e.label_lowest_price_text = "label_lowest_price_text",
            e.label_lowest_price_text__br = "label_lowest_price_text--BR",
            e.label_lowest_price_text__id = "label_lowest_price_text__ID",
            e.label_lowest_price_text__my = "label_lowest_price_text__MY",
            e.label_lowest_price_text__ph = "label_lowest_price_text__PH",
            e.label_lowest_price_text__pl = "label_lowest_price_text__PL",
            e.label_lowest_price_text__sg = "label_lowest_price_text__SG",
            e.label_lowest_price_text__th = "label_lowest_price_text__TH",
            e.label_lowest_price_text__tw = "label_lowest_price_text__TW",
            e.label_lowest_price_text__vn = "label_lowest_price_text__VN",
            e.label_lowest_price_title = "label_lowest_price_title",
            e.label_lowest_price_title__id = "label_lowest_price_title__ID",
            e.label_lowest_price_title__vn = "label_lowest_price_title__VN",
            e.label_milk_acknowledgment_content = "label_milk_acknowledgment_content",
            e.label_milk_acknowledgment_title = "label_milk_acknowledgment_title",
            e.label_million_dollar_discount = "label_million_dollar_discount",
            e.label_million_dollar_discount_btn_text = "label_million_dollar_discount_btn_text",
            e.label_million_dollar_discount_title = "label_million_dollar_discount_title",
            e.label_million_dollar_discount_tnc = "label_million_dollar_discount_tnc",
            e.label_min_purchase_limit = "label_min_purchase_limit",
            e.label_my_orders_pdp = "label_my_orders_pdp",
            e.label_my_rating = "label_my_rating",
            e.label_my_rating_select = "label_my_rating_select",
            e.label_my_rating_to_rate = "label_my_rating_to_rate",
            e.label_my_reviews = "label_my_reviews",
            e.label_my_reviews_empty = "label_my_reviews_empty",
            e.label_my_reviews_empty_desc = "label_my_reviews_empty_desc",
            e.label_my_reviews_empty_tip = "label_my_reviews_empty_tip",
            e.label_n_a = "label_n_a",
            e.label_need_help_pdp = "label_need_help_pdp",
            e.label_no_more_ratings = "label_no_more_ratings",
            e.label_no_rating = "label_no_rating",
            e.label_no_rating_from_buyer = "label_no_rating_from_buyer",
            e.label_no_rating_from_seller = "label_no_rating_from_seller",
            e.label_num_star = "label_num_star",
            e.label_ok = "label_ok",
            e.label_ok_pdp = "label_ok_pdp",
            e.label_online_pdp = "label_online_pdp",
            e.label_opc_cc_installment_plan_amount_pdp = "label_opc_cc_installment_plan_amount_pdp",
            e.label_opc_cc_installment_plan_name_pdp = "label_opc_cc_installment_plan_name_pdp",
            e.label_opc_installment_plan_pdp = "label_opc_installment_plan_pdp",
            e.label_order_completed = "label_order_completed",
            e.label_order_logistics_completed = "label_order_logistics_completed",
            e.label_order_rate = "label_order_rate",
            e.label_order_rate_rewards = "label_order_rate_rewards",
            e.label_orderratings = "label_orderratings",
            e.label_original_guarantee = "label_original_guarantee",
            e.label_original_guarantee__id = "label_original_guarantee__ID",
            e.label_original_guarantee__my = "label_original_guarantee__MY",
            e.label_original_guarantee_subtext = "label_original_guarantee_subtext",
            e.label_original_guarantee_subtext__id = "label_original_guarantee_subtext__ID",
            e.label_original_guarantee_subtext__my = "label_original_guarantee_subtext__MY",
            e.label_original_guarantee_subtext_mall__my = "label_original_guarantee_subtext_mall__MY",
            e.label_other_stock = "label_other_stock",
            e.label_out_of = "label_out_of",
            e.label_overseas = "label_overseas",
            e.label_pack_size = "label_pack_size",
            e.label_page_shop_ratings_tab_buyer = "label_page_shop_ratings_tab_buyer",
            e.label_page_shop_ratings_tab_shop = "label_page_shop_ratings_tab_shop",
            e.label_page_shop_ratings_tab_shop_idscs = "label_page_shop_ratings_tab_shop_idscs",
            e.label_partial_pre_order_ships_in_n_days = "label_partial_pre_order_ships_in_n_days",
            e.label_partial_pre_order_ships_in_n_days__plural = "label_partial_pre_order_ships_in_n_days__plural",
            e.label_partially_fulfill_by_seller = "label_partially_fulfill_by_seller",
            e.label_partially_fulfill_by_seller_shopee24 = "label_partially_fulfill_by_seller_shopee24",
            e.label_pdp_shipping_fee_no_shipping_channel_available = "label_pdp_shipping_fee_no_shipping_channel_available",
            e.label_pdp_voucher_see_more_pdp = "label_pdp_voucher_see_more_pdp",
            e.label_photos = "label_photos",
            e.label_please_enter_rating = "label_please_enter_rating",
            e.label_please_select_reason = "label_please_select_reason",
            e.label_pre_order_ships_in_n_days = "label_pre_order_ships_in_n_days",
            e.label_pre_order_ships_in_n_days__few = "label_pre_order_ships_in_n_days__few",
            e.label_pre_order_ships_in_n_days__many = "label_pre_order_ships_in_n_days__many",
            e.label_pre_order_ships_in_n_days__other = "label_pre_order_ships_in_n_days__other",
            e.label_pre_order_ships_in_n_days__plural = "label_pre_order_ships_in_n_days__plural",
            e.label_preferred__es = "label_preferred__ES",
            e.label_preferred__pl = "label_preferred__PL",
            e.label_product_available_on = "label_product_available_on",
            e.label_product_coming_soon_pdp = "label_product_coming_soon_pdp",
            e.label_product_deleted = "label_product_deleted",
            e.label_product_fbs_popup_desc = "label_product_fbs_popup_desc",
            e.label_product_fbs_popup_desc__id = "label_product_fbs_popup_desc__ID",
            e.label_product_fbs_popup_desc__my = "label_product_fbs_popup_desc__MY",
            e.label_product_fbs_popup_desc__ph = "label_product_fbs_popup_desc__PH",
            e.label_product_fbs_popup_desc__sg = "label_product_fbs_popup_desc__SG",
            e.label_product_fbs_popup_desc__th = "label_product_fbs_popup_desc__TH",
            e.label_product_fbs_popup_desc__tw = "label_product_fbs_popup_desc__TW",
            e.label_product_fbs_popup_desc__vn = "label_product_fbs_popup_desc__VN",
            e.label_product_fbs_section = "label_product_fbs_section",
            e.label_product_fbs_section__my = "label_product_fbs_section__MY",
            e.label_product_fbs_section__ph = "label_product_fbs_section__PH",
            e.label_product_fbs_section__sg = "label_product_fbs_section__SG",
            e.label_product_fbs_section__th = "label_product_fbs_section__TH",
            e.label_product_fbs_section__tw = "label_product_fbs_section__TW",
            e.label_product_fbs_section__vn = "label_product_fbs_section__VN",
            e.label_product_flash_sale_extra_discount_limit_stock = "label_product_flash_sale_extra_discount_limit_stock",
            e.label_product_flash_sale_extra_discount_limit_stock_limit_time = "label_product_flash_sale_extra_discount_limit_stock_limit_time",
            e.label_product_info = "label_product_info",
            e.label_product_installment_credit_card = "label_product_installment_credit_card",
            e.label_product_installment_non_credit_card = "label_product_installment_non_credit_card",
            e.label_product_pre_order_on = "label_product_pre_order_on",
            e.label_product_preview_sale_starting_soon = "label_product_preview_sale_starting_soon",
            e.label_product_ratings = "label_product_ratings",
            e.label_product_recycling_info_content = "label_product_recycling_info_content",
            e.label_product_recycling_info_header = "label_product_recycling_info_header",
            e.label_product_s_mart_popup_desc = "label_product_s_mart_popup_desc",
            e.label_product_s_mart_popup_desc__my = "label_product_s_mart_popup_desc__MY",
            e.label_product_s_mart_popup_desc__sg = "label_product_s_mart_popup_desc__SG",
            e.label_product_s_mart_popup_understand_button = "label_product_s_mart_popup_understand_button",
            e.label_product_s_mart_section = "label_product_s_mart_section",
            e.label_product_s_mart_section__my = "label_product_s_mart_section__MY",
            e.label_product_sbs_popup_desc__id = "label_product_sbs_popup_desc--ID",
            e.label_product_sbs_popup_desc_id_shopee_24 = "label_product_sbs_popup_desc_id_shopee_24",
            e.label_product_sbs_popup_desc_ph_shopee_24 = "label_product_sbs_popup_desc_ph_shopee_24",
            e.label_product_sbs_popup_desc_shopee_managed__id = "label_product_sbs_popup_desc_shopee_managed__ID",
            e.label_product_sbs_popup_desc_th_shopee_24 = "label_product_sbs_popup_desc_th_shopee_24",
            e.label_product_sbs_popup_desc_vn_ghtk_24 = "label_product_sbs_popup_desc_vn_ghtk_24",
            e.label_product_sbs_section = "label_product_sbs_section",
            e.label_product_sbs_section_24h = "label_product_sbs_section_24h",
            e.label_product_sbs_section_48h = "label_product_sbs_section_48h",
            e.label_product_sbs_section_8h = "label_product_sbs_section_8h",
            e.label_product_sbs_section_id_shopee_24 = "label_product_sbs_section_id_shopee_24",
            e.label_product_sbs_section_ph_shopee_24 = "label_product_sbs_section_ph_shopee_24",
            e.label_product_sbs_section_shopee_managed__id = "label_product_sbs_section_shopee_managed__ID",
            e.label_product_sbs_section_th_shopee_24 = "label_product_sbs_section_th_shopee_24",
            e.label_product_sbs_section_vn_ghtk_24 = "label_product_sbs_section_vn_ghtk_24",
            e.label_product_sbs_section_vn_rapidsla_4 = "label_product_sbs_section_vn_rapidsla_4",
            e.label_products_pdp = "label_products_pdp",
            e.label_program_introduction = "label_program_introduction",
            e.label_promotion_stock = "label_promotion_stock",
            e.label_quantity = "label_quantity",
            e.label_quantity_pdp = "label_quantity_pdp",
            e.label_rate_anonymously = "label_rate_anonymously",
            e.label_rate_buyer = "label_rate_buyer",
            e.label_rate_deadline = "label_rate_deadline",
            e.label_rate_is_not_allowed = "label_rate_is_not_allowed",
            e.label_rate_order = "label_rate_order",
            e.label_rate_product = "label_rate_product",
            e.label_rate_products = "label_rate_products",
            e.label_rating = "label_rating",
            e.label_rating_banner_multiple_copy = "label_rating_banner_multiple_copy",
            e.label_rating_dispute = "label_rating_dispute",
            e.label_rating_filter_all = "label_rating_filter_all",
            e.label_rating_filter_local_review = "label_rating_filter_local_review",
            e.label_rating_filter_with_comment = "label_rating_filter_with_comment",
            e.label_rating_filter_with_photo = "label_rating_filter_with_photo",
            e.label_rating_input_star_1 = "label_rating_input_star_1",
            e.label_rating_input_star_2 = "label_rating_input_star_2",
            e.label_rating_input_star_3 = "label_rating_input_star_3",
            e.label_rating_input_star_4 = "label_rating_input_star_4",
            e.label_rating_input_star_5 = "label_rating_input_star_5",
            e.label_rating_out_of = "label_rating_out_of",
            e.label_rating_pdp = "label_rating_pdp",
            e.label_rating_placeholder_sg = "label_rating_placeholder_sg",
            e.label_rating_reply_message = "label_rating_reply_message",
            e.label_rating_reply_placeholder = "label_rating_reply_placeholder",
            e.label_rating_star = "label_rating_star",
            e.label_ratings = "label_ratings",
            e.label_reason = "label_reason",
            e.label_refer_later = "label_refer_later",
            e.label_refer_now = "label_refer_now",
            e.label_repeat_purchase = "label_repeat_purchase",
            e.label_replace = "label_replace",
            e.label_reply_rating = "label_reply_rating",
            e.label_report_abuse = "label_report_abuse",
            e.label_report_rating = "label_report_rating",
            e.label_report_rating_successful = "label_report_rating_successful",
            e.label_repost_to_feed = "label_repost_to_feed",
            e.label_reposted_to_feed_successful = "label_reposted_to_feed_successful",
            e.label_resend = "label_resend",
            e.label_response_from_buyer = "label_response_from_buyer",
            e.label_response_from_seller = "label_response_from_seller",
            e.label_review = "label_review",
            e.label_review_plural = "label_review_plural",
            e.label_review_template_hint = "label_review_template_hint",
            e.label_review_template_newhint = "label_review_template_newhint",
            e.label_reviews = "label_reviews",
            e.label_s_mart_popup_understand_button = "label_s_mart_popup_understand_button",
            e.label_same_day_delivery = "label_same_day_delivery",
            e.label_same_day_delivery_popup_desc = "label_same_day_delivery_popup_desc",
            e.label_same_day_delivery_popup_understand_button = "label_same_day_delivery_popup_understand_button",
            e.label_sample_image_hit = "label_sample_image_hit",
            e.label_sample_use = "label_sample_use",
            e.label_sample_video_hit = "label_sample_video_hit",
            e.label_save = "label_save",
            e.label_save_photo = "label_save_photo",
            e.label_sbs_popup_understand_button = "label_sbs_popup_understand_button",
            e.label_see_all = "label_see_all",
            e.label_see_all_pdp = "label_see_all_pdp",
            e.label_see_all_reviews = "label_see_all_reviews",
            e.label_see_less_pdp = "label_see_less_pdp",
            e.label_see_more_pdp = "label_see_more_pdp",
            e.label_see_my_reviews = "label_see_my_reviews",
            e.label_select_variation_add_to_cart = "label_select_variation_add_to_cart",
            e.label_select_variation_pdp = "label_select_variation_pdp",
            e.label_selected_pdp = "label_selected_pdp",
            e.label_seller_can_only_reply_once = "label_seller_can_only_reply_once",
            e.label_seller_rating = "label_seller_rating",
            e.label_seller_response = "label_seller_response",
            e.label_seller_response_idscs = "label_seller_response_idscs",
            e.label_seller_response_hidden = "label_seller_response_hidden",
            e.label_seller_s_response = "label_seller_s_response",
            e.label_seller_s_response_idscs = "label_seller_s_response_idscs",
            e.label_sendmessage = "label_sendmessage",
            e.label_share = "label_share",
            e.label_ship_from = "label_ship_from",
            e.label_shipping_fee = "label_shipping_fee",
            e.label_shipping_to = "label_shipping_to",
            e.label_shop_hot_sales = "label_shop_hot_sales",
            e.label_shop_rating = "label_shop_rating",
            e.label_shop_rating_idscs = "label_shop_rating_idscs",
            e.label_shopee_guarantee_lower_case = "label_shopee_guarantee_lower_case",
            e.label_shopee_guarantee_text = "label_shopee_guarantee_text",
            e.label_shopee_pdp = "label_shopee_pdp",
            e.label_show_on_child = "label_show_on_child",
            e.label_show_on_you = "label_show_on_you",
            e.label_show_shot_like_samples = "label_show_shot_like_samples",
            e.label_show_username_on_your_review = "label_show_username_on_your_review",
            e.label_similar_products_pdp = "label_similar_products_pdp",
            e.label_size_chart = "label_size_chart",
            e.label_size_chart_capital = "label_size_chart_capital",
            e.label_size_chart_desc = "label_size_chart_desc",
            e.label_size_chart_header = "label_size_chart_header",
            e.label_sold = "label_sold",
            e.label_sold_location = "label_sold_location",
            e.label_sold_location__br = "label_sold_location__BR",
            e.label_sold_location__cl = "label_sold_location__CL",
            e.label_sold_location__co = "label_sold_location__CO",
            e.label_sold_location__es = "label_sold_location__ES",
            e.label_sold_location__id = "label_sold_location__ID",
            e.label_sold_location__mx = "label_sold_location__MX",
            e.label_sold_location__my = "label_sold_location__MY",
            e.label_sold_location__ph = "label_sold_location__PH",
            e.label_sold_location__pl = "label_sold_location__PL",
            e.label_sold_location__sg = "label_sold_location__SG",
            e.label_sold_location__th = "label_sold_location__TH",
            e.label_sold_location__tw = "label_sold_location__TW",
            e.label_sold_location__vn = "label_sold_location__VN",
            e.label_sold_n_pdp = "label_sold_n_pdp",
            e.label_something_wrong = "label_something_wrong",
            e.label_soon_to_have = "label_soon_to_have",
            e.label_stock = "label_stock",
            e.label_submit = "label_submit",
            e.label_tag_out_of_stock = "label_tag_out_of_stock",
            e.label_this_product_delete = "label_this_product_delete",
            e.label_to_rate = "label_to_rate",
            e.label_to_rate_chat = "label_to_rate_chat",
            e.label_to_rate_completed = "label_to_rate_completed",
            e.label_to_rate_empty = "label_to_rate_empty",
            e.label_to_rate_empty_desc = "label_to_rate_empty_desc",
            e.label_to_rate_empty_tip = "label_to_rate_empty_tip",
            e.label_to_rate_order_total = "label_to_rate_order_total",
            e.label_to_rate_rate = "label_to_rate_rate",
            e.label_to_rate_view_shop = "label_to_rate_view_shop",
            e.label_to_reply = "label_to_reply",
            e.label_topic = "label_topic",
            e.label_total_payment = "label_total_payment",
            e.label_total_payment__other = "label_total_payment__other",
            e.label_total_payment_plural = "label_total_payment_plural",
            e.label_tweet = "label_tweet",
            e.label_unexpected_error = "label_unexpected_error",
            e.label_unit_price = "label_unit_price",
            e.label_unlisted = "label_unlisted",
            e.label_user_on_vacation = "label_user_on_vacation",
            e.label_variation = "label_variation",
            e.label_variation_clear = "label_variation_clear",
            e.label_variation_filter = "label_variation_filter",
            e.label_variation_relevant = "label_variation_relevant",
            e.label_view_all = "label_view_all",
            e.label_view_image = "label_view_image",
            e.label_view_more_products = "label_view_more_products",
            e.label_view_more_products__other = "label_view_more_products__other",
            e.label_view_more_products_plural = "label_view_more_products_plural",
            e.label_view_shop = "label_view_shop",
            e.label_view_your_ratings = "label_view_your_ratings",
            e.label_welcome_to_join = "label_welcome_to_join",
            e.label_whole_sale_price = "label_whole_sale_price",
            e.label_whole_sale_price_pdp = "label_whole_sale_price_pdp",
            e.label_wholesale_price_available = "label_wholesale_price_available",
            e.label_wholesale_stock = "label_wholesale_stock",
            e.label_wholesale_summary = "label_wholesale_summary",
            e.label_with_comment = "label_with_comment",
            e.label_with_photo = "label_with_photo",
            e.label_you_get = "label_you_get",
            e.label_you_may_also_like_pdp = "label_you_may_also_like_pdp",
            e.label_your_rating_removed = "label_your_rating_removed",
            e.leave = "leave",
            e.leave_this_page = "leave_this_page",
            e.leave_tips_content = "leave_tips_content",
            e.loading_error_desc = "loading.error.desc",
            e.loading_error_title = "loading.error.title",
            e.love_your_product = "love_your_product",
            e.low_rating_detail_logistic_service = "low_rating_detail_logistic_service",
            e.low_rating_detail_product_quality = "low_rating_detail_product_quality",
            e.low_rating_detail_seller_service = "low_rating_detail_seller_service",
            e.low_rating_detail_seller_service_idscs = "low_rating_detail_seller_service_idscs",
            e.low_rating_detail_title = "low_rating_detail_title",
            e.low_rating_detailrating_higher_popup = "low_rating_detailrating_higher_popup",
            e.low_rating_popup_product = "low_rating_popup_product",
            e.low_rating_popup_shop = "low_rating_popup_shop",
            e.low_rating_popup_title = "low_rating_popup_title",
            e.low_rating_reminder_product = "low_rating_reminder_product",
            e.low_rating_reminder_shop = "low_rating_reminder_shop",
            e.max_coins_varies_depending_on_item = "max_coins_varies_depending_on_item",
            e.maximum_retail_price = "maximum_retail_price",
            e.maximum_retail_price_header = "maximum_retail_price_header",
            e.message_insufficient_photos_permission = "message_insufficient_photos_permission",
            e.message_insufficient_storage_permission = "message_insufficient_storage_permission",
            e.message_ios_save_success = "message_ios_save_success",
            e.message_request_photos_permission = "message_request_photos_permission",
            e.message_request_storage_permission = "message_request_storage_permission",
            e.message_save_photo_failure = "message_save_photo_failure",
            e.model_height = "Model Height",
            e.model_weight = "Model Weight",
            e.msg_add_medias_to_category_coins = "msg_add_medias_to_category_coins",
            e.msg_add_more_pictures_to_earn_coins = "msg_add_more_pictures_to_earn_coins",
            e.msg_add_more_rating_content_to_earn_coins = "msg_add_more_rating_content_to_earn_coins",
            e.msg_add_more_words_to_earn_coins = "msg_add_more_words_to_earn_coins",
            e.msg_add_pics_and_video_not_characters = "msg_add_pics_and_video_not_characters",
            e.msg_add_pics_and_video_not_human = "msg_add_pics_and_video_not_human",
            e.msg_add_pics_and_video_not_human_two = "msg_add_pics_and_video_not_human_two",
            e.msg_add_pics_and_video_to_category_coins = "msg_add_pics_and_video_to_category_coins",
            e.msg_add_pics_and_video_to_earn_coins = "msg_add_pics_and_video_to_earn_coins",
            e.msg_add_pics_to_earn_coins = "msg_add_pics_to_earn_coins",
            e.msg_add_pics_to_earn_coins_two = "msg_add_pics_to_earn_coins_two",
            e.msg_add_video_to_earn_coins = "msg_add_video_to_earn_coins",
            e.msg_add_video_to_earn_coins_two = "msg_add_video_to_earn_coins_two",
            e.msg_add_words_and_medias_to_earn_coins = "msg_add_words_and_medias_to_earn_coins",
            e.msg_add_words_and_pics_to_earn_coins = "msg_add_words_and_pics_to_earn_coins",
            e.msg_add_words_and_video_to_earn_coins = "msg_add_words_and_video_to_earn_coins",
            e.msg_add_words_to_earn_coins = "msg_add_words_to_earn_coins",
            e.msg_added_to_your_favorite = "msg_added_to_your_favorite",
            e.msg_addon_deal_expired = "msg_addon_deal_expired",
            e.msg_addon_deal_main_item_invalid = "msg_addon_deal_main_item_invalid",
            e.msg_addon_deal_sub_item_invalid = "msg_addon_deal_sub_item_invalid",
            e.msg_after_rating_can_edit = "msg_after_rating_can_edit",
            e.msg_can_only_edit_once = "msg_can_only_edit_once",
            e.msg_cart_limit_per_shop_hit = "msg_cart_limit_per_shop_hit",
            e.msg_coins_error = "msg_coins_error",
            e.msg_deleted_from_your_favorite = "msg_deleted_from_your_favorite",
            e.msg_earn_coins_after_rating = "msg_earn_coins_after_rating",
            e.msg_error_network = "msg_error_network",
            e.msg_error_select_variation = "msg_error_select_variation",
            e.msg_error_select_variation_with_name = "msg_error_select_variation_with_name",
            e.msg_flash_deal_has_ended_pdp = "msg_flash_deal_has_ended_pdp",
            e.msg_flash_sale_has_ended_pdp = "msg_flash_sale_has_ended_pdp",
            e.msg_had_rated_produce = "msg_had_rated_produce",
            e.msg_had_rated_product = "msg_had_rated_product",
            e.msg_inactive_sellers_popup = "msg_inactive_sellers_popup",
            e.msg_inactive_sellers_popup_buy_anyway = "msg_inactive_sellers_popup_buy_anyway",
            e.msg_item_booked_for_flash_sale = "msg_item_booked_for_flash_sale",
            e.msg_item_currently_delisted = "msg_item_currently_delisted",
            e.msg_item_has_been_added_to_cart = "msg_item_has_been_added_to_cart",
            e.msg_item_not_available = "msg_item_not_available",
            e.msg_medias_quality_ex_more = "msg_medias_quality_ex_more",
            e.msg_medias_quality_low_edit = "msg_medias_quality_low_edit",
            e.msg_medias_quality_low_more = "msg_medias_quality_low_more",
            e.msg_mms_player_err_btn = "msg_mms_player_err_btn",
            e.msg_mms_player_err_content = "msg_mms_player_err_content",
            e.msg_mms_player_err_tips = "msg_mms_player_err_tips",
            e.msg_multi_variation_example = "msg_multi_variation_example",
            e.msg_must_be_adult_to_view_content = "msg_must_be_adult_to_view_content",
            e.msg_no_helpful_ratings_yet = "msg_no_helpful_ratings_yet",
            e.msg_no_ratings_yet = "msg_no_ratings_yet",
            e.msg_no_ratings_yet_pdp = "msg_no_ratings_yet_pdp",
            e.msg_pdp_item_status_sold_out = "msg_pdp_item_status_sold_out",
            e.msg_please_fill_valid = "msg_please_fill_valid",
            e.msg_please_rate_the_products_by = "msg_please_rate_the_products_by",
            e.msg_please_rate_the_seller_by = "msg_please_rate_the_seller_by",
            e.msg_product_sbs_24h_my_description = "msg_product_sbs_24h_my_description",
            e.msg_product_sbs_24h_my_title = "msg_product_sbs_24h_my_title",
            e.msg_product_sbs_24h_sg_description = "msg_product_sbs_24h_sg_description",
            e.msg_product_sbs_24h_sg_title = "msg_product_sbs_24h_sg_title",
            e.msg_quantity_invalid = "msg_quantity_invalid",
            e.msg_rate_buyer_success = "msg_rate_buyer_success",
            e.msg_rate_for_bonus_coins_1 = "msg_rate_for_bonus_coins_1",
            e.msg_rate_for_bonus_coins_2 = "msg_rate_for_bonus_coins_2",
            e.msg_rate_items_for_coins = "msg_rate_items_for_coins",
            e.msg_rate_items_success = "msg_rate_items_success",
            e.msg_rate_single_item_for_coins = "msg_rate_single_item_for_coins",
            e.msg_rating_dispute_sent_successfully = "msg_rating_dispute_sent_successfully",
            e.msg_rating_period_has_expired = "msg_rating_period_has_expired",
            e.msg_rating_reply_only = "msg_rating_reply_only",
            e.msg_real_inactive_sellers_popup = "msg_real_inactive_sellers_popup",
            e.msg_received_rating_report = "msg_received_rating_report",
            e.msg_refer_friend_after_rating = "msg_refer_friend_after_rating",
            e.msg_refer_friend_after_rating__few = "msg_refer_friend_after_rating__few",
            e.msg_refer_friend_after_rating__many = "msg_refer_friend_after_rating__many",
            e.msg_refer_friend_after_rating__other = "msg_refer_friend_after_rating__other",
            e.msg_reply_rating_success = "msg_reply_rating_success",
            e.msg_response_rate_explaination = "msg_response_rate_explaination",
            e.msg_server_error = "msg_server_error",
            e.msg_shipping_fee_information = "msg_shipping_fee_information",
            e.msg_shop_hot_sales_hint_pdp = "msg_shop_hot_sales_hint_pdp",
            e.msg_shopee_preferred_plus_txt = "msg_shopee_preferred_plus_txt",
            e.msg_shopee_verified_txt = "msg_shopee_verified_txt",
            e.msg_sorry_your_review_hide_cant_edit = "msg_sorry_your_review_hide_cant_edit",
            e.msg_sorry_your_review_hide_cant_reply = "msg_sorry_your_review_hide_cant_reply",
            e.msg_sorry_your_review_hide_cant_update = "msg_sorry_your_review_hide_cant_update",
            e.msg_submit_rating_to_earn_coins = "msg_submit_rating_to_earn_coins",
            e.msg_the_product_you_are_looking_for_does_not_exist = "msg_the_product_you_are_looking_for_does_not_exist",
            e.msg_tips_friends_switch_toggle_dialog_content = "msg_tips_friends_switch_toggle_dialog_content",
            e.msg_tips_friends_toggle_1 = "msg_tips_friends_toggle_1",
            e.msg_tips_friends_toggle_2 = "msg_tips_friends_toggle_2",
            e.msg_tips_friends_toggle_dialog_btn = "msg_tips_friends_toggle_dialog_btn",
            e.msg_tips_friends_toggle_dialog_content = "msg_tips_friends_toggle_dialog_content",
            e.msg_tips_friends_toggle_dialog_content_false = "msg_tips_friends_toggle_dialog_content_false",
            e.msg_tips_friends_toggle_dialog_content_true = "msg_tips_friends_toggle_dialog_content_true",
            e.msg_tips_friends_toggle_dialog_title = "msg_tips_friends_toggle_dialog_title",
            e.msg_tips_friends_toggle_dialog_title_false = "msg_tips_friends_toggle_dialog_title_false",
            e.msg_tips_friends_toggle_dialog_title_true = "msg_tips_friends_toggle_dialog_title_true",
            e.msg_upload_image_failed = "msg_upload_image_failed",
            e.msg_upload_media_failed = "msg_upload_media_failed",
            e.msg_video_not_supported = "msg_video_not_supported",
            e.msg_view_folded_reviews = "msg_view_folded_reviews",
            e.msg_why_folded_reviews = "msg_why_folded_reviews",
            e.msg_you_can_only_change_rating_with_once = "msg_you_can_only_change_rating_with_once",
            e.msg_you_have_changed_rating_once = "msg_you_have_changed_rating_once",
            e.msg_you_have_rated_buyer = "msg_you_have_rated_buyer",
            e.msg_you_have_rated_order = "msg_you_have_rated_order",
            e.narrow = "Narrow",
            e.network_error_desc = "network.error.desc",
            e.network_error_title = "network.error.title",
            e.new_msg_rate_items_success = "new_msg_rate_items_success",
            e.new_msg_submit_rating_to_earn_coins = "new_msg_submit_rating_to_earn_coins",
            e.new_msg_submit_rating_to_earn_coins__few = "new_msg_submit_rating_to_earn_coins__few",
            e.new_msg_submit_rating_to_earn_coins__many = "new_msg_submit_rating_to_earn_coins__many",
            e.new_msg_submit_rating_to_earn_coins__other = "new_msg_submit_rating_to_earn_coins__other",
            e.non_stretchable = "Non Stretchable",
            e.old_app_version_users_failed_add_media = "old_app_version_users_failed_add_media",
            e.old_rating_anonymous_toggle_off = "old_rating_anonymous_toggle_off",
            e.old_rating_anonymous_toggle_off_toast = "old_rating_anonymous_toggle_off_toast",
            e.old_rating_anonymous_toggle_on = "old_rating_anonymous_toggle_on",
            e.old_rating_anonymous_toggle_on_toast = "old_rating_anonymous_toggle_on_toast",
            e.one_day_update = "one_day_update",
            e.oops = "oops",
            e.oops_content = "oops_content",
            e.oops_jam = "oops_jam",
            e.oops_jam_content = "oops_jam_content",
            e.order_already_expired = "order_already_expired",
            e.order_already_rated = "order_already_rated",
            e.other_product_reviews_in_shop = "other_product_reviews_in_shop",
            e.oversize = "Oversize",
            e.pdp_click_for_more = "pdp_click_for_more",
            e.pdp_coloured_discount_off = "pdp_coloured_discount_off",
            e.pdp_coloured_free_shipping = "pdp_coloured_free_shipping",
            e.pdp_free_returns_title = "pdp_free_returns_title",
            e.pdp_free_returns_title__ph = "pdp_free_returns_title__PH",
            e.pdp_free_shipping_terms_condition__th = "pdp_free_shipping_terms_condition__TH",
            e.pdp_individual_declaration = "pdp_individual_declaration",
            e.pdp_individual_seller_details = "pdp_individual_seller_details",
            e.pdp_item_international_shipping = "pdp_item_international_shipping",
            e.pdp_label_alcohol_product_popup_go_back = "pdp_label_alcohol_product_popup_go_back",
            e.pdp_label_cod_popup_desc = "pdp_label_cod_popup_desc",
            e.pdp_label_cod_popup_desc__id = "pdp_label_cod_popup_desc__ID",
            e.pdp_label_cod_popup_desc__my = "pdp_label_cod_popup_desc__MY",
            e.pdp_label_cod_popup_desc__th = "pdp_label_cod_popup_desc__TH",
            e.pdp_label_ends_in = "pdp_label_ends_in",
            e.pdp_label_get_spp_to_verify_in_app_btn = "pdp_label_get_spp_to_verify_in_app_btn",
            e.pdp_label_kyc_to_verify_in_app_btn = "pdp_label_kyc_to_verify_in_app_btn",
            e.pdp_label_live_streaming_price_psp_rw = "pdp_label_live_streaming_price_psp_rw",
            e.pdp_label_live_streaming_price_ssp_rw = "pdp_label_live_streaming_price_ssp_rw",
            e.pdp_label_n_day = "pdp_label_n_day",
            e.pdp_label_n_day__other = "pdp_label_n_day__other",
            e.pdp_label_new = "pdp_label_new",
            e.pdp_label_starts_in = "pdp_label_starts_in",
            e.pdp_lpg30_for_all_models_in_the_last_30_days = "pdp_lpg30_for_all_models_in_the_last_30_days",
            e.pdp_lpg30_in_the_last_30_days = "pdp_lpg30_in_the_last_30_days",
            e.pdp_lpg30_lowest_price = "pdp_lpg30_lowest_price",
            e.pdp_lpg30_lowest_price_range = "pdp_lpg30_lowest_price_range",
            e.pdp_lpg30_price_details = "pdp_lpg30_price_details",
            e.pdp_lpg30_price_details_content = "pdp_lpg30_price_details_content",
            e.pdp_msg_get_spp_to_verify = "pdp_msg_get_spp_to_verify",
            e.pdp_msg_kyc_cannot_verify_age = "pdp_msg_kyc_cannot_verify_age",
            e.pdp_msg_kyc_to_verify = "pdp_msg_kyc_to_verify",
            e.pdp_msg_login_to_verify = "pdp_msg_login_to_verify",
            e.pdp_msg_must_be_adult_to_view_content = "pdp_msg_must_be_adult_to_view_content",
            e.pdp_msg_must_be_alcohol_adult_to_view_content = "pdp_msg_must_be_alcohol_adult_to_view_content",
            e.pdp_n_variations_available = "pdp_n_variations_available",
            e.pdp_n_variations_available__other = "pdp_n_variations_available__other",
            e.pdp_prescription_content = "pdp_prescription_content",
            e.pdp_prescription_title = "pdp_prescription_title",
            e.pdp_product_free_shipping_description = "pdp_product_free_shipping_description",
            e.pdp_product_free_shipping_description__br = "pdp_product_free_shipping_description__BR",
            e.pdp_product_free_shipping_description__ph = "pdp_product_free_shipping_description__PH",
            e.pdp_product_free_shipping_title = "pdp_product_free_shipping_title",
            e.pdp_product_free_shipping_title__br = "pdp_product_free_shipping_title__BR",
            e.pdp_product_free_shipping_title__co = "pdp_product_free_shipping_title__CO",
            e.pdp_product_free_shipping_title__ph = "pdp_product_free_shipping_title__PH",
            e.pdp_product_measurements = "pdp_product_measurements",
            e.pdp_ros_banner_subtitle = "pdp_ros_banner_subtitle",
            e.pdp_ros_banner_title = "pdp_ros_banner_title",
            e.pdp_seller_company = "pdp_seller_company",
            e.pdp_seller_individual = "pdp_seller_individual",
            e.pdp_shopee_guarantee = "pdp_shopee_guarantee",
            e.pdp_star_reviews_drawer_content = "pdp_star_reviews_drawer_content",
            e.pdp_text_product_attributes_drawer_title = "pdp_text_product_attributes_drawer_title",
            e.pdp_text_product_description_title = "pdp_text_product_description_title",
            e.pdp_text_product_specification_title = "pdp_text_product_specification_title",
            e.placeholder_rate_buyer = "placeholder_rate_buyer",
            e.placeholder_rate_product = "placeholder_rate_product",
            e.posted_successfully = "posted_successfully",
            e.pr_alert_please_reload_view_rating_page = "pr_alert_please_reload_view_rating_page",
            e.pr_alert_submit_rating = "pr_alert_submit_rating",
            e.pr_alert_submit_rating_description = "pr_alert_submit_rating_description",
            e.pr_label_buyer_rating = "pr_label_buyer_rating",
            e.pr_label_rate_anonymous_preview = "pr_label_rate_anonymous_preview",
            e.pr_label_rate_anonymously = "pr_label_rate_anonymously",
            e.pr_label_rate_product = "pr_label_rate_product",
            e.pr_label_rating_banner = "pr_label_rating_banner",
            e.pr_label_rating_coins_awarded = "pr_label_rating_coins_awarded",
            e.pr_label_rating_hint_submit_to_win = "pr_label_rating_hint_submit_to_win",
            e.pr_label_rating_hint_x_word_y_picture_z_coin = "pr_label_rating_hint_X_word_Y_picture_Z_coin",
            e.pr_label_rating_hint_x_word_y_pictures_z_coin = "pr_label_rating_hint_X_word_Y_pictures_Z_coin",
            e.pr_label_rating_hint_x_word_z_coin = "pr_label_rating_hint_X_word_Z_coin",
            e.pr_label_rating_hint_x_words_y_picture_z_coin = "pr_label_rating_hint_X_words_Y_picture_Z_coin",
            e.pr_label_rating_hint_x_words_y_pictures_z_coin = "pr_label_rating_hint_X_words_Y_pictures_Z_coin",
            e.pr_label_rating_hint_x_words_z_coin = "pr_label_rating_hint_X_words_Z_coin",
            e.pr_label_rating_hint_y_picture_z_coin = "pr_label_rating_hint_Y_picture_Z_coin",
            e.pr_label_rating_hint_y_pictures_z_coin = "pr_label_rating_hint_Y_pictures_Z_coin",
            e.pr_label_reply = "pr_label_reply",
            e.pr_label_shop_rating = "pr_label_shop_rating",
            e.pr_label_your_response = "pr_label_your_response",
            e.pr_message_rate_item_placeholder = "pr_message_rate_item_placeholder",
            e.pr_order_purchase_label_buyer_response = "pr_order_purchase_label_buyer_response",
            e.pr_order_purchase_label_cancel = "pr_order_purchase_label_cancel",
            e.pr_order_purchase_label_edit = "pr_order_purchase_label_edit",
            e.pr_order_purchase_label_ok = "pr_order_purchase_label_ok",
            e.pr_order_purchase_label_save = "pr_order_purchase_label_save",
            e.pr_order_purchase_label_seller_response = "pr_order_purchase_label_seller_response",
            e.pr_order_purchase_label_submit = "pr_order_purchase_label_submit",
            e.pr_order_purchase_label_variation = "pr_order_purchase_label_variation",
            e.pr_rating_text_placeholder_1_star = "pr_rating_text_placeholder_1_star",
            e.pr_rating_text_placeholder_2_star = "pr_rating_text_placeholder_2_star",
            e.pr_rating_text_placeholder_3_star = "pr_rating_text_placeholder_3_star",
            e.pr_rating_text_placeholder_4_star = "pr_rating_text_placeholder_4_star",
            e.pr_rating_text_placeholder_5_star = "pr_rating_text_placeholder_5_star",
            e.pr_review_deleted = "pr_review_deleted",
            e.pr_text_you_can_only_reply_rating_once = "pr_text_you_can_only_reply_rating_once",
            e.pr_toast_rating_success = "pr_toast_rating_success",
            e.prev_old_coins = "prev_old_coins",
            e.prev_old_coins_earned_tip = "prev_old_coins_earned_tip",
            e.prev_old_label_rating_input_star_1 = "prev_old_label_rating_input_star_1",
            e.prev_old_label_review_template_hint = "prev_old_label_review_template_hint",
            e.prev_old_msg_add_medias_to_category_coins = "prev_old_msg_add_medias_to_category_coins",
            e.prev_old_msg_add_pics_and_video_not_characters = "prev_old_msg_add_pics_and_video_not_characters",
            e.prev_old_msg_add_pics_and_video_not_human = "prev_old_msg_add_pics_and_video_not_human",
            e.prev_old_msg_add_pics_and_video_not_human_two = "prev_old_msg_add_pics_and_video_not_human_two",
            e.prev_old_msg_add_pics_and_video_to_category_coins = "prev_old_msg_add_pics_and_video_to_category_coins",
            e.prev_old_msg_add_pics_and_video_to_earn_coins = "prev_old_msg_add_pics_and_video_to_earn_coins",
            e.prev_old_msg_add_pics_to_earn_coins = "prev_old_msg_add_pics_to_earn_coins",
            e.prev_old_msg_add_pics_to_earn_coins_two = "prev_old_msg_add_pics_to_earn_coins_two",
            e.prev_old_msg_add_video_to_earn_coins = "prev_old_msg_add_video_to_earn_coins",
            e.prev_old_msg_add_video_to_earn_coins_two = "prev_old_msg_add_video_to_earn_coins_two",
            e.prev_old_msg_add_words_and_medias_to_earn_coins = "prev_old_msg_add_words_and_medias_to_earn_coins",
            e.prev_old_msg_add_words_and_pics_to_earn_coins = "prev_old_msg_add_words_and_pics_to_earn_coins",
            e.prev_old_msg_add_words_and_video_to_earn_coins = "prev_old_msg_add_words_and_video_to_earn_coins",
            e.prev_old_msg_add_words_to_earn_coins = "prev_old_msg_add_words_to_earn_coins",
            e.prev_old_new_msg_submit_rating_to_earn_coins = "prev_old_new_msg_submit_rating_to_earn_coins",
            e.prev_old_star_definition_1 = "prev_old_star_definition_1",
            e.prev_old_star_definition_2 = "prev_old_star_definition_2",
            e.prev_old_star_definition_3 = "prev_old_star_definition_3",
            e.prev_old_star_definition_4 = "prev_old_star_definition_4",
            e.prev_old_star_definition_5 = "prev_old_star_definition_5",
            e.prev_old_title_overall_rating = "prev_old_title_overall_rating",
            e.product_exclusive_price_sign_up_label = "product-exclusive-price-sign-up-label",
            e.product_page_exclude_warranty_complaint_for_entrrepreneurs = "product_page_exclude_warranty_complaint_for_entrrepreneurs",
            e.product_page_installment_legal_regulation = "product_page_installment_legal_regulation",
            e.product_page_label_brand = "product_page_label_brand",
            e.product_page_label_complaint_additional_info = "product_page_label_complaint_additional_info",
            e.product_page_label_complaint_address = "product_page_label_complaint_address",
            e.product_page_label_complaint_title = "product_page_label_complaint_title",
            e.product_page_label_credit_card_installment_static = "product_page_label_credit_card_installment_static",
            e.product_page_label_free_returns = "product_page_label_free_returns",
            e.product_page_label_free_returns__sg = "product_page_label_free_returns__SG",
            e.product_page_label_installment_plan_title = "product_page_label_installment_plan_title",
            e.product_page_label_invoice = "product_page_label_invoice",
            e.product_page_label_invoice_option = "product_page_label_invoice_option",
            e.product_page_label_learn_more = "product_page_label_learn_more",
            e.product_page_label_low_fulfillment_buy_anyway = "product_page_label_low_fulfillment_buy_anyway",
            e.product_page_label_low_fulfillment_chat_to_offer = "product_page_label_low_fulfillment_chat_to_offer",
            e.product_page_label_margin_scheme_invoice = "product_page_label_margin_scheme_invoice",
            e.product_page_label_no_invoice = "product_page_label_no_invoice";
            e.product_page_label_non_invoice = "product_page_label_non_invoice",
            e.product_page_label_non_vat_invoice = "product_page_label_non_vat_invoice",
            e.product_page_label_stock = "product_page_label_stock",
            e.product_page_label_time_for_warranty = "product_page_label_time_for_warranty",
            e.product_page_label_vat_inclusive = "product_page_label_vat_inclusive",
            e.product_page_label_warranty_one_year = "product_page_label_warranty_one_year",
            e.product_page_label_warranty_over_two_years = "product_page_label_warranty_over_two_years",
            e.product_page_label_warranty_two_years = "product_page_label_warranty_two_years",
            e.product_page_msg_low_fulfillment_rate_popup = "product_page_msg_low_fulfillment_rate_popup",
            e.product_page_prescription_feed_popup_btn = "product_page_prescription_feed_popup_btn",
            e.product_page_prescription_feed_popup_msg = "product_page_prescription_feed_popup_msg",
            e.product_quality_rating = "product_quality_rating",
            e.rate_product_auto_fill = "rate_product_auto_fill",
            e.rate_product_get_more_coin = "rate_product_get_more_coin",
            e.rate_product_size_profile = "rate_product_size_profile",
            e.rate_product_toast = "rate_product_toast",
            e.rate_review_for = "rate_review_for",
            e.rating_anonymous_toggle = "rating_anonymous_toggle",
            e.rating_anonymous_toggle_hint = "rating_anonymous_toggle_hint",
            e.rating_btn_name_ratingfilter_media = "rating_btn_name_ratingfilter_media",
            e.rating_btn_name_ratingfilter_photovideo = "rating_btn_name_ratingfilter_photovideo",
            e.rating_btn_name_retry = "rating_btn_name_retry",
            e.rating_entrance_name_video = "rating_entrance_name_video",
            e.rating_loading_failed = "rating_loading_failed",
            e.rating_loyalty_badge_classic = "rating_loyalty_badge_classic",
            e.rating_loyalty_badge_gold = "rating_loyalty_badge_gold",
            e.rating_loyalty_badge_platinum = "rating_loyalty_badge_platinum",
            e.rating_loyalty_badge_sliver = "rating_loyalty_badge_sliver",
            e.rating_popup_contact_access = "rating_popup_contact_access",
            e.rating_report_frequently_toast = "rating_report_frequently_toast",
            e.rating_report_network_abnormal = "rating_report_network_abnormal",
            e.rating_report_network_abnormal_button = "rating_report_network_abnormal_button",
            e.rating_report_page_cancel = "rating_report_page_cancel",
            e.rating_report_page_submit = "rating_report_page_submit",
            e.rating_report_page_text = "rating_report_page_text",
            e.rating_report_page_title = "rating_report_page_title",
            e.rating_report_reason_advertisement = "rating_report_reason_advertisement",
            e.rating_report_reason_exposing = "rating_report_reason_exposing",
            e.rating_report_reason_misleading = "rating_report_reason_misleading",
            e.rating_report_reason_misleading_prompt = "rating_report_reason_misleading_prompt",
            e.rating_report_reason_other = "rating_report_reason_other",
            e.rating_report_reason_other_prompt = "rating_report_reason_other_prompt",
            e.rating_report_reason_pornographic = "rating_report_reason_pornographic",
            e.rating_report_reason_rude = "rating_report_reason_rude",
            e.rating_report_reason_spam = "rating_report_reason_spam",
            e.rating_report_restriction_toast = "rating_report_restriction_toast",
            e.rating_report_successful_toast = "rating_report_successful_toast",
            e.rating_review_hidden = "rating_review_hidden",
            e.rating_star_label_1_star = "rating_star_label_1_star",
            e.rating_star_label_2_star = "rating_star_label_2_star",
            e.rating_star_label_3_star = "rating_star_label_3_star",
            e.rating_star_label_4_star = "rating_star_label_4_star",
            e.rating_star_label_5_star = "rating_star_label_5_star",
            e.rating_submit_network_abnormal = "rating_submit_network_abnormal",
            e.rating_toast_cellulardata = "rating_toast_cellulardata",
            e.rating_toast_video_upload_size_limit = "rating_toast_video_upload_size_limit",
            e.rating_toast_video_uploadlimit = "rating_toast_video_uploadlimit",
            e.rating_upload_video_fail_toast = "rating_upload_video_fail_toast",
            e.ratings_page_top_hint_text = "ratings_page_top_hint_text",
            e.reply_original_review = "reply_original_review",
            e.reply_share_updates_review = "reply_share_updates_review",
            e.repost_fail = "repost_fail",
            e.repost_more = "repost_more",
            e.reposting = "reposting",
            e.review_ratings = "review_ratings",
            e.reviews_of_current_product = "reviews_of_current_product",
            e.reward_criteria_other_rewards = "reward_criteria_other_rewards",
            e.reward_criteria_size_measurement_info_icon = "reward_criteria_size_measurement_info_icon",
            e.reward_criteria_size_measurement_title = "reward_criteria_size_measurement_title",
            e.save_and_share_fail = "save_and_share_fail",
            e.save_fail = "save_fail",
            e.saved_success = "saved_success",
            e.see_examples = "see_examples",
            e.seller_prize_bonus = "seller_prize_bonus",
            e.seller_reply_hidden = "seller_reply_hidden",
            e.seo_desc_product_page_group_buy = "seo_desc_product_page_group_buy",
            e.seo_desc_product_page_group_buy__my = "seo_desc_product_page_group_buy__MY",
            e.seo_desc_product_page_group_buy__ph = "seo_desc_product_page_group_buy__PH",
            e.seo_desc_product_page_group_buy__sg = "seo_desc_product_page_group_buy__SG",
            e.seo_title_product_page_group_buy = "seo_title_product_page_group_buy",
            e.seo_title_product_page_group_buy__mx = "seo_title_product_page_group_buy__MX",
            e.seo_title_product_page_group_buy__my = "seo_title_product_page_group_buy__MY",
            e.seo_title_product_page_group_buy__ph = "seo_title_product_page_group_buy__PH",
            e.seo_title_product_page_group_buy__sg = "seo_title_product_page_group_buy__SG",
            e.share_fail = "share_fail",
            e.share_ins_copy_tips_body = "share_ins_copy_tips_body",
            e.share_ins_copy_tips_head = "share_ins_copy_tips_head",
            e.share_text = "share_text",
            e.shareins_msg = "shareIns_msg",
            e.shareins_title = "shareIns_title",
            e.shipping_fee_message_multiple_model_price = "shipping_fee_message_multiple_model_price",
            e.shipping_promotion_message_above_mbs = "shipping_promotion_message_above_mbs",
            e.shipping_promotion_message_below_mbs = "shipping_promotion_message_below_mbs",
            e.shipping_promotion_message_fixed = "shipping_promotion_message_fixed",
            e.shipping_promotion_message_fixed__mx = "shipping_promotion_message_fixed__MX",
            e.shipping_promotion_message_flat = "shipping_promotion_message_flat",
            e.shipping_promotion_message_percentage = "shipping_promotion_message_percentage",
            e.shipping_promotion_message_percentage_with_cap = "shipping_promotion_message_percentage_with_cap",
            e.shocking_sale_starts_label = "shocking_sale_starts_label",
            e.shop_rating_summary_tpl = "shop_rating_summary_tpl",
            e.shop_rating_summary_tpl2 = "shop_rating_summary_tpl2",
            e.shop_reviews = "shop_reviews",
            e.shoulder = "Shoulder",
            e.size_info_add = "size_info_add",
            e.size_info_bust = "size_info_bust",
            e.size_info_foot_length = "size_info_foot_length",
            e.size_info_height = "size_info_height",
            e.size_info_waist = "size_info_waist",
            e.size_info_weight = "size_info_weight",
            e.size_info_width = "size_info_width",
            e.size_profile_bonus_coin_hint_text = "size_profile_bonus_coin_hint_text",
            e.size_profile_hint_text_ph = "size_profile_hint_text_PH",
            e.size_profile_info_icon = "size_profile_info_icon",
            e.size_profile_info_icon_ph1 = "size_profile_info_icon_PH1",
            e.size_profile_info_icon_ph2 = "size_profile_info_icon_PH2",
            e.size_profile_info_icon_ph3 = "size_profile_info_icon_PH3",
            e.some_days_update = "some_days_update",
            e.special_price = "special_price",
            e.star_definition_1 = "star_definition_1",
            e.star_definition_2 = "star_definition_2",
            e.star_definition_3 = "star_definition_3",
            e.star_definition_4 = "star_definition_4",
            e.star_definition_5 = "star_definition_5",
            e.stay = "stay",
            e.stretchable = "Stretchable",
            e.submission_successful_and_write_review = "submission_successful_and_write_review",
            e.submit_edit_content = "submit_edit_content",
            e.submit_review_content = "submit_review_content",
            e.submit_review_title = "submit_review_title",
            e.submit_update = "submit_update",
            e.submit_update_content = "submit_update_content",
            e.subtitle_how_to_be_super_reviewer = "subtitle_how_to_be_super_reviewer",
            e.subtitle_what_is_super_reviewer = "subtitle_what_is_super_reviewer",
            e.super_reviewer_tip_1 = "super_reviewer_tip_1",
            e.super_reviewer_tip_2 = "super_reviewer_tip_2",
            e.super_reviewer_tip_3 = "super_reviewer_tip_3",
            e.super_reviewer_tip_4 = "super_reviewer_tip_4",
            e.tag_my_rating_super_review = "tag_my_rating_super_review",
            e.tag_super_review = "tag_super_review",
            e.tag_super_reviewer = "tag_super_reviewer",
            e.tell_us_more = "tell_us_more",
            e.template_pop_up_1 = "Template_pop_up_1",
            e.template_pop_up_2 = "Template_pop_up_2",
            e.test_complex_sdk_txt = "test_complex_sdk_txt",
            e.test_simple_sdk_txt = "test_simple_sdk_txt",
            e.test_simple_sdk_txt1 = "test_simple_sdk_txt1",
            e.text_add_more = "text_add_more",
            e.text_adult_alcohol_confirm_msg = "text_adult_alcohol_confirm_msg",
            e.text_awaiting = "text_awaiting",
            e.text_bonus_coins = "text_bonus_coins",
            e.text_created_reviews = "text_created_reviews",
            e.text_earned_coins = "text_earned_coins",
            e.text_expansion_prompt = "text_expansion_prompt",
            e.text_first_review_reward = "text_first_review_reward",
            e.text_helpful = "text.helpful",
            e.text_left_to_rate_product = "text_left_to_rate_product",
            e.text_more = "text.more",
            e.text_n_out_of_m = "text_n_out_of_m",
            e.text_newly_reminder = "text_newly_reminder",
            e.text_no_ratings = "text_no_ratings",
            e.text_past_created = "text_past_created",
            e.text_perk = "text_perk",
            e.text_rate_this_product = "text_rate_this_product",
            e.text_rating_dispute_reason_1 = "text_rating_dispute_reason_1",
            e.text_rating_dispute_reason_2 = "text_rating_dispute_reason_2",
            e.text_rating_dispute_reason_3 = "text_rating_dispute_reason_3",
            e.text_rating_dispute_reason_4 = "text_rating_dispute_reason_4",
            e.text_reached_buyers = "text_reached_buyers",
            e.text_review_benefit = "text_review_benefit",
            e.text_review_criteria = "text_review_criteria",
            e.text_reviewer_performance = "text_reviewer_performance",
            e.text_reviews = "text_reviews",
            e.text_see_less = "text.see.less",
            e.text_seller_on_vacation = "text_seller_on_vacation",
            e.text_shop_ratings = "text_shop_ratings",
            e.text_shopee_user = "text_shopee_user",
            e.text_submit_without_bonus_coins = "text_submit_without_bonus_coins",
            e.text_super_reviewer_program = "text_super_reviewer_program",
            e.text_users = "text_users",
            e.textbox_bottom_right_hint = "textbox_bottom_right_hint",
            e.thanks_for_your_rate = "thanks_for_your_rate",
            e.thigh = "Thigh",
            e.tip_click_below_to_whatsapp = "tip_click_below_to_whatsapp",
            e.tip_display_exclusive_tags = "tip_display_exclusive_tags",
            e.tip_free_samples = "tip_free_samples",
            e.tip_join_get = "tip_join_get",
            e.tips_abnormal_item = "tips_abnormal_item",
            e.tips_back_to_edit = "tips_back_to_edit",
            e.tips_check_submit = "tips_check_submit",
            e.tips_comment_check_dialog_exlow = "tips_comment_check_dialog_exlow",
            e.tips_comment_check_dialog_low = "tips_comment_check_dialog_low",
            e.tips_comment_check_ex_1_1 = "tips_comment_check_ex_1_1",
            e.tips_comment_check_low_1_1 = "tips_comment_check_low_1_1",
            e.tips_comment_check_low_1_2 = "tips_comment_check_low_1_2",
            e.tips_comment_check_low_1_3 = "tips_comment_check_low_1_3",
            e.tips_comment_check_low_edit_1_1 = "tips_comment_check_low_edit_1_1",
            e.tips_comment_check_low_edit_1_2 = "tips_comment_check_low_edit_1_2",
            e.tips_comment_check_low_edit_1_3 = "tips_comment_check_low_edit_1_3",
            e.tips_comment_content_edit_low = "tips_comment_content_edit_low",
            e.tips_comment_content_exlow = "tips_comment_content_exlow",
            e.tips_comment_content_low = "tips_comment_content_low",
            e.tips_comment_media_check_dialog_exlow = "tips_comment_media_check_dialog_exlow",
            e.tips_comment_media_new_check_dialog_low = "tips_comment_media_new_check_dialog_low",
            e.tips_comment_only_dialog_elow = "tips_comment_only_dialog_elow",
            e.tips_comment_only_dialog_low = "tips_comment_only_dialog_low",
            e.tips_large = "tips_large",
            e.tips_media_check_low_apple_qc = "tips_media_check_low_Apple_QC",
            e.tips_media_check_new_1_exlow = "tips_media_check_new_1_exlow",
            e.tips_media_check_new_1_low = "tips_media_check_new_1_low",
            e.tips_media_check_new_2_exlow = "tips_media_check_new_2_exlow",
            e.tips_media_check_new_2_low = "tips_media_check_new_2_low",
            e.tips_media_check_new_3_exlow = "tips_media_check_new_3_exlow",
            e.tips_media_check_new_3_low = "tips_media_check_new_3_low",
            e.tips_media_check_new_4_exlow = "tips_media_check_new_4_exlow",
            e.tips_media_check_new_4_low = "tips_media_check_new_4_low",
            e.tips_media_check_new_5_exlow = "tips_media_check_new_5_exlow",
            e.tips_media_check_new_5_low = "tips_media_check_new_5_low",
            e.tips_media_check_new_6_exlow = "tips_media_check_new_6_exlow",
            e.tips_media_check_new_6_low = "tips_media_check_new_6_low",
            e.tips_media_check_new_7_exlow = "tips_media_check_new_7_exlow",
            e.tips_media_check_new_7_low = "tips_media_check_new_7_low",
            e.tips_media_comment_check_ex_1_1_1 = "tips_media_comment_check_ex_1_1_1",
            e.tips_media_comment_check_ex_1_1_2 = "tips_media_comment_check_ex_1_1_2",
            e.tips_media_comment_check_ex_1_1_3 = "tips_media_comment_check_ex_1_1_3",
            e.tips_media_comment_check_ex_1_2_1 = "tips_media_comment_check_ex_1_2_1",
            e.tips_media_comment_check_ex_1_2_2 = "tips_media_comment_check_ex_1_2_2",
            e.tips_media_comment_check_ex_1_2_3 = "tips_media_comment_check_ex_1_2_3",
            e.tips_media_comment_check_ex_1_3_1 = "tips_media_comment_check_ex_1_3_1",
            e.tips_media_comment_check_ex_1_3_2 = "tips_media_comment_check_ex_1_3_2",
            e.tips_media_comment_check_ex_1_3_3 = "tips_media_comment_check_ex_1_3_3",
            e.tips_media_comment_check_ex_1_4_1 = "tips_media_comment_check_ex_1_4_1",
            e.tips_media_comment_check_ex_1_4_2 = "tips_media_comment_check_ex_1_4_2",
            e.tips_media_comment_check_ex_1_4_3 = "tips_media_comment_check_ex_1_4_3",
            e.tips_media_comment_check_ex_1_5_1 = "tips_media_comment_check_ex_1_5_1",
            e.tips_media_comment_check_ex_1_5_2 = "tips_media_comment_check_ex_1_5_2",
            e.tips_media_comment_check_ex_1_5_3 = "tips_media_comment_check_ex_1_5_3",
            e.tips_media_comment_check_ex_1_6_1 = "tips_media_comment_check_ex_1_6_1",
            e.tips_media_comment_check_ex_1_6_2 = "tips_media_comment_check_ex_1_6_2",
            e.tips_media_comment_check_ex_1_6_3 = "tips_media_comment_check_ex_1_6_3",
            e.tips_media_comment_check_ex_1_7_1 = "tips_media_comment_check_ex_1_7_1",
            e.tips_media_comment_check_ex_1_7_2 = "tips_media_comment_check_ex_1_7_2",
            e.tips_media_comment_check_ex_1_7_3 = "tips_media_comment_check_ex_1_7_3",
            e.tips_media_comment_check_ex_2_1_1 = "tips_media_comment_check_ex_2_1_1",
            e.tips_media_comment_check_ex_2_1_2 = "tips_media_comment_check_ex_2_1_2",
            e.tips_media_comment_check_ex_2_1_3 = "tips_media_comment_check_ex_2_1_3",
            e.tips_media_comment_check_ex_2_2_1 = "tips_media_comment_check_ex_2_2_1",
            e.tips_media_comment_check_ex_2_2_2 = "tips_media_comment_check_ex_2_2_2",
            e.tips_media_comment_check_ex_2_2_3 = "tips_media_comment_check_ex_2_2_3",
            e.tips_media_comment_check_ex_2_3_1 = "tips_media_comment_check_ex_2_3_1",
            e.tips_media_comment_check_ex_2_3_2 = "tips_media_comment_check_ex_2_3_2",
            e.tips_media_comment_check_ex_2_3_3 = "tips_media_comment_check_ex_2_3_3",
            e.tips_media_comment_check_ex_2_4_1 = "tips_media_comment_check_ex_2_4_1",
            e.tips_media_comment_check_ex_2_4_2 = "tips_media_comment_check_ex_2_4_2",
            e.tips_media_comment_check_ex_2_4_3 = "tips_media_comment_check_ex_2_4_3",
            e.tips_media_comment_check_ex_2_5_1 = "tips_media_comment_check_ex_2_5_1",
            e.tips_media_comment_check_ex_2_5_2 = "tips_media_comment_check_ex_2_5_2",
            e.tips_media_comment_check_ex_2_5_3 = "tips_media_comment_check_ex_2_5_3",
            e.tips_media_comment_check_ex_2_6_1 = "tips_media_comment_check_ex_2_6_1",
            e.tips_media_comment_check_ex_2_6_2 = "tips_media_comment_check_ex_2_6_2",
            e.tips_media_comment_check_ex_2_6_3 = "tips_media_comment_check_ex_2_6_3",
            e.tips_media_comment_check_ex_2_7_1 = "tips_media_comment_check_ex_2_7_1",
            e.tips_media_comment_check_ex_2_7_2 = "tips_media_comment_check_ex_2_7_2",
            e.tips_media_comment_check_ex_2_7_3 = "tips_media_comment_check_ex_2_7_3",
            e.tips_media_comment_check_ex_3_1_1 = "tips_media_comment_check_ex_3_1_1",
            e.tips_media_comment_check_ex_3_1_2 = "tips_media_comment_check_ex_3_1_2",
            e.tips_media_comment_check_ex_3_1_3 = "tips_media_comment_check_ex_3_1_3",
            e.tips_media_comment_check_ex_3_2_1 = "tips_media_comment_check_ex_3_2_1",
            e.tips_media_comment_check_ex_3_2_2 = "tips_media_comment_check_ex_3_2_2",
            e.tips_media_comment_check_ex_3_2_3 = "tips_media_comment_check_ex_3_2_3",
            e.tips_media_comment_check_ex_3_3_1 = "tips_media_comment_check_ex_3_3_1",
            e.tips_media_comment_check_ex_3_3_2 = "tips_media_comment_check_ex_3_3_2",
            e.tips_media_comment_check_ex_3_3_3 = "tips_media_comment_check_ex_3_3_3",
            e.tips_media_comment_check_ex_3_4_1 = "tips_media_comment_check_ex_3_4_1",
            e.tips_media_comment_check_ex_3_4_2 = "tips_media_comment_check_ex_3_4_2",
            e.tips_media_comment_check_ex_3_4_3 = "tips_media_comment_check_ex_3_4_3",
            e.tips_media_comment_check_ex_3_5_1 = "tips_media_comment_check_ex_3_5_1",
            e.tips_media_comment_check_ex_3_5_2 = "tips_media_comment_check_ex_3_5_2",
            e.tips_media_comment_check_ex_3_5_3 = "tips_media_comment_check_ex_3_5_3",
            e.tips_media_comment_check_ex_3_6_1 = "tips_media_comment_check_ex_3_6_1",
            e.tips_media_comment_check_ex_3_6_2 = "tips_media_comment_check_ex_3_6_2",
            e.tips_media_comment_check_ex_3_6_3 = "tips_media_comment_check_ex_3_6_3",
            e.tips_media_comment_check_ex_3_7_1 = "tips_media_comment_check_ex_3_7_1",
            e.tips_media_comment_check_ex_3_7_2 = "tips_media_comment_check_ex_3_7_2",
            e.tips_media_comment_check_ex_3_7_3 = "tips_media_comment_check_ex_3_7_3",
            e.tips_media_comment_check_low_1_1_1 = "tips_media_comment_check_low_1_1_1",
            e.tips_media_comment_check_low_1_1_2 = "tips_media_comment_check_low_1_1_2",
            e.tips_media_comment_check_low_1_1_3 = "tips_media_comment_check_low_1_1_3",
            e.tips_media_comment_check_low_1_2_1 = "tips_media_comment_check_low_1_2_1",
            e.tips_media_comment_check_low_1_2_2 = "tips_media_comment_check_low_1_2_2",
            e.tips_media_comment_check_low_1_2_3 = "tips_media_comment_check_low_1_2_3",
            e.tips_media_comment_check_low_1_3_1 = "tips_media_comment_check_low_1_3_1",
            e.tips_media_comment_check_low_1_3_2 = "tips_media_comment_check_low_1_3_2",
            e.tips_media_comment_check_low_1_3_3 = "tips_media_comment_check_low_1_3_3",
            e.tips_media_comment_check_low_1_4_1 = "tips_media_comment_check_low_1_4_1",
            e.tips_media_comment_check_low_1_4_2 = "tips_media_comment_check_low_1_4_2",
            e.tips_media_comment_check_low_1_4_3 = "tips_media_comment_check_low_1_4_3",
            e.tips_media_comment_check_low_1_5_1 = "tips_media_comment_check_low_1_5_1",
            e.tips_media_comment_check_low_1_5_2 = "tips_media_comment_check_low_1_5_2",
            e.tips_media_comment_check_low_1_5_3 = "tips_media_comment_check_low_1_5_3",
            e.tips_media_comment_check_low_1_6_1 = "tips_media_comment_check_low_1_6_1",
            e.tips_media_comment_check_low_1_6_2 = "tips_media_comment_check_low_1_6_2",
            e.tips_media_comment_check_low_1_6_3 = "tips_media_comment_check_low_1_6_3",
            e.tips_media_comment_check_low_1_7_1 = "tips_media_comment_check_low_1_7_1",
            e.tips_media_comment_check_low_1_7_2 = "tips_media_comment_check_low_1_7_2",
            e.tips_media_comment_check_low_1_7_3 = "tips_media_comment_check_low_1_7_3",
            e.tips_media_comment_check_low_2_1_1 = "tips_media_comment_check_low_2_1_1",
            e.tips_media_comment_check_low_2_1_2 = "tips_media_comment_check_low_2_1_2",
            e.tips_media_comment_check_low_2_1_3 = "tips_media_comment_check_low_2_1_3",
            e.tips_media_comment_check_low_2_2_1 = "tips_media_comment_check_low_2_2_1",
            e.tips_media_comment_check_low_2_2_2 = "tips_media_comment_check_low_2_2_2",
            e.tips_media_comment_check_low_2_2_3 = "tips_media_comment_check_low_2_2_3",
            e.tips_media_comment_check_low_2_3_1 = "tips_media_comment_check_low_2_3_1",
            e.tips_media_comment_check_low_2_3_2 = "tips_media_comment_check_low_2_3_2",
            e.tips_media_comment_check_low_2_3_3 = "tips_media_comment_check_low_2_3_3",
            e.tips_media_comment_check_low_2_4_1 = "tips_media_comment_check_low_2_4_1",
            e.tips_media_comment_check_low_2_4_2 = "tips_media_comment_check_low_2_4_2",
            e.tips_media_comment_check_low_2_4_3 = "tips_media_comment_check_low_2_4_3",
            e.tips_media_comment_check_low_2_5_1 = "tips_media_comment_check_low_2_5_1",
            e.tips_media_comment_check_low_2_5_2 = "tips_media_comment_check_low_2_5_2",
            e.tips_media_comment_check_low_2_5_3 = "tips_media_comment_check_low_2_5_3",
            e.tips_media_comment_check_low_2_6_1 = "tips_media_comment_check_low_2_6_1",
            e.tips_media_comment_check_low_2_6_2 = "tips_media_comment_check_low_2_6_2",
            e.tips_media_comment_check_low_2_6_3 = "tips_media_comment_check_low_2_6_3",
            e.tips_media_comment_check_low_2_7_1 = "tips_media_comment_check_low_2_7_1",
            e.tips_media_comment_check_low_2_7_2 = "tips_media_comment_check_low_2_7_2",
            e.tips_media_comment_check_low_2_7_3 = "tips_media_comment_check_low_2_7_3",
            e.tips_media_comment_check_low_3_1_1 = "tips_media_comment_check_low_3_1_1",
            e.tips_media_comment_check_low_3_1_2 = "tips_media_comment_check_low_3_1_2",
            e.tips_media_comment_check_low_3_1_3 = "tips_media_comment_check_low_3_1_3",
            e.tips_media_comment_check_low_3_2_1 = "tips_media_comment_check_low_3_2_1",
            e.tips_media_comment_check_low_3_2_2 = "tips_media_comment_check_low_3_2_2",
            e.tips_media_comment_check_low_3_2_3 = "tips_media_comment_check_low_3_2_3",
            e.tips_media_comment_check_low_3_3_1 = "tips_media_comment_check_low_3_3_1",
            e.tips_media_comment_check_low_3_3_2 = "tips_media_comment_check_low_3_3_2",
            e.tips_media_comment_check_low_3_3_3 = "tips_media_comment_check_low_3_3_3",
            e.tips_media_comment_check_low_3_4_1 = "tips_media_comment_check_low_3_4_1",
            e.tips_media_comment_check_low_3_4_2 = "tips_media_comment_check_low_3_4_2",
            e.tips_media_comment_check_low_3_4_3 = "tips_media_comment_check_low_3_4_3",
            e.tips_media_comment_check_low_3_5_1 = "tips_media_comment_check_low_3_5_1",
            e.tips_media_comment_check_low_3_5_2 = "tips_media_comment_check_low_3_5_2",
            e.tips_media_comment_check_low_3_5_3 = "tips_media_comment_check_low_3_5_3",
            e.tips_media_comment_check_low_3_6_1 = "tips_media_comment_check_low_3_6_1",
            e.tips_media_comment_check_low_3_6_2 = "tips_media_comment_check_low_3_6_2",
            e.tips_media_comment_check_low_3_6_3 = "tips_media_comment_check_low_3_6_3",
            e.tips_media_comment_check_low_3_7_1 = "tips_media_comment_check_low_3_7_1",
            e.tips_media_comment_check_low_3_7_2 = "tips_media_comment_check_low_3_7_2",
            e.tips_media_comment_check_low_3_7_3 = "tips_media_comment_check_low_3_7_3",
            e.tips_media_comment_check_low_edit_1_1_1 = "tips_media_comment_check_low_edit_1_1_1",
            e.tips_media_comment_check_low_edit_1_1_2 = "tips_media_comment_check_low_edit_1_1_2",
            e.tips_media_comment_check_low_edit_1_1_3 = "tips_media_comment_check_low_edit_1_1_3",
            e.tips_media_comment_check_low_edit_1_2_1 = "tips_media_comment_check_low_edit_1_2_1",
            e.tips_media_comment_check_low_edit_1_2_2 = "tips_media_comment_check_low_edit_1_2_2",
            e.tips_media_comment_check_low_edit_1_2_3 = "tips_media_comment_check_low_edit_1_2_3",
            e.tips_media_comment_check_low_edit_1_3_1 = "tips_media_comment_check_low_edit_1_3_1",
            e.tips_media_comment_check_low_edit_1_3_2 = "tips_media_comment_check_low_edit_1_3_2",
            e.tips_media_comment_check_low_edit_1_3_3 = "tips_media_comment_check_low_edit_1_3_3",
            e.tips_media_comment_check_low_edit_1_4_1 = "tips_media_comment_check_low_edit_1_4_1",
            e.tips_media_comment_check_low_edit_1_4_2 = "tips_media_comment_check_low_edit_1_4_2",
            e.tips_media_comment_check_low_edit_1_4_3 = "tips_media_comment_check_low_edit_1_4_3",
            e.tips_media_comment_check_low_edit_1_5_1 = "tips_media_comment_check_low_edit_1_5_1",
            e.tips_media_comment_check_low_edit_1_5_2 = "tips_media_comment_check_low_edit_1_5_2",
            e.tips_media_comment_check_low_edit_1_5_3 = "tips_media_comment_check_low_edit_1_5_3",
            e.tips_media_comment_check_low_edit_1_6_1 = "tips_media_comment_check_low_edit_1_6_1",
            e.tips_media_comment_check_low_edit_1_6_2 = "tips_media_comment_check_low_edit_1_6_2",
            e.tips_media_comment_check_low_edit_1_6_3 = "tips_media_comment_check_low_edit_1_6_3",
            e.tips_media_comment_check_low_edit_1_7_1 = "tips_media_comment_check_low_edit_1_7_1",
            e.tips_media_comment_check_low_edit_1_7_2 = "tips_media_comment_check_low_edit_1_7_2",
            e.tips_media_comment_check_low_edit_1_7_3 = "tips_media_comment_check_low_edit_1_7_3",
            e.tips_media_comment_check_low_edit_2_1_1 = "tips_media_comment_check_low_edit_2_1_1",
            e.tips_media_comment_check_low_edit_2_1_2 = "tips_media_comment_check_low_edit_2_1_2",
            e.tips_media_comment_check_low_edit_2_1_3 = "tips_media_comment_check_low_edit_2_1_3",
            e.tips_media_comment_check_low_edit_2_2_1 = "tips_media_comment_check_low_edit_2_2_1",
            e.tips_media_comment_check_low_edit_2_2_2 = "tips_media_comment_check_low_edit_2_2_2",
            e.tips_media_comment_check_low_edit_2_2_3 = "tips_media_comment_check_low_edit_2_2_3",
            e.tips_media_comment_check_low_edit_2_3_1 = "tips_media_comment_check_low_edit_2_3_1",
            e.tips_media_comment_check_low_edit_2_3_2 = "tips_media_comment_check_low_edit_2_3_2",
            e.tips_media_comment_check_low_edit_2_3_3 = "tips_media_comment_check_low_edit_2_3_3",
            e.tips_media_comment_check_low_edit_2_4_1 = "tips_media_comment_check_low_edit_2_4_1",
            e.tips_media_comment_check_low_edit_2_4_2 = "tips_media_comment_check_low_edit_2_4_2",
            e.tips_media_comment_check_low_edit_2_4_3 = "tips_media_comment_check_low_edit_2_4_3",
            e.tips_media_comment_check_low_edit_2_5_1 = "tips_media_comment_check_low_edit_2_5_1",
            e.tips_media_comment_check_low_edit_2_5_2 = "tips_media_comment_check_low_edit_2_5_2",
            e.tips_media_comment_check_low_edit_2_5_3 = "tips_media_comment_check_low_edit_2_5_3",
            e.tips_media_comment_check_low_edit_2_6_1 = "tips_media_comment_check_low_edit_2_6_1",
            e.tips_media_comment_check_low_edit_2_6_2 = "tips_media_comment_check_low_edit_2_6_2",
            e.tips_media_comment_check_low_edit_2_6_3 = "tips_media_comment_check_low_edit_2_6_3",
            e.tips_media_comment_check_low_edit_2_7_1 = "tips_media_comment_check_low_edit_2_7_1",
            e.tips_media_comment_check_low_edit_2_7_2 = "tips_media_comment_check_low_edit_2_7_2",
            e.tips_media_comment_check_low_edit_2_7_3 = "tips_media_comment_check_low_edit_2_7_3",
            e.tips_media_comment_check_low_edit_3_1_1 = "tips_media_comment_check_low_edit_3_1_1",
            e.tips_media_comment_check_low_edit_3_1_2 = "tips_media_comment_check_low_edit_3_1_2",
            e.tips_media_comment_check_low_edit_3_1_3 = "tips_media_comment_check_low_edit_3_1_3",
            e.tips_media_comment_check_low_edit_3_2_1 = "tips_media_comment_check_low_edit_3_2_1",
            e.tips_media_comment_check_low_edit_3_2_2 = "tips_media_comment_check_low_edit_3_2_2",
            e.tips_media_comment_check_low_edit_3_2_3 = "tips_media_comment_check_low_edit_3_2_3",
            e.tips_media_comment_check_low_edit_3_3_1 = "tips_media_comment_check_low_edit_3_3_1",
            e.tips_media_comment_check_low_edit_3_3_2 = "tips_media_comment_check_low_edit_3_3_2",
            e.tips_media_comment_check_low_edit_3_3_3 = "tips_media_comment_check_low_edit_3_3_3",
            e.tips_media_comment_check_low_edit_3_4_1 = "tips_media_comment_check_low_edit_3_4_1",
            e.tips_media_comment_check_low_edit_3_4_2 = "tips_media_comment_check_low_edit_3_4_2",
            e.tips_media_comment_check_low_edit_3_4_3 = "tips_media_comment_check_low_edit_3_4_3",
            e.tips_media_comment_check_low_edit_3_5_1 = "tips_media_comment_check_low_edit_3_5_1",
            e.tips_media_comment_check_low_edit_3_5_2 = "tips_media_comment_check_low_edit_3_5_2",
            e.tips_media_comment_check_low_edit_3_5_3 = "tips_media_comment_check_low_edit_3_5_3",
            e.tips_media_comment_check_low_edit_3_6_1 = "tips_media_comment_check_low_edit_3_6_1",
            e.tips_media_comment_check_low_edit_3_6_2 = "tips_media_comment_check_low_edit_3_6_2",
            e.tips_media_comment_check_low_edit_3_6_3 = "tips_media_comment_check_low_edit_3_6_3",
            e.tips_media_comment_check_low_edit_3_7_1 = "tips_media_comment_check_low_edit_3_7_1",
            e.tips_media_comment_check_low_edit_3_7_2 = "tips_media_comment_check_low_edit_3_7_2",
            e.tips_media_comment_check_low_edit_3_7_3 = "tips_media_comment_check_low_edit_3_7_3",
            e.tips_media_content_1_edit_low = "tips_media_content_1_edit_low",
            e.tips_media_content_1_exlow = "tips_media_content_1_exlow",
            e.tips_media_content_1_low = "tips_media_content_1_low",
            e.tips_media_content_2_edit_low = "tips_media_content_2_edit_low",
            e.tips_media_content_2_exlow = "tips_media_content_2_exlow",
            e.tips_media_content_2_low = "tips_media_content_2_low",
            e.tips_media_content_3_edit_low = "tips_media_content_3_edit_low",
            e.tips_media_content_3_exlow = "tips_media_content_3_exlow",
            e.tips_media_content_3_low = "tips_media_content_3_low",
            e.tips_media_content_4_edit_low = "tips_media_content_4_edit_low",
            e.tips_media_content_4_exlow = "tips_media_content_4_exlow",
            e.tips_media_content_4_low = "tips_media_content_4_low",
            e.tips_media_content_5_edit_low = "tips_media_content_5_edit_low",
            e.tips_media_content_5_exlow = "tips_media_content_5_exlow",
            e.tips_media_content_5_low = "tips_media_content_5_low",
            e.tips_media_content_6_edit_low = "tips_media_content_6_edit_low",
            e.tips_media_content_6_exlow = "tips_media_content_6_exlow",
            e.tips_media_content_6_low = "tips_media_content_6_low",
            e.tips_media_content_7_edit_low = "tips_media_content_7_edit_low",
            e.tips_media_content_7_exlow = "tips_media_content_7_exlow",
            e.tips_media_content_7_low = "tips_media_content_7_low",
            e.tips_media_quality_normal = "tips_media_quality_normal",
            e.tips_media_quality_one = "tips_media_quality_one",
            e.tips_media_quality_two = "tips_media_quality_two",
            e.tips_medias_quality_ex_1_1 = "tips_medias_quality_ex_1_1",
            e.tips_medias_quality_ex_1_2 = "tips_medias_quality_ex_1_2",
            e.tips_medias_quality_ex_1_3 = "tips_medias_quality_ex_1_3",
            e.tips_medias_quality_ex_1_4 = "tips_medias_quality_ex_1_4",
            e.tips_medias_quality_ex_1_5 = "tips_medias_quality_ex_1_5",
            e.tips_medias_quality_ex_1_6 = "tips_medias_quality_ex_1_6",
            e.tips_medias_quality_ex_1_7 = "tips_medias_quality_ex_1_7",
            e.tips_medias_quality_ex_2_1 = "tips_medias_quality_ex_2_1",
            e.tips_medias_quality_ex_2_2 = "tips_medias_quality_ex_2_2",
            e.tips_medias_quality_ex_2_3 = "tips_medias_quality_ex_2_3",
            e.tips_medias_quality_ex_2_4 = "tips_medias_quality_ex_2_4",
            e.tips_medias_quality_ex_2_5 = "tips_medias_quality_ex_2_5",
            e.tips_medias_quality_ex_2_6 = "tips_medias_quality_ex_2_6",
            e.tips_medias_quality_ex_2_7 = "tips_medias_quality_ex_2_7",
            e.tips_medias_quality_ex_3_1 = "tips_medias_quality_ex_3_1",
            e.tips_medias_quality_ex_3_2 = "tips_medias_quality_ex_3_2",
            e.tips_medias_quality_ex_3_3 = "tips_medias_quality_ex_3_3",
            e.tips_medias_quality_ex_3_4 = "tips_medias_quality_ex_3_4",
            e.tips_medias_quality_ex_3_5 = "tips_medias_quality_ex_3_5",
            e.tips_medias_quality_ex_3_6 = "tips_medias_quality_ex_3_6",
            e.tips_medias_quality_ex_3_7 = "tips_medias_quality_ex_3_7",
            e.tips_medias_quality_low_1_1 = "tips_medias_quality_low_1_1",
            e.tips_medias_quality_low_1_2 = "tips_medias_quality_low_1_2",
            e.tips_medias_quality_low_1_3 = "tips_medias_quality_low_1_3",
            e.tips_medias_quality_low_1_4 = "tips_medias_quality_low_1_4",
            e.tips_medias_quality_low_1_5 = "tips_medias_quality_low_1_5",
            e.tips_medias_quality_low_1_6 = "tips_medias_quality_low_1_6",
            e.tips_medias_quality_low_1_7 = "tips_medias_quality_low_1_7",
            e.tips_medias_quality_low_2_1 = "tips_medias_quality_low_2_1",
            e.tips_medias_quality_low_2_2 = "tips_medias_quality_low_2_2",
            e.tips_medias_quality_low_2_3 = "tips_medias_quality_low_2_3",
            e.tips_medias_quality_low_2_4 = "tips_medias_quality_low_2_4",
            e.tips_medias_quality_low_2_5 = "tips_medias_quality_low_2_5",
            e.tips_medias_quality_low_2_6 = "tips_medias_quality_low_2_6",
            e.tips_medias_quality_low_2_7 = "tips_medias_quality_low_2_7",
            e.tips_medias_quality_low_3_1 = "tips_medias_quality_low_3_1",
            e.tips_medias_quality_low_3_2 = "tips_medias_quality_low_3_2",
            e.tips_medias_quality_low_3_3 = "tips_medias_quality_low_3_3",
            e.tips_medias_quality_low_3_4 = "tips_medias_quality_low_3_4",
            e.tips_medias_quality_low_3_5 = "tips_medias_quality_low_3_5",
            e.tips_medias_quality_low_3_6 = "tips_medias_quality_low_3_6",
            e.tips_medias_quality_low_3_7 = "tips_medias_quality_low_3_7",
            e.tips_medias_quality_low_edit_1_1 = "tips_medias_quality_low_edit_1_1",
            e.tips_medias_quality_low_edit_1_2 = "tips_medias_quality_low_edit_1_2",
            e.tips_medias_quality_low_edit_1_3 = "tips_medias_quality_low_edit_1_3",
            e.tips_medias_quality_low_edit_1_4 = "tips_medias_quality_low_edit_1_4",
            e.tips_medias_quality_low_edit_1_5 = "tips_medias_quality_low_edit_1_5",
            e.tips_medias_quality_low_edit_1_6 = "tips_medias_quality_low_edit_1_6",
            e.tips_medias_quality_low_edit_1_7 = "tips_medias_quality_low_edit_1_7",
            e.tips_medias_quality_low_edit_2_1 = "tips_medias_quality_low_edit_2_1",
            e.tips_medias_quality_low_edit_2_2 = "tips_medias_quality_low_edit_2_2",
            e.tips_medias_quality_low_edit_2_3 = "tips_medias_quality_low_edit_2_3",
            e.tips_medias_quality_low_edit_2_4 = "tips_medias_quality_low_edit_2_4",
            e.tips_medias_quality_low_edit_2_5 = "tips_medias_quality_low_edit_2_5",
            e.tips_medias_quality_low_edit_2_6 = "tips_medias_quality_low_edit_2_6",
            e.tips_medias_quality_low_edit_2_7 = "tips_medias_quality_low_edit_2_7",
            e.tips_medias_quality_low_edit_3_1 = "tips_medias_quality_low_edit_3_1",
            e.tips_medias_quality_low_edit_3_2 = "tips_medias_quality_low_edit_3_2",
            e.tips_medias_quality_low_edit_3_3 = "tips_medias_quality_low_edit_3_3",
            e.tips_medias_quality_low_edit_3_4 = "tips_medias_quality_low_edit_3_4",
            e.tips_medias_quality_low_edit_3_5 = "tips_medias_quality_low_edit_3_5",
            e.tips_medias_quality_low_edit_3_6 = "tips_medias_quality_low_edit_3_6",
            e.tips_medias_quality_low_edit_3_7 = "tips_medias_quality_low_edit_3_7",
            e.tips_reason_back_to_edit_apple_qc = "tips_reason_back_to_edit_Apple_QC",
            e.tips_review_prize_content = "tips_review_prize_content",
            e.tips_review_prize_title = "tips_review_prize_title",
            e.tips_review_prize_warming = "tips_review_prize_warming",
            e.tips_see_examples = "tips_see_examples",
            e.tips_small = "tips_small",
            e.tips_too_large = "tips_too_large",
            e.tips_too_small = "tips_too_small",
            e.tips_true_to_size = "tips_true_to_size",
            e.tips_view_more = "tips_view_more",
            e.title_add_photo = "title_add_photo",
            e.title_check_submit = "title_check_submit",
            e.title_join_super_reviewer_page = "title_join_super_reviewer_page",
            e.title_not_accept = "title_not_accept",
            e.title_overall_fit = "title_overall_fit",
            e.title_overall_rating = "title_overall_rating",
            e.title_product_page_new = "title_product_page_new",
            e.title_product_page_new__my = "title_product_page_new__MY",
            e.title_product_page_new__ph = "title_product_page_new__PH",
            e.title_product_page_new__sg = "title_product_page_new__SG",
            e.title_reviews_hidden = "title_reviews_hidden",
            e.title_super_reviewer = "title_super_reviewer",
            e.title_super_reviewer_1 = "title_super_reviewer_1",
            e.title_super_reviewer_2 = "title_super_reviewer_2",
            e.toast_minimum_purchase_quantity = "toast_minimum_purchase_quantity",
            e.toast_pdp_shipping_fee_no_shipping_channel_available = "toast_pdp_shipping_fee_no_shipping_channel_available",
            e.toast_try_again = "toast_try_again",
            e.toast_video_error = "toast.video.error",
            e.toggle_hint_sync = "toggle_hint_sync",
            e.toggle_hint_syncoff = "toggle_hint_syncoff",
            e.toggle_name_sync = "toggle_name_sync",
            e.toggle_name_sync_new = "toggle_name_sync_new",
            e.too_long = "Too Long",
            e.too_short = "Too Short",
            e.top_length = "Top Length",
            e.transify_test = "transify_test",
            e.try_again = "try_again",
            e.under_bust = "Under Bust",
            e.undersize = "Undersize",
            e.update = "update",
            e.updated_review = "updated_review",
            e.user_data_sync_hint_text = "user_data_sync_hint_text",
            e.video = "video",
            e.waist = "Waist",
            e.warning_minimum_purchase_quantity = "warning_minimum_purchase_quantity",
            e.warning_overall_purchase_limit_case_1 = "warning_overall_purchase_limit_case_1",
            e.warning_overall_purchase_limit_case_2 = "warning_overall_purchase_limit_case_2",
            e.warning_purchase_limit_exceeded = "warning_purchase_limit_exceeded",
            e.warning_purchase_limit_hit = "warning_purchase_limit_hit",
            e.warning_purchase_limit_max_qty = "warning_purchase_limit_max_qty",
            e.weight = "Weight",
            e.wide = "Wide",
            e.width = "Width",
            e.write_content_or_upload_media = "write_content_or_upload_media",
            e.write_reviews = "write_reviews",
            e.you_can_write_reviews = "you_can_write_reviews",
            e.you_rated_stars = "you_rated_stars",
            e.your_friend_group = "your_friend_group"
        }(a || (a = {}))
    }
    ,
    72148: (e, t, _) => {
        "use strict";
        _.d(t, {
            aH: () => x,
            b$: () => I,
            e9: () => b,
            ep: () => A,
            gt: () => T,
            mx: () => h,
            tg: () => L
        });
        var a = _(96474)
          , i = _(6714)
          , o = _(87363)
          , r = _.n(o)
          , n = _(471)
          , s = _(60124)
          , l = _(15585)
          , d = _(20350);
        const p = ["Component", "shopId"]
          , c = `{{${Date.now()}}}`
          , m = (0,
        s.Kd)()
          , u = (0,
        s.dU)()
          , g = (0,
        s.of)();
        function h(e, t) {
            if (!t)
                return {
                    comments: "",
                    tmpTagsComments: {}
                };
            if (!e || !e.length)
                return {
                    comments: t,
                    tmpTagsComments: {}
                };
            const _ = t.indexOf("\n\n")
              , a = Object.create(null);
            let i = ""
              , o = "";
            if (_ < 0)
                i = t;
            else {
                const e = t.replace(/\n\n/, c).split(c);
                i = e[0] || "",
                o = e[1] || ""
            }
            return i && i.split("\n").forEach((t => {
                const _ = t.replace(":", c).split(c)
                  , i = _[0]
                  , o = _[1];
                i && o && e.includes(i) && Object.assign(a, {
                    [i]: o.replace(/\n/g, "")
                })
            }
            )),
            {
                comments: o,
                tmpTagsComments: a
            }
        }
        function y(e) {
            const t = {};
            return e.forEach(( (e, _) => {
                const a = String(_).replace(/-/g, "_");
                t[a] = e
            }
            )),
            t
        }
        const v = {
            projectName: "pcmall",
            moduleName: "shoprating"
        }
          , f = [399100001, 18100069]
          , b = "undefined" == typeof Proxy ? l.FetchUtils : new Proxy(l.FetchUtils,{
            get(e, t) {
                const _ = e[t];
                return "function" == typeof _ ? (...e) => {
                    try {
                        const t = _.apply(this, e);
                        return t instanceof Promise ? (t.then((t => {
                            if (t && "number" == typeof t.error && 0 !== t.error && !f.includes(t.error)) {
                                let o = null;
                                var _;
                                if (null != t && t.error_response)
                                    o = y(null == t || null == (_ = t.error_response) ? void 0 : _.headers);
                                else if (null != t && t.__raw) {
                                    var a;
                                    o = y(null == t || null == (a = t.__raw) ? void 0 : a.headers)
                                }
                                o && void 0 !== typeof globalThis && "live" === (0,
                                s.dU)() && setTimeout(( () => {
                                    var _;
                                    globalThis.Sentry && globalThis.Sentry.captureException(new Error(`FetchUtils  fetch ${e[0].split("?")[0]} get error code ${t.error}`), {
                                        tags: (0,
                                        i.Z)({}, v, {
                                            requestId: null == (_ = o) ? void 0 : _.x_request_id,
                                            cid: m,
                                            platform: "pc"
                                        })
                                    })
                                }
                                ), 0)
                            }
                            return t
                        }
                        )).catch((e => {
                            throw e
                        }
                        )),
                        Promise.resolve(t)) : t
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }
                : _
            }
        })
          , {getCurrencyConfig: w, getCurrencySymbol: k, deflateServerNumber: S, parseServerNumber: E, formatServerNumber: C, formatCurrency: R, formatServerCurrency: P, formatCurrencyNumber: N, formatServerCurrencyNumber: J, compactServerCurrency: M, localizeCompactNumber: x} = (0,
        n.getUtilsByCountry)(m, g)
          , T = e => {
            var t;
            return null != (t = e.follow_up) && t.ctime ? e.ctime : e.submit_time || e.ctime
        }
          , O = "order_conversion" + ("live" !== u ? `_${u}` : "");
        function I() {
            const [e] = (0,
            d.JS)(O, "transifykey_idscs_web");
            let t = [];
            try {
                var _;
                "ID" === m && null != e && e.parameter && (t = null == (_ = JSON.parse(e.parameter)) ? void 0 : _.shopids)
            } catch (a) {}
            return t
        }
        function L(e) {
            const t = I();
            return e && t.includes(e)
        }
        function A(e) {
            const {Component: t, shopId: _} = e
              , o = (0,
            a.Z)(e, p)
              , n = L(_);
            return r().createElement(t, (0,
            i.Z)({
                isShopeeSpecialShop: n,
                shopId: _
            }, o))
        }
    }
    ,
    46937: (e, t, _) => {
        "use strict";
        _.d(t, {
            DU: () => E,
            kG: () => w,
            TE: () => y
        });
        var a = _(87363)
          , i = _.n(a)
          , o = _(12958)
          , r = _(8805)
          , n = _(6714)
          , s = _(28458)
          , l = _.n(s);
        const d = function(e) {
            return a.createElement("svg", (0,
            n.Z)({
                viewBox: "0 0 30 30"
            }, e), a.createElement("defs", null, a.createElement("linearGradient", {
                id: "star__solid",
                x1: "50%",
                x2: "50%",
                y1: "0%",
                y2: "100%"
            }, a.createElement("stop", {
                offset: "0%",
                stopColor: "#FFCA11"
            }), a.createElement("stop", {
                offset: "100%",
                stopColor: "#FFAD27"
            }))), a.createElement("path", {
                fill: "url(#star__solid)",
                fillRule: "evenodd",
                d: "M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
            }))
        }
          , p = function(e) {
            return a.createElement("svg", (0,
            n.Z)({
                viewBox: "0 0 30 30"
            }, e), a.createElement("defs", null, a.createElement("linearGradient", {
                id: "star__hollow",
                x1: "50%",
                x2: "50%",
                y1: "0%",
                y2: "99.0177926%"
            }, a.createElement("stop", {
                offset: "0%",
                stopColor: "#FFD211"
            }), a.createElement("stop", {
                offset: "100%",
                stopColor: "#FFAD27"
            }))), a.createElement("path", {
                fill: "none",
                fillRule: "evenodd",
                stroke: "url(#star__hollow)",
                strokeWidth: "2",
                d: "M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
            }))
        }
          , c = {
            rating: "dMTuWJ",
            icon: "ZWdKv_",
            starsContainer: "zFp3PR",
            title: "wMM2UN",
            stars: "q4MF_i",
            definition: "t6nNTC"
        }
          , m = ({onClick: e, value: t, size: _, classNames: a}) => i().createElement("div", {
            className: l()(a, c.rating),
            style: {
                width: _,
                height: _
            },
            onClick: e
        }, i().createElement(p, {
            className: c.icon
        }), i().createElement(d, {
            className: c.icon,
            style: {
                width: 100 * t + "%"
            }
        }));
        function u(e) {
            return i().createElement(m, (0,
            n.Z)({}, e, {
                value: 1
            }))
        }
        function g(e) {
            return i().createElement(m, (0,
            n.Z)({}, e, {
                value: 0
            }))
        }
        m.defaultProps = {
            size: "1.875rem"
        };
        const h = 5;
        function y({rating: e=5, maxRating: t=h, onRatingChange: _, StarUIHollow: a=g, StarUISolid: n=u, size: s}) {
            const l = t => {
                t !== e && _ && _(t)
            }
              , d = ["rating-stars__star"];
            _ && d.push("rating-stars__star--clickable");
            const p = [];
            for (let i = 1; i <= t; i++)
                p.push(e >= i ? "icon-rating-solid" : "icon-rating");
            return i().createElement("div", {
                className: "rating-stars__container"
            }, p.map(( (t, _) => _ <= e - 1 ? n ? i().createElement(n, {
                key: _,
                size: s,
                classNames: d,
                onClick: l.bind(null, _ + 1)
            }) : i().createElement(o.Z, {
                key: _,
                classNames: d,
                onClick: l.bind(null, _ + 1)
            }) : a ? i().createElement(a, {
                key: _,
                classNames: d,
                onClick: l.bind(null, _ + 1),
                size: s
            }) : i().createElement(r.Z, {
                key: _,
                classNames: d,
                onClick: l.bind(null, _ + 1)
            }))))
        }
        var v = _(15585);
        const {t: f} = v.I18n
          , b = 5;
        function w({title: e, rating: t=5, maxRating: _=b, onRatingChange: a, StarUIHollow: o=g, StarUISolid: r=u, size: n=26, space: s=5}) {
            const l = e => {
                e !== t && a && a(e)
            }
              , d = [];
            a && d.push("rating-stars__star--clickable");
            const p = [];
            for (let i = 1; i <= _; i++)
                p.push(t >= i ? "icon-rating-solid" : "icon-rating");
            return i().createElement("div", {
                className: c.starsContainer
            }, e ? i().createElement("div", {
                className: c.title
            }, i().createElement("span", null, e)) : null, p.map(( (e, _) => {
                const a = _ < t ? r : o;
                return i().createElement("div", {
                    key: _,
                    style: {
                        paddingLeft: `${s}px`
                    }
                }, i().createElement(a, {
                    size: n,
                    classNames: d,
                    onClick: l.bind(null, _ + 1)
                }))
            }
            )), i().createElement("span", {
                className: c.definition,
                style: {
                    color: t >= 4 ? "#eda500" : "rgba(0, 0, 0, 0.54)"
                }
            }, t > 0 ? f(`star_definition_${t}`) : ""))
        }
        const k = function(e) {
            return a.createElement("svg", (0,
            n.Z)({
                width: "22",
                height: "21",
                viewBox: "0 0 22 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e, {
                style: {
                    color: "#ffffff",
                    display: "block",
                    stroke: "currentcolor"
                }
            }), a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11 16.9084L6.17879 19.5663C5.44805 19.9691 4.57443 19.3526 4.70912 18.5291L5.6419 12.8262L1.64766 8.74345C1.0779 8.16107 1.4064 7.17827 2.21184 7.05554L7.68852 6.22104L10.0952 1.1074C10.4555 0.341849 11.5445 0.341848 11.9048 1.1074L14.3115 6.22104L19.7882 7.05554C20.5937 7.17827 20.9222 8.16107 20.3524 8.74345L16.3582 12.8262L17.2909 18.5291C17.4256 19.3526 16.552 19.9691 15.8213 19.5663L11 16.9084Z",
                stroke: "#FFA727"
            }))
        }
          , S = function(e) {
            const t = `${Math.random()}_linear_gradient`;
            return a.createElement("svg", (0,
            n.Z)({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 16.9084L5.17879 19.5663C4.44805 19.9691 3.57443 19.3526 3.70912 18.5291L4.6419 12.8262L0.647663 8.74345C0.077903 8.16107 0.406397 7.17827 1.21184 7.05554L6.68852 6.22104L9.09523 1.1074C9.45553 0.341849 10.5445 0.341848 10.9048 1.1074L13.3115 6.22104L18.7882 7.05554C19.5937 7.17827 19.9222 8.16107 19.3524 8.74345L15.3582 12.8262L16.2909 18.5291C16.4256 19.3526 15.552 19.9691 14.8213 19.5663L10 16.9084Z",
                fill: `url(#${t})`
            }), a.createElement("defs", null, a.createElement("linearGradient", {
                id: t,
                x1: "0",
                y1: "0",
                x2: "0",
                y2: "20",
                gradientUnits: "userSpaceOnUse"
            }, a.createElement("stop", {
                stopColor: "#FFCA11"
            }), a.createElement("stop", {
                offset: "1",
                stopColor: "#FFAD27"
            }))))
        };
        function E({rating: e, className: t, useNew: _}) {
            return i().createElement("div", {
                className: l()("shopee-rating-stars", t)
            }, i().createElement("div", {
                className: "shopee-rating-stars__stars"
            }, [1, 2, 3, 4, 5].map((t => {
                const a = Math.max(0, Math.min(100 * (e - t + 1), 100));
                return i().createElement("div", {
                    className: "shopee-rating-stars__star-wrapper",
                    key: t
                }, i().createElement("div", {
                    className: "shopee-rating-stars__lit",
                    style: {
                        width: `${a}%`
                    }
                }, _ ? i().createElement(S, null) : i().createElement(o.Z, {
                    classNames: ["shopee-rating-stars__primary-star"]
                })), _ ? i().createElement(k, null) : i().createElement(r.Z, {
                    classNames: ["shopee-rating-stars__hollow-star"]
                }))
            }
            ))))
        }
    }
    ,
    7827: (e, t, _) => {
        "use strict";
        _.d(t, {
            h: () => E
        });
        var a = _(87363)
          , i = _.n(a)
          , o = _(18314)
          , r = _(76365)
          , n = _(28458)
          , s = _.n(n)
          , l = _(6714)
          , d = _(96474)
          , p = _(53304)
          , c = _(67700);
        const m = ["className", "cover"];
        class u extends a.PureComponent {
            constructor(...e) {
                super(...e),
                this.state = {
                    pausing: !1,
                    ended: !1
                },
                this.player = null,
                this.handleEnded = () => {
                    this.setState({
                        ended: !0,
                        pausing: !1
                    })
                }
                ,
                this.handlePlay = () => {
                    this.setState({
                        ended: !1,
                        pausing: !1
                    })
                }
                ,
                this.handlePause = () => {
                    this.setState({
                        pausing: !0
                    })
                }
                ,
                this.setVideoDomRef = e => {
                    e && (this.player = e,
                    this.player.addEventListener("ended", this.handleEnded, !1),
                    this.player.addEventListener("play", this.handlePlay, !1),
                    this.player.addEventListener("pause", this.handlePause, !1))
                }
            }
            UNSAFE_componentWillReceiveProps(e) {
                this.player && (!this.props.autoPlay && e.autoPlay ? this.player.play() : this.props.autoPlay && !e.autoPlay && this.player.pause())
            }
            render() {
                const e = this.props
                  , {className: t, cover: _} = e
                  , a = (0,
                d.Z)(e, m);
                return i().createElement("div", {
                    className: "YknRSx"
                }, i().createElement("video", (0,
                l.Z)({}, a, {
                    poster: _,
                    className: s()("o5ubXd", t),
                    ref: this.setVideoDomRef,
                    controlsList: "nodownload"
                })), this.state.pausing ? i().createElement(p.Z, {
                    className: "BdHLAq"
                }) : this.state.ended && i().createElement(c.Z, {
                    className: "IxMgmu"
                }))
            }
        }
        var g = _(78251)
          , h = _(65282);
        function y({url: e, needThumb: t, className: _, isVideoCover: a}) {
            return i().createElement("div", {
                className: s()("shopee-rating-media-list-image__wrapper", _)
            }, i().createElement("div", {
                className: "shopee-rating-media-list-image__place-holder"
            }, i().createElement(g.Z, null)), i().createElement("div", {
                className: "shopee-rating-media-list-image__content",
                style: e && e.length > 0 ? {
                    backgroundImage: a ? `url("${e}")` : `url("${(0,
                    h.j)(e, t)}")`
                } : {}
            }, i().createElement("div", {
                className: "shopee-rating-media-list-image__content--blur"
            }, " ")))
        }
        const v = function(e) {
            return i().createElement("svg", (0,
            l.Z)({
                width: "23",
                height: "18",
                viewBox: "0 0 23 18",
                fill: "none"
            }, e), i().createElement("g", {
                filter: "url(#filter0_d)"
            }, i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z",
                fill: "white"
            })), i().createElement("defs", null, i().createElement("filter", {
                id: "filter0_d",
                x: "0",
                y: "0",
                width: "22.1667",
                height: "18",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, i().createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), i().createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), i().createElement("feOffset", null), i().createElement("feGaussianBlur", {
                stdDeviation: "2"
            }), i().createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
            }), i().createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow"
            }), i().createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow",
                result: "shape"
            }))))
        };
        var f = _(76168)
          , b = _(69592);
        function w({direction: e, showArrowOnHover: t, isShown: _, handleClick: a, showArrowHint: o, isVisible: r, padding: n, IconArrow: d, style: p}) {
            const c = t && o && !_;
            return n = n || "0px",
            i().createElement("div", {
                className: s()("rating-media-list-carousel-arrow rating-media-list-carousel-arrow--" + (e < 0 ? "prev" : "next"), c && "rating-media-list-carousel-arrow--hint", !r && "rating-media-list-carousel-arrow--hidden"),
                role: "button",
                tabIndex: 0,
                style: (0,
                l.Z)({
                    opacity: !t || _ || c ? "1" : "0",
                    visibility: r ? "visible" : "hidden",
                    transform: `translateX(calc(${e < 0 ? "-50% + " + n : "50% - " + n}))`
                }, p),
                onClick: a
            }, d ? i().createElement(d, null) : e < 0 ? i().createElement(f.Z, null) : i().createElement(b.Z, null))
        }
        function k({transitionTime: e=500, showArrowOnHover: t=!1, padding: _=(0,
        r.Z)(10), keepPreviousItemOnSlide: o=!0, showArrowHint: n=!1, isFluid: l=!1, isOverrideSliding: d=!1, slidesByOne: p=!1, focusIndex: c, items: m, numItemsPerRow: u, distributeCardWidthWhenFewerItems: g, itemPadding: h, className: y, IconArrowLeft: v, IconArrowRight: f, arrowStyle: b, onSlide: k}) {
            const [S,E] = (0,
            a.useState)(!1)
              , [C,R] = (0,
            a.useState)(!1)
              , [P,N] = (0,
            a.useState)(0)
              , [J,M] = (0,
            a.useState)(null)
              , [x,T] = (0,
            a.useState)(0)
              , [O,I] = (0,
            a.useState)(0)
              , L = (0,
            a.useRef)(null)
              , A = (0,
            a.useRef)(null)
              , z = (0,
            a.useRef)()
              , q = m.length
              , D = q > u ? (g && q < u ? 100 / q : 100 / u) * q : 100
              , B = x ? `${x}px` : void 0
              , F = t => {
                C && !d || (z.current && window.clearTimeout(z.current),
                R(!0),
                "function" == typeof k && k(t),
                d && N(t),
                z.current = window.setTimeout(( () => {
                    (e => {
                        R(!1),
                        N(e),
                        z.current && window.clearTimeout(z.current)
                    }
                    )(t)
                }
                ), e))
            }
              , W = (0,
            a.useCallback)((e => {
                if (!L.current || void 0 === e)
                    return;
                if (N(e),
                l && A.current) {
                    const {left: e} = A.current.getBoundingClientRect()
                      , t = L.current.getBoundingClientRect();
                    I(( () => -(e - t.left)))
                } else
                    L.current.firstElementChild && I(-e * L.current.firstElementChild.getBoundingClientRect().width);
                if (!J)
                    return;
                const t = J.getBoundingClientRect();
                T(t.width)
            }
            ), [l, J]);
            (0,
            a.useEffect)(( () => {
                if (!J)
                    return;
                W(c);
                const e = new ResizeObserver((e => {
                    for (const t of e) {
                        if (t.target.getElementsByTagName("video").length)
                            return;
                        W(c)
                    }
                }
                ));
                return e.observe(J),
                () => {
                    e.unobserve(J)
                }
            }
            ), [J, c, W]);
            const Z = {
                width: l ? void 0 : `${D}%`,
                marginTop: 0,
                transform: `translateX(${O}px)`,
                transition: `${e}ms`
            };
            return i().createElement("div", {
                className: s()("rating-media-list-image-carousel", y),
                onMouseEnter: () => {
                    E(!0)
                }
                ,
                onMouseLeave: () => {
                    E(!1)
                }
                ,
                style: l ? {
                    width: B,
                    transition: `${e}ms`
                } : {}
            }, i().createElement("div", {
                className: "rating-media-list-image-carousel__item-list-wrapper"
            }, i().createElement("ul", {
                className: "rating-media-list-image-carousel__item-list",
                style: Z,
                ref: L
            }, ( () => {
                const e = g && m.length < u ? 100 / m.length : 100 / u;
                return m.map(( (t, a) => i().createElement("li", {
                    key: a,
                    className: s()("rating-media-list-image-carousel__item", l && "rating-media-list-image-carousel__item--fluid"),
                    style: {
                        padding: `0 ${_}`,
                        width: l ? void 0 : `${e}%`
                    },
                    ref: e => {
                        a === c && e && (M(e),
                        A.current = e)
                    }
                }, t)))
            }
            )())), i().createElement(w, {
                direction: -1,
                showArrowOnHover: t,
                isVisible: q > u && P > 0,
                isShown: S,
                handleClick: () => {
                    let e = 0;
                    o && (e = 1);
                    const t = p ? Math.max(P - 1, 0) : Math.max(P - Math.ceil(u) + e, 0);
                    F(t)
                }
                ,
                showArrowHint: n,
                padding: h,
                IconArrow: v,
                style: b
            }), i().createElement(w, {
                direction: 1,
                showArrowOnHover: t,
                isVisible: q > u && P + u < q,
                isShown: S,
                handleClick: () => {
                    const e = m.length - Math.floor(u);
                    let t = 0;
                    o && (t = 1);
                    const _ = p ? Math.min(P + 1, e) : Math.min(P + Math.ceil(u) - t, e);
                    F(_)
                }
                ,
                showArrowHint: n,
                padding: h,
                IconArrow: f,
                style: b
            }))
        }
        var S = _(92683);
        function E({urlList: e, isFollowUp: t=!1}) {
            const _ = (0,
            S.bp)()
              , [n,l] = (0,
            a.useState)(-1)
              , [d,p] = (0,
            a.useState)(0)
              , [c,m] = (0,
            a.useState)(!1);
            (0,
            a.useEffect)(( () => {
                if (n >= 0) {
                    var a;
                    const i = {
                        media_location: n + 1,
                        image_id: "string" == typeof e[n] ? e[n] : "",
                        video_id: "string" == typeof e[n] ? "" : null == (a = e[n]) ? void 0 : a.id,
                        is_video: "string" != typeof e[n]
                    };
                    _(t ? S.pf.FollowUpMediasClick : S.pf.ClickImage, i)
                }
            }
            ), [n, t]),
            (0,
            a.useEffect)(( () => {
                _(t ? S.pf.FollowUpImagesImpression : S.pf.CardImageImpression)
            }
            ), [t, _]);
            const g = (0,
            a.useMemo)(( () => e.map(( (e, t) => "string" == typeof e ? i().createElement(o.Z, {
                alt: "rating",
                key: t,
                className: "rating-media-list__zoomed-image-item",
                fileId: e
            }) : i().createElement(u, {
                src: e.url,
                key: t,
                className: "rating-media-list__zoomed-video-item",
                controls: !0,
                muted: !0,
                autoPlay: n === t
            })))), [e, n]);
            return i().createElement("div", {
                className: "rating-media-list"
            }, i().createElement("div", {
                className: "rating-media-list__container"
            }, e.map(( (e, t) => i().createElement("div", {
                key: t,
                className: s()("rating-media-list__image-wrapper", c && n === t ? "rating-media-list__image-wrapper--active" : "rating-media-list__image-wrapper--inactive"),
                onClick: () => (e => c && n === e ? (m(!1),
                void p(0)) : c ? (l(e),
                void p(500)) : (m(!0),
                l(e),
                void p(0)))(t)
            }, "string" == typeof e ? i().createElement("div", {
                className: "rating-media-list__image-wrapper--container"
            }, i().createElement(o.Z, {
                fileId: e,
                width: 72,
                height: 72,
                className: "rating-media-list__image-wrapper--image",
                placeholderStyle: {
                    width: (0,
                    r.V)(30),
                    height: (0,
                    r.V)(30)
                },
                errorFallbackStyle: {
                    width: (0,
                    r.V)(30),
                    height: (0,
                    r.V)(30)
                }
            })) : i().createElement(i().Fragment, null, i().createElement(y, {
                url: e.cover,
                needThumb: !1,
                isVideoCover: !0
            }), i().createElement("div", {
                className: "rating-media-list__video-cover"
            }, i().createElement(v, null), i().createElement("span", null, ( (e=0, t="m:ss") => {
                const _ = Math.ceil(e / 1e3)
                  , a = Math.floor(_ / 60)
                  , i = _ % 60
                  , o = {
                    mm: `0${a}`.substr(-2),
                    m: a,
                    ss: `0${i}`.substr(-2),
                    s: i
                };
                return Object.keys(o).reduce(( (e, t) => e.replace(t, `${o[t]}`)), t)
            }
            )(e.duration || 0)))))))), i().createElement("div", {
                className: s()("rating-media-list__zoomed-image", c && "rating-media-list__zoomed-image--active")
            }, i().createElement(k, {
                focusIndex: n,
                items: g,
                showArrowOnHover: !0,
                numItemsPerRow: 1,
                showArrowHint: !0,
                keepPreviousItemOnSlide: !1,
                isFluid: !0,
                isOverrideSliding: !0,
                transitionTime: d,
                onSlide: t => {
                    t >= 0 && t < e.length && (l(t),
                    p(500))
                }
            })))
        }
    }
    ,
    42313: (e, t, _) => {
        "use strict";
        _.d(t, {
            D: () => d
        });
        var a = _(87363)
          , i = _.n(a)
          , o = _(28458)
          , r = _.n(o)
          , n = _(15585);
        var s = _(92683);
        const {t: l} = n.I18n
          , d = ({response: e, titleText: t, className: _, isHidden: o, isFollowUp: n, isShopeeSpecialShop: d}) => {
            const p = (0,
            s.bp)();
            return (0,
            a.useEffect)(( () => {
                p(n ? s.pf.FollowUpSellerResponseImpression : s.pf.SellerResponseImpression)
            }
            ), [n, p]),
            i().createElement("div", {
                className: r()("TQTPT9", _)
            }, i().createElement("div", {
                className: "xO9geG"
            }, t || l("label_seller_response")), i().createElement("div", {
                className: "qiTixQ"
            }, o ? `***${l("seller_reply_hidden" + (d ? "_idscs" : ""))}***` : e))
        }
    }
    ,
    55864: (e, t, _) => {
        "use strict";
        _.d(t, {
            DL: () => f,
            E0: () => g,
            Ip: () => b,
            NA: () => S,
            dJ: () => w,
            dY: () => E,
            ep: () => y,
            ir: () => k,
            oy: () => v,
            yk: () => h
        });
        var a = _(87363)
          , i = _.n(a)
          , o = _(81523)
          , r = _(26393)
          , n = _(36574)
          , s = _(64468)
          , l = _(15585)
          , d = _(42914)
          , p = _(57662)
          , c = _(98937)
          , m = _(7827);
        const {t: u} = l.I18n
          , g = ({isAnonymous: e, authorPic: t, shopId: _}) => {
            const a = i().createElement(r.Z, {
                imgSrc: (0,
                p.Jn)(t, !0)
            });
            if (e)
                return i().createElement("div", {
                    className: "shopee-product-rating__avatar"
                }, a);
            {
                const e = d.shop.getUrl({
                    shopId: _
                });
                return i().createElement(o.Link, {
                    to: e,
                    className: "shopee-product-rating__avatar"
                }, a)
            }
        }
          , h = ({isAnonymous: e, authorName: t, shopId: _}) => {
            const a = null == t ? u(c.a.text_shopee_user) : t;
            if (e)
                return i().createElement("div", {
                    className: "shopee-product-rating__author-name"
                }, a);
            {
                const e = d.shop.getUrl({
                    shopId: _
                });
                return i().createElement(o.Link, {
                    className: "shopee-product-rating__author-name",
                    to: e
                }, a)
            }
        }
          , y = ({star: e}) => i().createElement("div", {
            className: "shopee-product-rating__rating"
        }, [1, 2, 3, 4, 5].map(( (t, _) => _ < e ? i().createElement(n.Z, {
            key: _,
            classNames: ["icon-rating-solid--active"]
        }) : i().createElement(s.Z, {
            key: _
        }))))
          , v = ({content: e, isHidden: t}) => t ? null : e ? i().createElement("div", {
            className: "shopee-product-rating__content"
        }, e) : null
          , f = ({images: e, isFollowUp: t=!1}) => i().createElement("div", {
            className: "shopee-product-rating__image-list-wrapper"
        }, i().createElement(m.h, {
            urlList: e,
            isFollowUp: t
        }))
          , b = ({modelName: e, commentTime: t, region: _, isUserRating: a}) => {
            const o = _ ? ` ${_} | ` : "";
            return i().createElement("div", {
                className: "shopee-product-rating__time"
            }, o ? i().createElement("svg", {
                width: "8",
                height: "10",
                viewBox: "0 0 8 10",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, i().createElement("path", {
                d: "M4.36872 8.81893C4.28492 8.93416 4.15084 9 4 9C3.84916 9 3.71508 8.93416 3.63128 8.81893C2.82682 7.76543 1 5.23045 1 3.9465C1 2.31687 2.34078 1 4 1C5.65922 1 7 2.31687 7 3.9465C7 5.21399 5.17318 7.76543 4.36872 8.81893Z",
                stroke: "black",
                strokeOpacity: "0.54",
                strokeWidth: "0.8"
            }), i().createElement("path", {
                d: "M5 4C5 3.44186 4.55814 3 4 3C3.44186 3 3 3.44186 3 4C3 4.55814 3.44186 5 4 5C4.55814 5 5 4.55814 5 4Z",
                fill: "black",
                fillOpacity: "0.26"
            })) : null, e && !a ? `${o}${t} | ${u(c.a.label_variation)}: ${e}` : `${o}${t}`)
        }
          , w = () => i().createElement("svg", {
            width: "14px",
            height: "13px",
            viewBox: "0 0 14 13",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, i().createElement("defs", null), i().createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fillRule: "evenodd"
        }, i().createElement("g", {
            id: "Product-Ratings-Working",
            transform: "translate(-245.000000, -855.000000)",
            fillRule: "nonzero"
        }, i().createElement("g", {
            transform: "translate(155.000000, 92.000000)"
        }, i().createElement("g", {
            transform: "translate(40.000000, 184.000000)"
        }, i().createElement("g", {
            transform: "translate(0.000000, 326.000000)"
        }, i().createElement("g", {
            transform: "translate(50.000000, 253.000000)"
        }, i().createElement("g", null, i().createElement("path", {
            d: "M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"
        })))))))))
          , k = () => i().createElement("svg", {
            width: "4px",
            height: "16px",
            viewBox: "0 0 4 16",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, i().createElement("defs", null), i().createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fillRule: "evenodd"
        }, i().createElement("g", {
            transform: "translate(-1301.000000, -550.000000)",
            fill: "#CCCCCC"
        }, i().createElement("g", {
            transform: "translate(155.000000, 92.000000)"
        }, i().createElement("g", {
            transform: "translate(40.000000, 184.000000)"
        }, i().createElement("g", {
            transform: "translate(0.000000, 161.000000)"
        }, i().createElement("g", null, i().createElement("g", {
            transform: "translate(50.000000, 2.000000)"
        }, i().createElement("path", {
            d: "M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111"
        })))))))))
          , S = () => i().createElement("svg", {
            width: "16",
            height: "11",
            viewBox: "0 0 16 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, i().createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.24241 8.8C6.4909 8.8 5.04847 7.26 5.04847 5.39C5.04847 3.52 6.4909 1.98 8.24241 1.98C9.99393 1.98 11.4364 3.52 11.4364 5.39C11.4364 7.26 9.99393 8.8 8.24241 8.8ZM8.24241 3.08C7.00605 3.08 6.07878 4.18 6.07878 5.39C6.07878 6.6 7.00605 7.7 8.24241 7.7C9.47878 7.7 10.406 6.6 10.406 5.39C10.406 4.18 9.47878 3.08 8.24241 3.08ZM8.24241 10.78C5.1515 10.78 2.26665 8.91 0.61817 5.72L0.412109 5.39L0.51514 5.06C2.26665 1.87 5.1515 0 8.24241 0C11.3333 0 14.2182 1.87 15.8667 5.06L15.9697 5.39L15.8667 5.72C14.2182 8.8 11.3333 10.78 8.24241 10.78Z",
            fill: "black",
            fillOpacity: "0.26"
        }))
          , E = () => i().createElement("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, i().createElement("path", {
            d: "M12.6538 13.3316V10.3335H13.6353V13.4992C13.6353 14.1384 13.1171 14.6668 12.4779 14.6668H2.49076C1.85155 14.6668 1.33337 14.1384 1.33337 13.4992V2.50112C1.33337 1.86193 1.85157 1.3335 2.49076 1.3335H9.27574V2.33541H2.64814C2.46404 2.33541 2.31481 2.48465 2.31481 2.66875V13.3316C2.31481 13.5157 2.46404 13.6649 2.64814 13.6649H12.3205C12.5046 13.6649 12.6538 13.5157 12.6538 13.3316Z",
            fill: "#EE4D2D"
        }), i().createElement("path", {
            d: "M13.7042 2.47157C13.4438 2.21122 13.0217 2.21122 12.7614 2.47157L5.30439 9.92856C5.24787 9.98508 5.20197 10.0513 5.16889 10.1241L4.40823 11.7976C4.28077 12.0779 4.56922 12.3664 4.84961 12.2389L6.52307 11.4783C6.59585 11.4452 6.66208 11.3993 6.71861 11.3428L14.1756 3.88578C14.4359 3.62543 14.4359 3.20332 14.1756 2.94297L13.7042 2.47157Z",
            fill: "#EE4D2D"
        }))
    }
    ,
    92683: (e, t, _) => {
        "use strict";
        _.d(t, {
            ES: () => l,
            QV: () => r,
            bp: () => s,
            kT: () => n,
            pf: () => i
        });
        var a = _(39081);
        let i = function(e) {
            return e.CardImpression = "CardImpression_34310_5113_5108",
            e.CardImageImpression = "CardImageImpression_5113",
            e.LikeClick = "LikeClick_5110",
            e.ReportClick = "ReportClick_5111",
            e.ClickUserNameOrAvatar = "ClickUserNameOrAvatar_5112",
            e.ClickImage = "ClickImage_5114",
            e.ClickReply = "ClickReply_5115",
            e.ImpressionVariationPanel = "ImpressionVariationPanel_21022",
            e.ClickVariationApplyButton = "ClickVariationApplyButton_21023",
            e.ClickVariationClose = "ClickVariationCloseButton_21024",
            e.StarFilterPanelImpression = "StarFilterPanelImpression_29799",
            e.StarFilterOptionClick = "StarFilterOptionClick_29800",
            e.FilterFoldAndUnfoldClick = "FilterFoldAndUnfoldClick_29801",
            e.ClickFuncFilter = "ClickFuncFilter_29794",
            e.ClickKeywordsFilter = "ClickKeywordsFilter_29796",
            e.ClickSizeFilter = "ClickSizeFilter_29798",
            e.FunctionFilterImpression = "FunctionFilterImpression_29793",
            e.KeywordFilterImpression = "KeywordFilterImpression_29795",
            e.SizeFilterImpression = "SizeFilterImpression_29797",
            e.SeeMoreImpression = "SeeMoreImpression_32044",
            e.SeeMoreClick = "SeeMoreClick_32045",
            e.SellerResponseImpression = "SellerResponseImpression_32046",
            e.ClickSellerResponse = "ClickSellerResponse_32047",
            e.DimensionImpression = "DimensionImpression_32761",
            e.RatingSummaryImpression = "RatingSummaryImpression_32762",
            e.SizeInfoIconClick = "SizeInfoIconClick_32763",
            e.SizeInfoPanelImpression = "SizeInfoPanelImpression_32764",
            e.SizeInfoPanelClick = "SizeInfoPanelClick_32765",
            e.SizeInfoPanelConfirm = "SizeInfoPanelConfirm_32766",
            e.SizeInfoPanelClear = "SizeInfoPanelClear_32767",
            e.FollowUpImpression = "FollowUpImpression_43883",
            e.FollowUpImagesImpression = "FollowUpImagesImpression_43884",
            e.FollowUpMediasClick = "FollowUpMediasClick_43885",
            e.FollowUpSeeMoreImpression = "FollowUpSeeMoreImpression_43886",
            e.FollowUpSeeMoreClick = "FollowUpSeeMoreImpression_43887",
            e.FollowUpSellerResponseImpression = "FollowUpSeeMoreImpression_43888",
            e.FollowUpSellerResponseClick = "FollowUpSeeMoreImpression_43889",
            e.ImpressionOfShopReviewsFilterButton = "ImpressionOfShopReviewsFilterButton",
            e.ClickOfShopReviewsFilterButton = "ClickOfShopReviewsFilterButton",
            e.ImpressionOfShopReviewsKeywordFilter = "ImpressionOfShopReviewsKeywordFilter",
            e.ClickOfShopReviewsKeywordFilter = "ClickOfShopReviewsKeywordFilter",
            e.ClickOfShopReviewsFilterExpandButton = "ClickOfShopReviewsFilterExpandButton",
            e.ImpressionOfShopReviewsRatingDetailsUserRatings = "ImpressionOfShopReviewsRatingDetailsUserRatings",
            e.ClickOfShopReviewsRatingImage = "ClickOfShopReviewsRatingImage",
            e.ClickOfShopReviewsRatingLike = "ClickOfShopReviewsRatingLike",
            e.ImpressionOfShopReviewsRatingUser = "ImpressionOfShopReviewsRatingUser",
            e.ClickOfShopReviewsRatingUser = "ClickOfShopReviewsRatingUser",
            e.ImpressionOfShopReviewsSellerResponseButton = "ImpressionOfShopReviewsSellerResponseButton",
            e.ClickOfShopReviewsSellerResponseButton = "ClickOfShopReviewsSellerResponseButton",
            e.ImpressionOfShopReviewsSeeMoreText = "ImpressionOfShopReviewsSeeMoreText",
            e.ClickOfShopReviewsSeeMoreText = "ClickOfShopReviewsSeeMoreText",
            e.ImpressionOfShopReviewsItemBarItemBar = "ImpressionOfShopReviewsItemBarItemBar",
            e.ClickOfShopReviewsItemBarItemBar = "ClickOfShopReviewsItemBarItemBar",
            e.ClickOfShopReviewsItemBarAddToCart = "ClickOfShopReviewsItemBarAddToCart",
            e.ImpressionOfProductRatingProductRating = "ImpressionOfProductRatingProductRating",
            e.ClickOfProductRatingProductRating = "ClickOfProductRatingProductRating",
            e.ImpressionOfProductRatingShopReviews = "ImpressionOfProductRatingShopReviews",
            e.ClickOfProductRatingShopReviews = "ClickOfProductRatingShopReviews",
            e
        }({});
        const o = (0,
        a.rN)()
          , {TrackingScope: r, TrackingScopeData: n, useTrackEvent: s, useTrackRule: l, useTrackingPatch: d, useGetTrackDataset: p, TrackingImpressionView: c} = o
    }
    ,
    87957: (e, t, _) => {
        "use strict";
        _.d(t, {
            ZP: () => Y_,
            S7: () => Q_,
            hR: () => $_,
            mW: () => j_
        });
        var a = _(87363)
          , i = _.n(a)
          , o = _(6714)
          , r = _(98937)
          , n = _(15585)
          , s = _(79481)
          , l = _(24906)
          , d = _(14466)
          , p = _.n(d)
          , c = _(21624)
          , m = _(62827)
          , u = _(70893)
          , g = _(72148);
        const h = {
            sprar_7240_algo_generated_review_writing_template: {
                default: "",
                exp_groups: ["shuffle_hint", "clear_hint"]
            }
        };
        var y = _(20431)
          , v = _(10060)
          , f = _(1500)
          , b = _(56324)
          , w = _(5452)
          , k = _(63410)
          , S = _(3332)
          , E = _(23546)
          , C = _(80207)
          , R = _(80037)
          , P = _(63045)
          , N = _(13839)
          , J = _(54453);
        const {t: M} = n.I18n;
        function x({onSubmit: e, onCancel: t, title: _, message: a, showCancel: o=!0, cancelText: n, submitText: s}) {
            return i().createElement("div", {
                className: "HZhOa2"
            }, i().createElement("div", {
                className: "YUZF1I"
            }, i().createElement("div", {
                className: "DFuIt4"
            }, _ || null), i().createElement("div", {
                className: "qNrbT4"
            }, a), i().createElement("div", {
                className: "BqrkTr"
            }, i().createElement("div", {
                style: {
                    display: o ? "block" : "none"
                }
            }, i().createElement(J.Lw, {
                onClick: t,
                label: n || M(r.a.pr_order_purchase_label_cancel),
                targetType: "CancelButton"
            })), i().createElement(N.nQ, {
                onClick: e,
                targetType: "SubmitButton"
            }, s || M(r.a.pr_order_purchase_label_submit)))))
        }
        const {t: T} = n.I18n;
        function O({title: e, content: t, onSubmit: _, onCancel: a}) {
            return i().createElement("div", {
                className: "mngPGv"
            }, i().createElement("div", {
                className: "xeRgG7"
            }, i().createElement("div", {
                className: "lpuQp7"
            }, e || T(r.a.pr_alert_submit_rating)), i().createElement("div", {
                className: "HLggVF"
            }, t || T(r.a.pr_alert_submit_rating_description)), i().createElement("div", {
                className: "WncHwZ"
            }, i().createElement(J.Lw, {
                onClick: a,
                label: T(r.a.pr_order_purchase_label_cancel),
                targetType: "CancelButton"
            }), i().createElement(N.nQ, {
                onClick: _,
                targetType: "SubmitButton"
            }, T(r.a.pr_order_purchase_label_submit)))))
        }
        const {t: I} = n.I18n;
        function L({goRating: e, warningState: t, isShopeeSpecialShop: _}) {
            return i().createElement("div", {
                className: "RwARlw"
            }, i().createElement("div", {
                className: "hcEx_I"
            }, i().createElement("div", {
                className: "Oolvcb"
            }, I(r.a.label_please_enter_rating, "seller_service" === t ? {
                label: I(_ ? r.a.low_rating_detail_seller_service_idscs : r.a.low_rating_detail_seller_service)
            } : "delivery_service" === t ? {
                label: I(r.a.low_rating_detail_logistic_service)
            } : {
                label: `${I(_ ? r.a.low_rating_detail_seller_service_idscs : r.a.low_rating_detail_seller_service)} & ${I(r.a.low_rating_detail_logistic_service)}`
            })), i().createElement("div", {
                className: "a4D5as"
            }, i().createElement(N.nQ, {
                onClick: e,
                targetType: "SubmitButton"
            }, I(r.a.label_go_rating)))))
        }
        var A = _(26393)
          , z = _(46937)
          , q = _(69932)
          , D = _(22151)
          , B = _(57662)
          , F = _(59984)
          , W = _(42313)
          , Z = _(7827)
          , U = _(28458)
          , V = _.n(U);
        const {t: H} = n.I18n;
        function X({response: e, titleText: t, className: _, isHidden: a, isShopeeSpecialShop: o}) {
            return i().createElement("div", {
                className: V()("qXgJA1", _)
            }, i().createElement("div", {
                className: "uKl6aA"
            }, t || H("label_seller_response")), i().createElement("div", {
                className: "cSirg9"
            }, a ? `***${H("seller_reply_hidden" + (o ? "_idscs" : ""))}***` : e))
        }
        const G = e => {
            var t, _, a;
            const {followUp: o, isShopeeSpecialShop: s} = e
              , l = [...o.videos || [], ...(null == (t = o.images) ? void 0 : t.map((e => e.image_id))) || []]
              , d = null == o || null == (_ = o.follow_up_reply) ? void 0 : _.comment;
            return i().createElement("div", null, i().createElement("div", {
                className: "shopee-product-rating__follow_up_content_title"
            }, n.I18n.t(r.a.updated_review)), i().createElement(q.t, {
                isHidden: !1,
                comment: o.comment || "",
                templateTags: [],
                hasTemplateTag: !1
            }), l.length ? i().createElement("div", {
                className: "shopee-product-rating__medias"
            }, i().createElement(Z.h, {
                urlList: l
            })) : null, d ? i().createElement(X, {
                titleText: n.I18n.t(r.a.pr_order_purchase_label_seller_response),
                response: d,
                isHidden: null == (a = o.follow_up_reply) ? void 0 : a.is_hidden,
                isShopeeSpecialShop: s
            }) : null)
        }
        ;
        var j = _(23657);
        const Q = function(e) {
            return i().createElement("svg", (0,
            o.Z)({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
            }, e), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",
                stroke: "#66CC00"
            }), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.6208 6.40579L7.64139 10.4646C7.37512 10.7308 6.92183 10.7093 6.62894 10.4164C6.33605 10.1235 6.31446 9.67018 6.58073 9.40391L10.5601 5.34513C10.8264 5.07887 11.2797 5.10045 11.5725 5.39335C11.8654 5.68624 11.887 6.13953 11.6208 6.40579Z",
                fill: "#66CC00"
            }), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.80292 7.99725L6.61371 10.5292C6.87998 10.7955 7.33327 10.7739 7.62616 10.481C7.91905 10.1881 7.94064 9.73484 7.67437 9.46858L4.86358 6.93659C4.59731 6.67033 4.14402 6.69191 3.85113 6.98481C3.55824 7.2777 3.53665 7.73099 3.80292 7.99725Z",
                fill: "#66CC00"
            }))
        }
          , $ = "uyPdAV"
          , {t: Y} = n.I18n;
        class K extends a.Component {
            constructor(e) {
                var t;
                super(e),
                t = this,
                this._nodeReportMenuButton = null,
                this.canClick = !0,
                this.clickOutsideToCloseReportMenu = e => {
                    this._nodeReportMenuButton && !this._nodeReportMenuButton.contains(e.target) && this.setState({
                        toggle: !1
                    })
                }
                ,
                this.handleSetAnonymous = async function() {
                    if (t.setState({
                        toggle: !1
                    }),
                    !t.canClick)
                        return;
                    t.canClick = !1;
                    const e = await l.Cm.postRatingAnonymous({
                        cmtid: t.props.cmtid,
                        shopid: t.props.shopid,
                        anonymous: !t.props.anonymous
                    });
                    if (t.canClick = !0,
                    e.error) {
                        const e = Y(r.a.oops_content).replace(/\\n/g, "\n");
                        window.alert(e)
                    } else
                        t.props.updateRatingAfterSetAnonymous(),
                        t.setState({
                            shownTips: !0
                        }),
                        t.timer = window.setTimeout(( () => {
                            t.setState({
                                shownTips: !1
                            })
                        }
                        ), 2e3)
                }
                ,
                this.openAnonymousMenu = () => {
                    this.setState({
                        toggle: !0
                    })
                }
                ,
                this.state = {
                    toggle: !1,
                    shownTips: !1
                }
            }
            componentDidMount() {
                window.document.addEventListener("click", this.clickOutsideToCloseReportMenu)
            }
            componentWillUnmount() {
                window.clearTimeout(this.timer),
                window.document.removeEventListener("click", this.clickOutsideToCloseReportMenu)
            }
            render() {
                const {anonymous: e} = this.props;
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: "zofI9b",
                    ref: e => {
                        this._nodeReportMenuButton = e
                    }
                }, a.createElement(j.Z, {
                    body: a.createElement("div", {
                        className: "uAkO_r",
                        onClick: this.handleSetAnonymous
                    }, Y("old_rating_anonymous_toggle_" + (e ? "off" : "on"))),
                    header: a.createElement("div", {
                        className: "Tl7Sbo",
                        onClick: this.openAnonymousMenu
                    }, a.createElement(ee, null)),
                    open: this.state.toggle
                })), this.state.shownTips ? a.createElement("div", {
                    className: "WdyDU8"
                }, a.createElement(Q, null), a.createElement("span", {
                    className: "yg6UFn"
                }, Y(`old_rating_anonymous_toggle_${e ? "on" : "off"}_toast`))) : null)
            }
        }
        const ee = () => a.createElement("svg", {
            width: "4px",
            height: "16px",
            viewBox: "0 0 4 16",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, a.createElement("defs", null), a.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fillRule: "evenodd"
        }, a.createElement("g", {
            transform: "translate(-1301.000000, -550.000000)",
            fill: "#CCCCCC"
        }, a.createElement("g", {
            transform: "translate(155.000000, 92.000000)"
        }, a.createElement("g", {
            transform: "translate(40.000000, 184.000000)"
        }, a.createElement("g", {
            transform: "translate(0.000000, 161.000000)"
        }, a.createElement("g", null, a.createElement("g", {
            transform: "translate(50.000000, 2.000000)"
        }, a.createElement("path", {
            d: "M1058,122.2 C1056.895,122.2 1056,123.096 1056,124.2 C1056,125.306 1056.895,126.202 1058,126.202 C1059.104,126.202 1060,125.306 1060,124.2 C1060,123.096 1059.104,122.2 1058,122.2 M1058,116.6 C1056.895,116.6 1056,117.496 1056,118.6 C1056,119.706 1056.895,120.602 1058,120.602 C1059.104,120.602 1060,119.706 1060,118.6 C1060,117.496 1059.104,116.6 1058,116.6 M1058,111 C1056.895,111 1056,111.896 1056,113 C1056,114.106 1056.895,115.002 1058,115.002 C1059.104,115.002 1060,114.106 1060,113 C1060,111.896 1059.104,111 1058,111"
        })))))))));
        function te({tags: e}) {
            return a.createElement("div", {
                className: "nryILS"
            }, e.map((e => a.createElement("span", {
                key: e.tag_id,
                className: "Cx1rBH"
            }, e.tag_description))))
        }
        var _e = _(18314)
          , ae = _(76365)
          , ie = _(53225);
        const {t: oe} = n.I18n;
        function re({item: e, className: t, bottomNode: _}) {
            if (!e)
                return null;
            const a = e.model_name || e.model_names && e.model_names.join(" , ");
            return i().createElement("div", {
                className: V()("I83LOI", t),
                onClick: () => {
                    var t, _, a;
                    window.open((t = Number(e.shopid),
                    _ = Number(e.itemid),
                    (a = e.name) ? ie.Z.getUrl({
                        seoName: a,
                        shopId: t,
                        itemId: _
                    }) : ie.O.getUrl({
                        shopId: t,
                        itemId: _
                    })))
                }
            }, i().createElement("div", {
                className: "W0XhTD"
            }, i().createElement(_e.Z, {
                fileId: e.image,
                width: 56,
                height: 56,
                className: "F45KP4",
                placeholderStyle: {
                    width: (0,
                    ae.V)(30),
                    height: (0,
                    ae.V)(30)
                },
                errorFallbackStyle: {
                    width: (0,
                    ae.V)(30),
                    height: (0,
                    ae.V)(30)
                }
            })), i().createElement("div", {
                className: "suoW0p"
            }, i().createElement("div", {
                className: "ebS_Lb"
            }, e.name), a ? i().createElement("div", {
                className: "gs2KUm"
            }, `${oe(r.a.pr_order_purchase_label_variation)}: ${a}`) : null, _ || null))
        }
        var ne = _(65559)
          , se = _.n(ne)
          , le = _(60124);
        const de = self.__LOCALE__ || "SG"
          , pe = self.__ENV__ || "test"
          , ce = ne.mall
          , me = ne.env[pe] + ce[de]
          , ue = e => `${e[0]}*****${e[e.length - 1]}`
          , ge = e => {
            const t = {};
            return e.forEach((e => {
                const _ = e.itemid;
                if (t[_]) {
                    const a = `${t[_].model_name || ""} , ${e.model_name || ""}`;
                    t[_].model_name = a
                } else
                    t[_] = (0,
                    o.Z)({}, e)
            }
            )),
            Object.keys(t).map((e => t[e]))
        }
        ;
        var he = function(e) {
            return e[e.EX_LOW = -2] = "EX_LOW",
            e[e.LOW = -1] = "LOW",
            e[e.NORMAL = 0] = "NORMAL",
            e
        }(he || {});
        const {t: ye} = n.I18n;
        function ve(e) {
            const {type: t=0, videos: _=0, photos: a=0} = e;
            let i = "";
            if (t === he.EX_LOW || t === he.LOW) {
                const {collectObj: o} = e
                  , {blur: r, blank: n, dark: s} = o;
                let l = [r ? "blur" : void 0, n ? "blank" : void 0, s ? "dark" : void 0];
                l = l.filter((e => void 0 !== e)),
                _ && a ? 1 === l.length ? l.includes("blur") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_3_1") : ye("tips_medias_quality_low_3_1") : l.includes("blank") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_3_2") : ye("tips_medias_quality_low_3_2") : l.includes("dark") && (i = t === he.EX_LOW ? ye("tips_medias_quality_ex_3_3") : ye("tips_medias_quality_low_3_3")) : 2 === l.length ? l.includes("blur") && l.includes("blank") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_3_4") : ye("tips_medias_quality_low_3_4") : l.includes("blur") && l.includes("dark") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_3_5") : ye("tips_medias_quality_low_3_5") : l.includes("blank") && l.includes("dark") && (i = t === he.EX_LOW ? ye("tips_medias_quality_ex_3_6") : ye("tips_medias_quality_low_3_6")) : 3 === l.length && (i = t === he.EX_LOW ? ye("tips_medias_quality_ex_3_7") : ye("tips_medias_quality_low_3_7")) : _ && !a ? 1 === l.length ? l.includes("blur") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_2_1") : ye("tips_medias_quality_low_2_1") : l.includes("blank") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_2_2") : ye("tips_medias_quality_low_2_2") : l.includes("dark") && (i = t === he.EX_LOW ? ye("tips_medias_quality_ex_2_3") : ye("tips_medias_quality_low_2_3")) : 2 === l.length ? l.includes("blur") && l.includes("blank") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_2_4") : ye("tips_medias_quality_low_2_4") : l.includes("blur") && l.includes("dark") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_2_5") : ye("tips_medias_quality_low_2_5") : l.includes("blank") && l.includes("dark") && (i = t === he.EX_LOW ? ye("tips_medias_quality_ex_2_6") : ye("tips_medias_quality_low_2_6")) : 3 === l.length && (i = t === he.EX_LOW ? ye("tips_medias_quality_ex_2_7") : ye("tips_medias_quality_low_2_7")) : !_ && a && (1 === l.length ? l.includes("blur") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_1_1") : ye("tips_medias_quality_low_1_1") : l.includes("blank") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_1_2") : ye("tips_medias_quality_low_1_2") : l.includes("dark") && (i = t === he.EX_LOW ? ye("tips_medias_quality_ex_1_3") : ye("tips_medias_quality_low_1_3")) : 2 === l.length ? l.includes("blur") && l.includes("blank") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_1_4") : ye("tips_medias_quality_low_1_4") : l.includes("blur") && l.includes("dark") ? i = t === he.EX_LOW ? ye("tips_medias_quality_ex_1_5") : ye("tips_medias_quality_low_1_5") : l.includes("blank") && l.includes("dark") && (i = t === he.EX_LOW ? ye("tips_medias_quality_ex_1_6") : ye("tips_medias_quality_low_1_6")) : 3 === l.length && (i = t === he.EX_LOW ? ye("tips_medias_quality_ex_1_7") : ye("tips_medias_quality_low_1_7")))
            }
            return i
        }
        async function fe(e) {
            return await l.Cm.ratingCommentCheck(e)
        }
        function be(e, t, _) {
            const a = [];
            let i = "";
            return e.includes("blur") && a.push("blur"),
            e.includes("blank") && a.push("blank"),
            e.includes("dark") && a.push("dark"),
            _ || t !== he.LOW ? (1 === a.length ? a.includes("blank") ? i = ye("tips_media_check_new_1_" + (t === he.EX_LOW ? "exlow" : "low")) : a.includes("blur") ? i = ye("tips_media_check_new_2_" + (t === he.EX_LOW ? "exlow" : "low")) : a.includes("dark") && (i = ye("tips_media_check_new_3_" + (t === he.EX_LOW ? "exlow" : "low"))) : 2 === a.length ? a.includes("blank") && a.includes("blur") ? i = ye("tips_media_check_new_4_" + (t === he.EX_LOW ? "exlow" : "low")) : a.includes("blank") && a.includes("dark") ? i = ye("tips_media_check_new_5_" + (t === he.EX_LOW ? "exlow" : "low")) : a.includes("blur") && a.includes("dark") && (i = ye("tips_media_check_new_6_" + (t === he.EX_LOW ? "exlow" : "low"))) : i = ye("tips_media_check_new_7_" + (t === he.EX_LOW ? "exlow" : "low")),
            i) : ye("tips_media_content_7_edit_low")
        }
        const we = (e, t) => {
            let _ = 0
              , a = 0;
            e && (t && t.length > 0 && Object.keys(e).forEach((_ => {
                t.includes(_) || delete e[_]
            }
            )),
            Object.values(e).forEach((e => {
                _ = Math.max((null == e ? void 0 : e.coins_earned_with_pictures_and_videos) || 0, _),
                a = Math.max(e.coins_earned_with_pictures_or_videos || 0, a)
            }
            )));
            const i = _ || 0
              , o = a || 0;
            return {
                show_pic_and_video: i > 0,
                show_pic_or_video: o > 0,
                pic_and_video: i,
                pic_or_video: o
            }
        }
          , {t: ke} = n.I18n
          , Se = ({ratings: e, handleOpenEditRating: t, updateRatingAfterSetAnonymous: _, defaultRatingReviewTemplate: i, defaultRatingShowEditButton: r, isFollowUp: n}) => {
            const s = (0,
            g.b$)();
            if (!e)
                return null;
            const l = e.filter((e => 0 !== e.status));
            if (0 === l.length)
                return a.createElement("div", null, a.createElement("p", {
                    className: $
                }, ke(TRANSIFY_COLLECTION_KEYS.pr_review_deleted)));
            const d = l.map(( (e, l) => {
                var d, p, c;
                const m = [...e.videos || [], ...e.images || []]
                  , u = e.ItemRatingReply ? e.ItemRatingReply.comment : null
                  , g = (0,
                F.mr)(e.ctime)
                  , h = s.includes(e.shopid);
                return a.createElement(a.Fragment, {
                    key: l
                }, a.createElement("div", {
                    className: "yEXdce"
                }, a.createElement(re, {
                    item: ge(e.product_items || [])[0],
                    className: "PQYLVf"
                }), ( () => {
                    if (e.is_hidden || 0 === e.status)
                        return null;
                    if (n) {
                        var i;
                        if (null != (i = e.follow_up) && i.ctime)
                            return null;
                        if (null != e && e.can_follow_up || 1 === e.editable)
                            return a.createElement(J.Ig, {
                                onClick: () => t(l)
                            }, a.createElement("span", null, ke(TRANSIFY_COLLECTION_KEYS.update), " "))
                    }
                    return (0,
                    D.y9)(e) && r ? a.createElement(J.Ig, {
                        onClick: () => t(l)
                    }, a.createElement("span", null, ke(TRANSIFY_COLLECTION_KEYS.pr_order_purchase_label_edit), " ")) : a.createElement(K, (0,
                    o.Z)({}, e, {
                        updateRatingAfterSetAnonymous: () => {
                            _(l)
                        }
                    }))
                }
                )()), a.createElement("div", {
                    className: "Zm4GSB"
                }, a.createElement("div", {
                    className: "njWjw_"
                }, a.createElement(A.Z, {
                    className: "LNoC4G",
                    imgSrc: (0,
                    B.Jn)(e.author_portrait, !0)
                })), a.createElement("div", {
                    className: "ypRaPx"
                }, a.createElement("div", {
                    className: "tleNTD"
                }, e.author_username), a.createElement(z.TE, {
                    rating: null == (d = e.detailed_rating) ? void 0 : d.product_quality,
                    size: 14
                }), a.createElement("div", {
                    className: "etz7q9"
                }, i ? a.createElement(q.t, {
                    isDeleted: 0 === e.status,
                    isHidden: e.is_hidden,
                    comment: e.comment,
                    templateTags: e.template_tags || [],
                    hasTemplateTag: !!e.has_template_tag
                }) : e.comment ? e.is_hidden ? null : a.createElement("p", {
                    className: $
                }, 0 === e.status ? ke(TRANSIFY_COLLECTION_KEYS.pr_review_deleted) : e.comment) : null, e.tags ? a.createElement(te, {
                    tags: e.tags
                }) : null), m.length && !e.is_hidden ? a.createElement("div", {
                    className: "hjCxnH"
                }, a.createElement("div", {
                    className: "rating-modal__image-list-wrapper"
                }, a.createElement(Z.h, {
                    urlList: m
                }))) : null, a.createElement("div", {
                    className: "OR7ELQ"
                }, g), u ? a.createElement(W.D, {
                    className: "JUl8xD",
                    titleText: ke(TRANSIFY_COLLECTION_KEYS.pr_order_purchase_label_seller_response),
                    response: u,
                    isHidden: e.ItemRatingReply && e.ItemRatingReply.is_hidden,
                    isShopeeSpecialShop: h
                }) : null, e.is_hidden || !n || null == (p = e.follow_up) || !p.ctime || null != (c = e.follow_up) && c.is_hidden ? null : a.createElement(G, {
                    followUp: e.follow_up,
                    isShopeeSpecialShop: h
                }))))
            }
            ));
            return a.createElement(a.Fragment, null, d)
        }
        ;
        var Ee = _(16301);
        const {t: Ce} = n.I18n;
        class Re extends i().Component {
            constructor(e) {
                super(e),
                this.state = {
                    reply: ""
                }
            }
            onChange(e) {
                this.setState({
                    reply: e
                })
            }
            render() {
                const {placeholder: e=Ce("label_seller_response"), memo: t=Ce("label_seller_can_only_reply_once"), onClickSave: _, onClickCancel: a, error: o, textSave: r, textCancel: n} = this.props;
                return i().createElement("div", {
                    className: "product-rating-reply"
                }, i().createElement("div", {
                    className: V()("product-rating-reply__input", {
                        "product-rating-reply__input--error": o
                    })
                }, i().createElement(Ee.Z, {
                    maxLength: 500,
                    placeholder: e,
                    onChange: this.onChange.bind(this),
                    errorT: Ce
                })), o && i().createElement("div", {
                    className: "product-rating-reply__error"
                }, Ce(o)), i().createElement("div", {
                    className: "product-rating-reply__actions"
                }, i().createElement(J.oe, {
                    modifiers: ["primary"],
                    classnames: ["product-rating-reply__button", "product-rating-reply__button--save"],
                    onClick: _ && _.bind(this, this.state.reply)
                }, r || Ce("label_save")), i().createElement(J.Ig, {
                    classnames: ["product-rating-reply__button", "product-rating-reply__button--cancel"],
                    onClick: a
                }, n || Ce("label_cancel")), i().createElement("div", {
                    className: "product-rating-reply__fatty"
                }), i().createElement("div", {
                    className: "product-rating-reply__memo"
                }, t)))
            }
        }
        const Pe = Re
          , Ne = "Vpio2s"
          , Je = "NE8ARh"
          , {t: Me} = n.I18n;
        class xe extends a.Component {
            constructor(e) {
                var t;
                super(e),
                t = this,
                this.onClickReplyButton = () => {
                    this.setState({
                        inReplyMode: !0
                    })
                }
                ,
                this.onClickCancelReplyButton = () => {
                    this.setState({
                        inReplyMode: !1
                    })
                }
                ,
                this.onClickSaveReplyButton = async function(e) {
                    const _ = t.props.rating
                      , {orderid: a, cmtid: i, shopid: o} = _
                      , r = await n.FetchUtils.post("/api/v2/reply_buyer_rating", {
                        cmtid: i,
                        orderid: a,
                        shopid: o,
                        comment: e
                    });
                    r.error ? t.onSaveReplyError(r.err_msg) : t.onSaveReplySuccess(e)
                }
                ,
                this.onSaveReplyError = e => {
                    this.setState({
                        replyError: e
                    })
                }
                ,
                this.onSaveReplySuccess = e => {
                    this.setState({
                        responseText: e
                    })
                }
                ,
                this.state = {
                    inReplyMode: !1,
                    responseText: "",
                    replyError: "",
                    rating: e.rating
                }
            }
            render() {
                const {rating: e} = this.state;
                if (0 === Object.keys(e).length)
                    return i().createElement("div", null, i().createElement("p", {
                        className: Ne
                    }, Me(r.a.pr_review_deleted)));
                const t = [...e.videos || [], ...e.images || []]
                  , _ = e.UserRatingReply
                  , a = _ && _.comment || this.state.responseText
                  , o = (0,
                F.mr)(e.ctime);
                return i().createElement(i().Fragment, null, i().createElement("div", {
                    className: "LOTgrA"
                }, i().createElement(A.Z, {
                    imgSrc: (0,
                    B.Jn)(e.author_pic, !0)
                }), i().createElement("div", {
                    className: "ymIIA_"
                }, e.author_name), a || this.state.inReplyMode ? null : i().createElement("div", {
                    onClick: this.onClickReplyButton,
                    className: "caWDHI"
                }, Me(r.a.pr_label_reply))), i().createElement("div", {
                    className: "IUEPEY"
                }, i().createElement(z.TE, {
                    rating: e.rating_star,
                    size: 14
                }), e.comment ? i().createElement("div", {
                    className: Ne
                }, e.comment) : null, t.length ? i().createElement("div", {
                    className: "c5o00Y"
                }, i().createElement("div", {
                    className: "rating-modal__image-list-wrapper"
                }, i().createElement(Z.h, {
                    urlList: t
                }))) : null, i().createElement("div", {
                    className: "IWpCq8"
                }, o), !a && this.state.inReplyMode ? i().createElement("div", {
                    className: Je
                }, i().createElement(Pe, {
                    placeholder: Me(r.a.pr_order_purchase_label_buyer_response),
                    memo: Me(r.a.pr_text_you_can_only_reply_rating_once),
                    onClickSave: this.onClickSaveReplyButton,
                    onClickCancel: this.onClickCancelReplyButton,
                    textSave: Me(r.a.pr_order_purchase_label_save),
                    textCancel: Me(r.a.pr_order_purchase_label_cancel),
                    error: this.state.replyError
                })) : null, a ? i().createElement("div", {
                    className: Je
                }, i().createElement(W.D, {
                    titleText: Me(r.a.pr_label_your_response),
                    response: a,
                    isShopeeSpecialShop: this.props.isShopeeSpecialShop
                })) : null))
            }
        }
        const Te = e => i().createElement(g.ep, (0,
        o.Z)({
            Component: xe,
            shopId: e.rating.shopid
        }, e));
        var Oe = _(43174)
          , Ie = _(24433);
        const {t: Le, tNode: Ae} = n.I18n;
        class ze extends a.PureComponent {
            constructor(...e) {
                super(...e),
                this.renderText = (e, t) => {
                    const {requirement: _} = this.props
                      , a = e || t ? ["pr_label_rating_hint", e > 0 && "X_word" + (e > 1 ? "s" : ""), t > 0 && "Y_picture" + (t > 1 ? "s" : ""), "Z_coin"].filter(Boolean).join("_") : "pr_label_rating_hint_submit_to_win";
                    return _.coins_earned ? Le(a, {
                        word: e,
                        picture: t,
                        coins_earned: _.coins_earned
                    }) : ""
                }
                ,
                this.keywordColorful = e => {
                    const {enableRatingCreationUIRevamp: t} = this.props
                      , _ = "en" === (0,
                    le.of)();
                    return t ? a.createElement("span", {
                        className: "UEEXxo"
                    }, `${e} ${Le(r.a.coins)}`) : _ ? `${e} ${Le(r.a.coins)}` : e
                }
                ,
                this.renderReviewText = ({wordOk: e, imageOK: t, videoOk: _, imageToGo: a, videoToGo: i, wordToGo: o}) => {
                    const {categoryCoin: r, enableRatingCreationUIRevamp: n} = this.props
                      , s = n ? Ae : Le;
                    let l;
                    const d = (null == r ? void 0 : r.coins_earned_with_pictures_and_videos) || 0
                      , p = (null == r ? void 0 : r.coins_earned_with_pictures_or_videos) || 0;
                    if (!p && !d)
                        return "";
                    if (!d)
                        return l;
                    const c = this.keywordColorful(p)
                      , m = this.keywordColorful(d);
                    return l = e && t && _ ? s("new_msg_submit_rating_to_earn_coins", {
                        coins_earned: m
                    }) : e && t ? !p && d ? s("msg_add_video_to_earn_coins_two", {
                        needed_video: i,
                        coins_earned_with_video: m
                    }) : s("msg_add_video_to_earn_coins", {
                        coins_earned: c,
                        needed_video: i,
                        coins_earned_with_video: m
                    }) : e && _ ? !p && d ? s("msg_add_pics_to_earn_coins_two", {
                        needed_pictures: a,
                        coins_earned_with_pics: m
                    }) : s("msg_add_pics_to_earn_coins", {
                        coins_earned: c,
                        needed_pictures: a,
                        coins_earned_with_pics: m
                    }) : e ? s("msg_add_pics_and_video_to_earn_coins", {
                        needed_video: i,
                        needed_pictures: a,
                        coins_earned_with_pics_and_videos: m
                    }) : t && _ ? s("msg_add_words_to_earn_coins", {
                        needed_characters: o,
                        coins_earned_with_pics_and_videos: m
                    }) : t ? s("msg_add_words_and_video_to_earn_coins", {
                        needed_characters: o,
                        needed_video: i,
                        coins_earned_with_pics_and_videos: m
                    }) : _ ? s("msg_add_words_and_pics_to_earn_coins", {
                        needed_characters: o,
                        needed_pictures: a,
                        coins_earned_with_pics_and_videos: m
                    }) : s("msg_add_words_and_medias_to_earn_coins", {
                        needed_characters: o,
                        needed_pictures: a,
                        needed_video: i,
                        coins_earned_with_pics_and_videos: m
                    }),
                    l
                }
            }
            render() {
                const {requirement: e, characterCount: t, imageCount: _, videoCount: i=0, defaultVideoReview: o} = this.props
                  , r = Math.max(0, e.minimum_characters - t)
                  , n = Math.max(0, e.minimum_pictures - _)
                  , s = Math.max(0, (e.minimum_videos || 0) - i)
                  , l = !r
                  , d = !n
                  , p = !s;
                let c;
                return c = o ? this.renderReviewText({
                    wordOk: l,
                    imageOK: d,
                    videoOk: p,
                    imageToGo: n,
                    videoToGo: s,
                    wordToGo: r
                }) : this.renderText(r, n),
                a.createElement("div", {
                    className: "BdM2lP"
                }, c)
            }
        }
        var qe = _(96474)
          , De = _(65282);
        const Be = function(e) {
            return i().createElement("svg", (0,
            o.Z)({
                width: "20",
                height: "15",
                viewBox: "0 0 20 15",
                fill: "none"
            }, e), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1 0.0769043C0.447715 0.0769043 0 0.524619 0 1.0769V13.1945C0 13.7468 0.447715 14.1945 1 14.1945H13.1176C13.6699 14.1945 14.1176 13.7468 14.1176 13.1945V1.0769C14.1176 0.52462 13.6699 0.0769043 13.1176 0.0769043H1ZM10.5883 7.1356C10.5883 9.08484 9.00811 10.665 7.05887 10.665C5.10963 10.665 3.52946 9.08484 3.52946 7.1356C3.52946 5.18636 5.10963 3.60619 7.05887 3.60619C9.00811 3.60619 10.5883 5.18636 10.5883 7.1356ZM7.05916 9.48862C8.35865 9.48862 9.4121 8.43517 9.4121 7.13568C9.4121 5.83619 8.35865 4.78274 7.05916 4.78274C5.75966 4.78274 4.70622 5.83619 4.70622 7.13568C4.70622 8.43517 5.75966 9.48862 7.05916 9.48862ZM20.0003 1.25341L15.2944 4.78244V9.4887L20.0003 13.0181V1.25341Z",
                fill: "#EE4D2D"
            }))
        }
          , Fe = function(e) {
            return i().createElement("svg", (0,
            o.Z)({
                width: "20",
                height: "15",
                viewBox: "0 0 20 15",
                fill: "none"
            }, e), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1 0.0769348C0.447715 0.0769348 0 0.52465 0 1.07693V13.1946C0 13.7469 0.447715 14.1946 1 14.1946H13.1176C13.6699 14.1946 14.1176 13.7469 14.1176 13.1946V1.07693C14.1176 0.52465 13.6699 0.0769348 13.1176 0.0769348H1ZM10.5883 7.13563C10.5883 9.08487 9.00811 10.665 7.05887 10.665C5.10963 10.665 3.52946 9.08487 3.52946 7.13563C3.52946 5.18639 5.10963 3.60622 7.05887 3.60622C9.00811 3.60622 10.5883 5.18639 10.5883 7.13563ZM7.05916 9.48865C8.35865 9.48865 9.4121 8.4352 9.4121 7.13571C9.4121 5.83622 8.35865 4.78277 7.05916 4.78277C5.75966 4.78277 4.70622 5.83622 4.70622 7.13571C4.70622 8.4352 5.75966 9.48865 7.05916 9.48865ZM20.0003 1.25344L15.2944 4.78247V9.48873L20.0003 13.0181V1.25344Z",
                fill: "black",
                fillOpacity: "0.26"
            }))
        }
          , We = function(e) {
            return i().createElement("svg", (0,
            o.Z)({
                width: "20",
                height: "18",
                viewBox: "0 0 20 18",
                fill: "none"
            }, e), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.15377 9.76895C6.15377 11.8927 7.87492 13.6151 9.99992 13.6151C12.1236 13.6151 13.8461 11.8927 13.8461 9.76895C13.8461 7.6446 12.1236 5.9228 9.99992 5.9228C7.87492 5.9228 6.15377 7.6446 6.15377 9.76895ZM5 9.76896C5 7.00771 7.23813 4.76896 10 4.76896C12.7613 4.76896 15 7.00771 15 9.76896C15 12.5296 12.7613 14.769 10 14.769C7.23813 14.769 5 12.5296 5 9.76896ZM1.15385 17.2606C0.489784 17.2606 0 16.7249 0 16.0662V4.12218C0 3.46224 0.489784 2.8459 1.15385 2.8459H4.61538L5.21635 1.73267C5.21635 1.73267 5.75421 0.538208 6.41827 0.538208H13.5817C14.2452 0.538208 14.7837 1.73267 14.7837 1.73267L15.3846 2.8459H18.8462C19.5096 2.8459 20 3.46224 20 4.12218V16.0662C20 16.7249 19.5096 17.2606 18.8462 17.2606H1.15385Z",
                fill: "#EE4D2D"
            }))
        }
          , Ze = function(e) {
            return i().createElement("svg", (0,
            o.Z)({
                width: "20",
                height: "18",
                viewBox: "0 0 20 18",
                fill: "none"
            }, e), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.15377 9.76902C6.15377 11.8927 7.87492 13.6152 9.99992 13.6152C12.1236 13.6152 13.8461 11.8927 13.8461 9.76902C13.8461 7.64466 12.1236 5.92286 9.99992 5.92286C7.87492 5.92286 6.15377 7.64466 6.15377 9.76902ZM5 9.76902C5 7.00777 7.23813 4.76902 10 4.76902C12.7613 4.76902 15 7.00777 15 9.76902C15 12.5296 12.7613 14.769 10 14.769C7.23813 14.769 5 12.5296 5 9.76902ZM1.15385 17.2607C0.489784 17.2607 0 16.725 0 16.0662V4.12224C0 3.4623 0.489784 2.84596 1.15385 2.84596H4.61538L5.21635 1.73273C5.21635 1.73273 5.75421 0.538269 6.41827 0.538269H13.5817C14.2452 0.538269 14.7837 1.73273 14.7837 1.73273L15.3846 2.84596H18.8462C19.5096 2.84596 20 3.4623 20 4.12224V16.0662C20 16.725 19.5096 17.2607 18.8462 17.2607H1.15385Z",
                fill: "black",
                fillOpacity: "0.26"
            }))
        }
          , Ue = function(e) {
            return i().createElement("svg", (0,
            o.Z)({
                width: "10",
                height: "10",
                viewBox: "0 0 10 10",
                fill: "none"
            }, e), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.28268 0.908882C8.47794 0.71362 8.79452 0.71362 8.98978 0.908882L9.0908 1.0099C9.28606 1.20516 9.28606 1.52174 9.0908 1.717L1.71669 9.09112C1.52142 9.28638 1.20484 9.28638 1.00958 9.09112L0.908564 8.9901C0.713301 8.79484 0.713301 8.47826 0.908563 8.283L8.28268 0.908882Z",
                fill: "#F6F6F6"
            }), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.00973 0.908882C1.20499 0.71362 1.52157 0.71362 1.71683 0.908882L9.09095 8.28299C9.28621 8.47826 9.28621 8.79484 9.09095 8.9901L8.98993 9.09112C8.79467 9.28638 8.47809 9.28638 8.28283 9.09112L0.908713 1.717C0.713451 1.52174 0.71345 1.20516 0.908713 1.0099L1.00973 0.908882Z",
                fill: "#F6F6F6"
            }))
        }
          , Ve = function(e) {
            return i().createElement("svg", (0,
            o.Z)({
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none"
            }, e), i().createElement("g", {
                filter: "url(#filter0_d)"
            }, i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z",
                fill: "white"
            })), i().createElement("defs", null, i().createElement("filter", {
                id: "filter0_d",
                x: "0",
                y: "0",
                width: "22.1667",
                height: "18",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, i().createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), i().createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), i().createElement("feOffset", null), i().createElement("feGaussianBlur", {
                stdDeviation: "2"
            }), i().createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
            }), i().createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow"
            }), i().createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow",
                result: "shape"
            }))))
        }
          , He = "GJew6O"
          , Xe = ({width: e, height: t, duration: _=1e3}) => {
            const [a,o] = i().useState(0)
              , r = Math.sqrt(e * e + t * t);
            return i().useEffect(( () => {
                const e = Math.max(1e3, _ / 6);
                let t = 0;
                const a = setInterval(( () => {
                    t += 20,
                    t > e - 50 && clearInterval(a),
                    o(Math.floor(100 * t / e))
                }
                ), 20);
                return () => clearInterval(a)
            }
            ), [_]),
            i().createElement("div", {
                className: "G6K_qq"
            }, a < 100 ? i().createElement("div", {
                style: {
                    width: r,
                    height: r,
                    top: (t - r) / 2
                },
                className: V()(He, "xQnSXz")
            }, i().createElement("div", {
                style: a > 50 ? {
                    transform: `rotate(${Math.PI * ((a - 50) / 50)}rad)`
                } : {}
            })) : null, a < 50 ? i().createElement("div", {
                style: {
                    width: r,
                    height: r,
                    top: (t - r) / 2
                },
                className: V()(He, "d3hwLK")
            }, i().createElement("div", {
                style: {
                    transform: `rotate(${Math.PI * (a / 50)}rad)`
                }
            })) : null, i().createElement("div", null, a, "%"))
        }
        ;
        var Ge = _(50366)
          , je = _.n(Ge);
        const Qe = self.__LOCALE__ || "SG"
          , $e = self.__ENV__ || "test"
          , Ye = 132.5
          , Ke = 1080
          , et = se().mall;
        function tt(e, t, _) {
            const a = {};
            e < _ || t < _ ? e / t > 1 ? (a.height = t,
            a.width = 1 * t) : (a.width = e,
            a.height = e / 1) : (a.width = _,
            a.height = _);
            const i = Math.min(e / a.width, t / a.height);
            return a.srcHeight = t / i,
            a.srcWidth = e / i,
            a.y = (a.srcHeight - a.width) / 2,
            a.x = (a.srcWidth - a.height) / 2,
            a
        }
        function _t(e, t, _) {
            const a = Math.max(e, t);
            if (a > _) {
                const i = a / _;
                e /= i,
                t /= i
            }
            return {
                width: e,
                height: t,
                x: 0,
                y: 0,
                srcWidth: e,
                srcHeight: t
            }
        }
        function at(e) {
            return new Promise((function(t) {
                const _ = document.createElement("canvas")
                  , a = new FileReader;
                a.onload = e => {
                    const a = new Image
                      , i = e.target.result;
                    a.onload = () => {
                        const e = [Ye, Ke].map(( (e, t) => {
                            const i = (0 === t ? tt : _t)(a.width, a.height, e);
                            _.width = i.width,
                            _.height = i.height;
                            const o = _.getContext("2d");
                            return o && o.drawImage(a, -i.x, -i.y, i.srcWidth, i.srcHeight),
                            _.toDataURL("image/jpeg", .6)
                        }
                        ));
                        var i;
                        t({
                            key: (i = e[0],
                            i.substr(20 + Math.floor(80 * Math.random()), 50)),
                            thumbnail: e[0],
                            image: e[1]
                        })
                    }
                    ,
                    a.src = i
                }
                ,
                a.readAsDataURL(e)
            }
            ))
        }
        se().env[$e],
        et[Qe];
        const it = e => new Promise(( (t, _) => {
            const a = document.createElement("video")
              , i = URL.createObjectURL(e)
              , r = {
                url: i,
                size: e.size
            }
              , n = () => {
                r.cover && r.duration && t(r)
            }
            ;
            a.addEventListener("timeupdate", (e => {
                r.cover || (r.cover = (e => {
                    const t = document.createElement("canvas")
                      , _ = t.getContext("2d");
                    t.width = e.videoWidth,
                    t.height = e.videoHeight,
                    _ && _.drawImage(e, 0, 0),
                    t.toBlob((e => {
                        if (!e)
                            return;
                        const t = e;
                        t.lastModifiedDate = new Date,
                        t.name = "cover.jpg",
                        ( ({cover: e, coverFile: t}) => {
                            r.cover = e,
                            r.coverFile = t,
                            n()
                        }
                        )({
                            cover: URL.createObjectURL(e),
                            coverFile: t
                        })
                    }
                    ), "image/jpeg"),
                    e.pause()
                }
                )(e.target))
            }
            ), !1),
            a.addEventListener("error", ( () => {
                _((0,
                o.Z)({
                    type: "VIDEO_PLAY_ERROR"
                }, a.error))
            }
            )),
            a.addEventListener("loadedmetadata", (e => {
                r.duration = Math.ceil(1e3 * e.target.duration),
                n()
            }
            ), !1),
            a.src = i,
            a.muted = !0,
            a.play()
        }
        ))
          , ot = async ({file: e, coverFile: t, duration: _}) => {
            var a;
            const i = new (je())({
                env: $e,
                country: Qe,
                biz: 103
            })
              , o = (new Date).getTime();
            await i.upload({
                mediaFile: e,
                coverFile: t,
                mediaType: Ge.MediaType.video
            });
            const r = await i.done().catch((e => Promise.reject(e)));
            return Promise.resolve({
                id: null == r || null == (a = r.video) ? void 0 : a.vid,
                url: null == r ? void 0 : r.video.url,
                cover: null == r ? void 0 : r.cover.url,
                duration: _,
                upload_time: Date.now() - o
            })
        }
          , rt = async (e, t, _, a) => {
            const i = {
                image_ids: e,
                video_ids: t,
                item_id: _,
                shop_id: a
            };
            return await g.e9.post("/api/v1/rating/media_quality_detection", (0,
            o.Z)({}, i))
        }
          , nt = "BiwStw"
          , st = "mXvRBf"
          , lt = "_Y1LWz"
          , dt = "P5gbxm"
          , pt = ["type", "key"]
          , {t: ct} = n.I18n;
        let mt = function(e) {
            return e[e.IMAGE = 0] = "IMAGE",
            e[e.VIDEO = 1] = "VIDEO",
            e
        }({});
        const ut = ({type: e, onChange: t, fileKey: _}) => {
            const a = e === mt.IMAGE ? "image/*" : "video/mp4";
            return i().createElement("label", {
                className: "Bpmgeo"
            }, e === mt.IMAGE ? i().createElement(We, null) : i().createElement(Be, null), i().createElement("span", {
                className: nt
            }, e === mt.IMAGE ? ct(r.a.label_add_photo) : ct(r.a.rating_entrance_name_video)), i().createElement("input", {
                key: _,
                className: st,
                type: "file",
                onChange: t,
                accept: a
            }))
        }
          , gt = ({type: e, onChange: t, currentLength: _, fileKey: a}) => {
            const o = e === mt.IMAGE ? ht : yt
              , r = o - _;
            if (!r)
                return null;
            const n = e === mt.IMAGE ? "image/*" : "video/mp4";
            return i().createElement("label", {
                className: "G95cR4"
            }, e === mt.IMAGE ? i().createElement(Ze, null) : i().createElement(Fe, null), i().createElement("span", {
                className: nt
            }, r, "/", o), i().createElement("input", {
                key: a,
                className: st,
                type: "file",
                onChange: t,
                accept: n
            }))
        }
        ;
        let ht = 6;
        const yt = 1
          , vt = (0,
        c.connect)(null, {})(( ({images: e=[], videos: t=[], pendingImagesLength: _=0, pendingVideosLength: n=0, orderId: s, onMediaChange: l, onUploadSuccess: d, defaultVideoReview: p}) => {
            const c = e.length + _
              , m = t.length + n
              , [u,g] = (0,
            a.useState)(Math.random());
            if (c >= ht && m >= yt)
                return null;
            const h = e => t => {
                g(Math.random());
                const _ = `${Date.now()}`
                  , a = t.target.files[0];
                if (e === mt.IMAGE)
                    at(a).then((t => {
                        l({
                            type: e,
                            key: _,
                            media: t.image
                        }, 1),
                        (async t => {
                            const a = {};
                            try {
                                const e = new Ge.MMSImg({
                                    env: $e,
                                    country: Qe,
                                    biz: 4103
                                });
                                e.base64Upload([t]);
                                const _ = await e.done();
                                a.response = _[0]
                            } catch (i) {
                                a.error = i
                            }
                            var i, o;
                            i = a.error,
                            o = a.response,
                            l({
                                type: e,
                                key: _
                            }, -1),
                            o && !i && d(e, _, o.img_id)
                        }
                        )(t.image, a.name)
                    }
                    ));
                else {
                    const a = t.target.files[0];
                    it(a).then((t => {
                        if (!(t.duration >= 3e3 && t.duration <= 6e4))
                            throw new Error("duration");
                        if (t.size > 1e7)
                            throw new Error("filesize");
                        return l({
                            type: e,
                            key: _,
                            media: t.cover,
                            duration: t.duration
                        }, 1),
                        (0,
                        o.Z)({
                            file: a,
                            orderid: s
                        }, t)
                    }
                    )).then(ot).then((t => {
                        l({
                            type: e,
                            key: _
                        }, -1),
                        d(e, _, t)
                    }
                    )).catch((t => {
                        "VIDEO_PLAY_ERROR" === t.type ? window.alert(ct(r.a.rating_upload_video_fail_toast)) : "filesize" === t.message ? window.alert(ct(r.a.rating_toast_video_upload_size_limit)) : "duration" === t.message ? window.alert(ct(r.a.rating_toast_video_uploadlimit, {
                            min: 3,
                            max: 60
                        })) : l({
                            type: e,
                            key: _
                        }, -1)
                    }
                    ))
                }
            }
            ;
            return c || m ? i().createElement(a.Fragment, null, i().createElement(gt, {
                type: mt.IMAGE,
                onChange: h(mt.IMAGE),
                fileKey: `${mt.IMAGE}_${u}`,
                currentLength: c
            }), p ? i().createElement(gt, {
                type: mt.VIDEO,
                onChange: h(mt.VIDEO),
                fileKey: `${mt.VIDEO}_${u}`,
                currentLength: m
            }) : null) : i().createElement(a.Fragment, null, i().createElement(ut, {
                type: mt.IMAGE,
                onChange: h(mt.IMAGE),
                fileKey: `${mt.IMAGE}_${u}`
            }), p ? i().createElement(ut, {
                type: mt.VIDEO,
                onChange: h(mt.VIDEO),
                fileKey: `${mt.IMAGE}_${u}`
            }) : null)
        }
        ));
        let ft = function(e) {
            return e[e.NO_LOGO = 0] = "NO_LOGO",
            e[e.APPLE = 1] = "APPLE",
            e
        }({});
        const bt = e => ({
            media: e,
            type: mt.IMAGE,
            key: e
        })
          , wt = e => ({
            media: e,
            type: mt.VIDEO,
            key: e.url
        })
          , kt = ({videos: e=[], images: t=[], onRemove: _, pendingVideos: o, pendingImages: r, cannotRedShow: n}) => i().createElement(a.Fragment, null, e.map(( ({media: e, key: t, type: a, quality: o}) => {
            var r;
            return i().createElement("div", {
                key: t,
                className: lt,
                style: {
                    backgroundImage: `url(${e.cover})`,
                    border: n ? "none" : o ? "string" == typeof o ? "none" : Object.values(o).includes(Bt.EX_LOW) || Object.values(o).includes(Bt.LOW) || (null == o || null == (r = o.logo) ? void 0 : r.code) === ft.APPLE ? "2px solid #EE2C4A" : "none" : "none"
                }
            }, i().createElement("button", {
                type: "button",
                "aria-label": "Remove video",
                onClick: () => _({
                    type: a,
                    key: t
                })
            }, i().createElement(Ue, null)), i().createElement("div", {
                className: "pap6j9"
            }, i().createElement(Ve, null), i().createElement("span", null, e.duration ? ( (e=0, t="m:ss") => {
                const _ = Math.ceil(e / 1e3)
                  , a = Math.floor(_ / 60)
                  , i = _ % 60
                  , o = {
                    mm: `0${a}`.substr(-2),
                    m: a,
                    ss: `0${i}`.substr(-2),
                    s: i
                };
                return Object.keys(o).reduce(( (e, t) => e.replace(t, `${o[t]}`)), t)
            }
            )(e.duration) : null)))
        }
        )), o.map(( (e, t) => i().createElement("div", {
            key: t,
            className: V()(lt, dt)
        }, i().createElement("img", {
            src: e.media,
            alt: "Uploaded video"
        }), i().createElement(Xe, {
            width: 54,
            height: 54,
            duration: e.duration
        })))), t.map(( ({media: e, key: t, type: a, quality: o}) => {
            var r;
            return i().createElement("div", {
                key: t,
                className: lt,
                style: {
                    backgroundImage: `url(${(0,
                    De.j)(e)})`,
                    border: n ? "none" : o ? "string" == typeof o ? "none" : Object.values(o).includes(Bt.EX_LOW) || Object.values(o).includes(Bt.LOW) || (null == o || null == (r = o.logo) ? void 0 : r.code) === ft.APPLE ? "2px solid #EE2C4A" : "none" : "none"
                }
            }, i().createElement("button", {
                type: "button",
                "aria-label": "Remove image button",
                onClick: () => _({
                    type: a,
                    key: t
                })
            }, i().createElement(Ue, null)))
        }
        )), r.map(( (e, t) => i().createElement("div", {
            key: t,
            className: V()(lt, dt)
        }, i().createElement("img", {
            src: e.media,
            alt: "Uploaded media"
        }), i().createElement(Xe, {
            width: 54,
            height: 54
        })))));
        class St extends a.Component {
            constructor(e) {
                var t;
                super(e),
                t = this,
                this.timeoutCheckMedia = 0,
                this.initTimeoutCheck = 0,
                this.timeoutTag = !1,
                this.currentImages = [],
                this.currentVideos = [],
                this.currentPendingImages = [],
                this.currentPendingVideos = [],
                this.timeoutVideo = 0,
                this.handleRemoveMedia = ({type: e, key: t}) => {
                    const {defaultRatingMediaQualityCheck: _} = this.props
                      , {images: a, videos: i} = this.state;
                    e === mt.IMAGE ? this.setState({
                        images: a.filter((e => e.key !== t))
                    }, ( () => {
                        this.handleMediasChange(),
                        _ && this.reportMediaCheck()
                    }
                    )) : this.setState({
                        videos: i.filter((e => e.key !== t))
                    }, ( () => {
                        this.handleMediasChange(),
                        _ && this.reportMediaCheck()
                    }
                    ))
                }
                ,
                this.handleUploadSuccess = (e, t, _) => {
                    const {images: a, videos: i} = this.state
                      , {defaultRatingMediaQualityCheck: o} = this.props;
                    e === mt.IMAGE ? this.setState({
                        images: [...a, {
                            key: t,
                            type: e,
                            media: _
                        }]
                    }, ( () => {
                        this.handleMediasChange(),
                        o && (this.timeoutTag = !1,
                        this.uploadCheck(e, t, _))
                    }
                    )) : this.setState({
                        videos: [...i, {
                            key: t,
                            type: e,
                            media: _
                        }]
                    }, ( () => {
                        this.handleMediasChange(),
                        o && (this.timeoutTag = !1,
                        this.uploadCheck(e, t, _))
                    }
                    ))
                }
                ,
                this.clearMediaTimeout = () => {
                    this.timeoutTag = !0,
                    clearTimeout(this.timeoutCheckMedia),
                    clearTimeout(this.initTimeoutCheck),
                    clearTimeout(this.timeoutVideo)
                }
                ,
                this.uploadCheck = async function(e, _, a, i=1) {
                    let o;
                    const r = []
                      , n = []
                      , {collectAllMedia: s, itemId: l, cancelCollectMedia: d, shopId: p} = t.props;
                    if (e === mt.IMAGE ? (o = a,
                    r.push(o)) : (o = a.id,
                    n.push(o)),
                    i > 10) {
                        if (e === mt.IMAGE) {
                            const e = t.state.images;
                            e.forEach((e => {
                                e.media === a && (e.quality = {
                                    blur: 0,
                                    blank: 0,
                                    dark: 0,
                                    logo: {
                                        code: ft.NO_LOGO,
                                        msg: ""
                                    }
                                })
                            }
                            )),
                            t.setState({
                                images: e
                            }, ( () => {
                                clearTimeout(t.timeoutCheckMedia),
                                d && d(`${l}_${o}`),
                                t.reportMediaCheck()
                            }
                            ))
                        } else if (e === mt.VIDEO) {
                            const e = t.state.videos;
                            e.forEach((e => {
                                e.media.id === a.id && (e.quality = {
                                    blur: 0,
                                    blank: 0,
                                    dark: 0,
                                    logo: {
                                        code: ft.NO_LOGO,
                                        msg: ""
                                    }
                                })
                            }
                            )),
                            t.setState({
                                videos: e
                            }, ( () => {
                                clearTimeout(t.timeoutVideo),
                                d && d(`${l}_${o}`),
                                t.reportMediaCheck()
                            }
                            ))
                        }
                        return
                    }
                    if (t.timeoutTag)
                        return;
                    let c;
                    s && s(`${l}_${o}`);
                    try {
                        c = await rt(r, n, l, p)
                    } catch (m) {
                        c = {
                            code: 1e4
                        }
                    }
                    if (0 !== c.code)
                        if (e === mt.VIDEO) {
                            const o = t.state.videos;
                            t.setState({
                                videos: o
                            }, ( () => {
                                clearTimeout(t.timeoutVideo),
                                t.timeoutVideo = window.setTimeout(( () => {
                                    t.uploadCheck(e, _, a, i + 1)
                                }
                                ), 1e3)
                            }
                            ))
                        } else {
                            const o = t.state.images;
                            t.setState({
                                images: o
                            }, ( () => {
                                clearTimeout(t.timeoutCheckMedia),
                                t.timeoutCheckMedia = window.setTimeout(( () => {
                                    t.uploadCheck(e, _, a, i + 1)
                                }
                                ), 1e3)
                            }
                            ))
                        }
                    else if (0 === c.code)
                        if (e === mt.IMAGE) {
                            const e = t.state.images;
                            e.forEach((e => {
                                e.media === a && (e.quality = c.data.image[0].quality)
                            }
                            )),
                            t.setState({
                                images: e
                            }, ( () => {
                                clearTimeout(t.timeoutCheckMedia),
                                d && d(`${l}_${o}`),
                                t.reportMediaCheck()
                            }
                            ))
                        } else if (e === mt.VIDEO) {
                            const e = t.state.videos;
                            e.forEach((e => {
                                e.media.id === a.id && (e.quality = c.data.video[0].quality)
                            }
                            )),
                            t.setState({
                                videos: e
                            }, ( () => {
                                clearTimeout(t.timeoutVideo),
                                d && d(`${l}_${o}`),
                                t.reportMediaCheck()
                            }
                            ))
                        }
                }
                ,
                this.reportMediaCheck = () => {
                    const {images: e, videos: t} = this.state
                      , {isShowMediaCheckErr: _, itemId: a, collectMediaCheck: i, checkItemKey: r} = this.props;
                    let n = !1;
                    const s = []
                      , l = []
                      , d = []
                      , p = []
                      , c = [];
                    let m;
                    if (e.forEach((e => {
                        if (e.quality) {
                            const {blur: t, blank: _, dark: a, logo: i} = e.quality;
                            n || (n = Boolean((null == i ? void 0 : i.code) === ft.APPLE));
                            const o = []
                              , r = [];
                            -2 === t ? o.push("blur") : -1 === t && r.push("blur"),
                            -2 === _ ? o.push("blank") : -1 === _ && r.push("blank"),
                            -2 === a ? o.push("dark") : -1 === a && r.push("dark"),
                            o.length && s.push(o),
                            r.length && l.push(r)
                        }
                    }
                    )),
                    t.forEach((e => {
                        if (e.quality)
                            if ("string" == typeof e.quality)
                                c.push(e.media.id);
                            else {
                                const {blur: t, blank: _, dark: a, logo: i} = e.quality;
                                n || (n = Boolean((null == i ? void 0 : i.code) === ft.APPLE));
                                const o = []
                                  , r = [];
                                -2 === t ? o.push("blur") : -1 === t && r.push("blur"),
                                -2 === _ ? o.push("blank") : -1 === _ && r.push("blank"),
                                -2 === a ? o.push("dark") : -1 === a && r.push("dark"),
                                o.length && d.push(o),
                                r.length && p.push(r)
                            }
                    }
                    )),
                    c.length)
                        if (s.length + d.length > 0) {
                            const e = Et(...s, ...d);
                            m = {
                                type: -3,
                                videos: d.length,
                                photos: s.length,
                                collectObj: e
                            }
                        } else if (l.length + p.length > 0) {
                            const e = Et(...l, ...p);
                            m = {
                                type: -3,
                                videos: p.length,
                                photos: l.length,
                                collectObj: e
                            }
                        } else
                            m = {
                                type: -3,
                                videos: 0,
                                photos: 0,
                                collectObj: {
                                    blur: !1,
                                    blank: !1,
                                    dark: !1
                                }
                            };
                    else
                        m = s.length + d.length > 0 ? {
                            type: -2,
                            videos: d.length,
                            photos: s.length,
                            collectObj: Et(...s, ...d)
                        } : l.length + p.length > 0 ? {
                            type: -1,
                            videos: p.length,
                            photos: l.length,
                            collectObj: Et(...l, ...p)
                        } : {
                            type: 0,
                            videos: 0,
                            photos: 0,
                            collectObj: {
                                blur: !1,
                                blank: !1,
                                dark: !1
                            }
                        };
                    null == _ || _((0,
                    o.Z)({}, m, {
                        hasAppleLogo: n
                    }), r),
                    null == i || i(a, (0,
                    o.Z)({}, m, {
                        hasAppleLogo: n
                    }), r)
                }
                ,
                this.handleMediasChange = () => {
                    const {images: e, videos: t} = this.state;
                    this.props.onMediasChange({
                        images: e.map(( ({media: e}) => e)),
                        videos: t.map(( ({media: e}) => e))
                    })
                }
                ,
                this.getValue = () => {
                    const {images: e, videos: t} = this.state;
                    return [void 0, {
                        photos: e.map(( ({media: e}) => e)),
                        videos: t.map(( ({media: e}) => ({
                            url: e.url,
                            id: e.id,
                            cover: e.cover,
                            duration: e.duration,
                            upload_time: e.upload_time,
                            cover_image_id: e.cover
                        })))
                    }]
                }
                ,
                this.handleMediaChange = (e, t=0) => {
                    let {type: _, key: a} = e
                      , i = (0,
                    qe.Z)(e, pt);
                    const r = _ === mt.IMAGE ? "pendingImages" : "pendingVideos"
                      , n = this.state[r];
                    t > 0 ? this.setState((0,
                    o.Z)({}, this.state, {
                        [r]: [...n, (0,
                        o.Z)({
                            key: a
                        }, i)]
                    }), this.handleReadyStateChange) : t < 0 && this.setState((0,
                    o.Z)({}, this.state, {
                        [r]: n.filter((e => e.key !== a))
                    }), this.handleReadyStateChange)
                }
                ,
                this.handleReadyStateChange = () => {
                    const {pendingImages: e, pendingVideos: t} = this.state;
                    this.props.onStateChange({
                        ready: !(e.length || t.length)
                    })
                }
                ,
                this.initCheckMedia = async function(e=1) {
                    if (e > 10)
                        return;
                    if (t.timeoutTag)
                        return;
                    const {images: _, videos: a} = t.state
                      , {itemId: i, shopId: o} = t.props;
                    if (_.length + a.length === 0)
                        return;
                    const r = []
                      , n = [];
                    let s;
                    _.forEach((e => r.push(e.media))),
                    a.forEach((e => n.push(e.media.id)));
                    try {
                        s = await rt(r, n, i, o)
                    } catch (l) {
                        s = {
                            code: 1e4
                        }
                    }
                    0 === s.code ? (s.data && s.data.image.forEach((e => {
                        _.forEach((t => {
                            t.media === e.image_id && (t.quality = e.quality)
                        }
                        ))
                    }
                    )),
                    s.data && s.data.video.forEach((e => {
                        a.forEach((t => {
                            t.media.id === e.video_id && (t.quality = e.quality)
                        }
                        ))
                    }
                    )),
                    t.setState({
                        images: _,
                        videos: a
                    }, ( () => {
                        t.reportMediaCheck()
                    }
                    ))) : (clearTimeout(t.initTimeoutCheck),
                    t.initTimeoutCheck = window.setTimeout(( () => {
                        t.initCheckMedia(e + 1)
                    }
                    ), 1e3))
                }
                ,
                this.UNSAFE_componentWillReceiveProps = e => {
                    const {showDialogNow: t, cannotRedShow: _} = this.props;
                    e.showDialogNow !== t && this.setState({
                        showDialogNow: e.showDialogNow
                    }),
                    (null == e ? void 0 : e.cannotRedShow) !== _ && this.setState({})
                }
                ,
                this.state = {
                    images: (e.images || []).map(bt),
                    videos: (e.videos || []).map(wt),
                    pendingImages: [],
                    pendingVideos: [],
                    showDialogNow: !1
                },
                e.defaultVideoReview && (ht = 5)
            }
            componentDidMount() {
                window.mbmb3 = this
                const {defaultRatingMediaQualityCheck: e} = this.props;
                e && (this.timeoutTag = !1,
                this.initCheckMedia())
            }
            componentWillUnmount() {
                this.clearMediaTimeout()
            }
            render() {
                const {images: e, videos: t, pendingImages: _, pendingVideos: a, showDialogNow: o} = this.state
                  , {defaultRatingCommentCheck: r, cannotRedShow: n} = this.props;
                return o || (this.currentImages = e,
                this.currentVideos = t,
                this.currentPendingImages = _,
                this.currentPendingVideos = a),
                i().createElement("div", {
                    className: "Y5ceMw"
                }, r ? i().createElement(i().Fragment, null, i().createElement(kt, {
                    pendingImages: _,
                    pendingVideos: a,
                    images: e,
                    videos: t,
                    onRemove: this.handleRemoveMedia,
                    cannotRedShow: n
                }), i().createElement(vt, {
                    images: e,
                    videos: t,
                    pendingImagesLength: _.length,
                    pendingVideosLength: a.length,
                    orderId: this.props.orderId,
                    onMediaChange: this.handleMediaChange,
                    onUploadSuccess: this.handleUploadSuccess,
                    defaultVideoReview: this.props.defaultVideoReview,
                    defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck
                })) : i().createElement(i().Fragment, null, i().createElement(kt, {
                    pendingImages: this.currentPendingImages,
                    pendingVideos: this.currentPendingVideos,
                    images: this.currentImages,
                    videos: this.currentVideos,
                    onRemove: this.handleRemoveMedia,
                    cannotRedShow: n
                }), i().createElement(vt, {
                    images: this.currentImages,
                    videos: this.currentVideos,
                    pendingImagesLength: this.currentPendingImages.length,
                    pendingVideosLength: this.currentPendingVideos.length,
                    orderId: this.props.orderId,
                    onMediaChange: this.handleMediaChange,
                    onUploadSuccess: this.handleUploadSuccess,
                    defaultVideoReview: this.props.defaultVideoReview,
                    defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck
                })))
            }
        }
        function Et(...e) {
            const t = e.flat()
              , _ = new Set(t);
            return {
                blur: _.has("blur"),
                blank: _.has("blank"),
                dark: _.has("dark")
            }
        }
        const Ct = "pFkDf6"
          , {t: Rt} = n.I18n
          , Pt = /(\r\n)|\r|\n/g;
        function Nt(e) {
            const t = (0,
            a.useRef)(null)
              , {index: _, onTemplateChange: o, template: n, defaultValue: s=""} = e
              , [l,d] = (0,
            a.useState)(s);
            let p = e.placeholder || "";
            return p || 0 !== _ || (p = Rt(r.a.label_review_template_newhint)),
            i().createElement("div", {
                className: "BsmFJD"
            }, i().createElement("div", {
                className: "fD7sMX",
                style: {
                    fontWeight: l.length ? 600 : "normal"
                }
            }, n.trim(), ":"), i().createElement("textarea", {
                className: Ct,
                value: l,
                onChange: e => {
                    const _ = e.target.value
                      , a = t.current;
                    a && (a.style.height = "auto",
                    a.style.height = (0,
                    ae.Z)(a.scrollHeight)),
                    d(_),
                    o(n, _.replace(Pt, " "))
                }
                ,
                onKeyDown: e => {
                    13 === e.keyCode && e.preventDefault()
                }
                ,
                onMouseMove: e => {
                    e.preventDefault()
                }
                ,
                rows: 1,
                placeholder: p,
                ref: t
            }))
        }
        const {t: Jt} = n.I18n;
        var Mt = function(e) {
            return e[e.normal = 0] = "normal",
            e[e.low = -1] = "low",
            e[e.exLow = -2] = "exLow",
            e
        }(Mt || {});
        class xt extends a.Component {
            constructor(e) {
                super(e),
                this.textareaRef = null,
                this.text = `${Jt(r.a.label_review_template_newhint)}`,
                this.onChangeTemplateText = (e, t) => {
                    const {value: _, templateMap: a} = this.state
                      , {onTemplateChange: i} = this.props
                      , r = (0,
                    o.Z)({}, a, {
                        [e]: t
                    });
                    this.setState({
                        templateMap: r,
                        ratingComments: Object.values(r).join("") + _
                    }),
                    "function" == typeof i && i(e, t)
                }
                ,
                this.handleChange = e => {
                    const {templateMap: t} = this.state;
                    this.textareaRef && (this.textareaRef.style.height = "auto",
                    this.textareaRef.style.height = (0,
                    ae.Z)(this.textareaRef.scrollHeight)),
                    this.setState({
                        value: e,
                        ratingComments: Object.values(t).join("") + e
                    }),
                    this.props.onCommentChange(e)
                }
                ,
                this.handleFocus = () => {}
                ,
                this.handleBlur = () => {}
                ,
                this.handleMouseMove = e => {
                    e.preventDefault()
                }
                ,
                this.state = {
                    value: e.value || "",
                    placeholder: this.text,
                    templateMap: {},
                    ratingComments: ""
                }
            }
            render() {
                const {value: e, placeholder: t} = this.state
                  , {templateTags: _, templateTagComments: i, commentQuality: o, canGetCoin: n, mediaQuantity: s, algoTagHints: l=[], ratingScore: d} = this.props;
                return a.createElement("div", {
                    className: o === Mt.exLow || s === Bt.EX_LOW && o !== Mt.normal || o !== Mt.normal && n ? "m0qypn" : "nNhuz7"
                }, _.map(( (e, t) => {
                    const _ = function(e, t, _=[], a=0) {
                        let i;
                        if ((_ = _ || []).length > 0) {
                            var o;
                            const t = null == (o = _.find((t => t.template_tag === e))) ? void 0 : o.hints;
                            var n, s, l;
                            if (null != t && t.length)
                                if (a >= 1 && a <= 3)
                                    i = null != (n = null == (s = t.find((e => e.sentiment === Ot.SENTI_NEUTRAL))) ? void 0 : s.hint_text) ? n : null == (l = t.find((e => e.sentiment === Ot.SENTI_NEGATIVE))) ? void 0 : l.hint_text;
                                else if (a >= 4) {
                                    var d, p, c;
                                    i = null != (d = null == (p = t.find((e => e.sentiment === Ot.SENTI_POSITIVE))) ? void 0 : p.hint_text) ? d : null == (c = t.find((e => e.sentiment === Ot.SENTI_NEUTRAL))) ? void 0 : c.hint_text
                                }
                        }
                        return i || 0 !== t || (i = Jt(r.a.label_review_template_hint)),
                        i || ""
                    }(e, t, null != l ? l : [], d);
                    return a.createElement(Nt, {
                        template: e,
                        onTemplateChange: this.onChangeTemplateText,
                        key: e,
                        defaultValue: i[e],
                        index: t,
                        placeholder: _
                    })
                }
                )), a.createElement("div", {
                    className: "LQNDXX"
                }), a.createElement("div", {
                    style: {
                        position: "relative"
                    }
                }, a.createElement("textarea", {
                    className: Ct,
                    value: e,
                    onChange: e => {
                        const t = e.target.value;
                        this.handleChange(t)
                    }
                    ,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    onMouseMove: this.handleMouseMove,
                    style: {
                        minHeight: "100px",
                        color: "rgba(0, 0, 0, 0.87)"
                    },
                    rows: 3,
                    placeholder: t,
                    ref: e => {
                        this.textareaRef = e
                    }
                })))
            }
        }
        xt.defaultProps = {
            templateTagComments: {}
        };
        const Tt = xt;
        var Ot = function(e) {
            return e[e.SENTI_POSITIVE = 1] = "SENTI_POSITIVE",
            e[e.SENTI_NEUTRAL = 2] = "SENTI_NEUTRAL",
            e[e.SENTI_NEGATIVE = 3] = "SENTI_NEGATIVE",
            e
        }(Ot || {});
        const It = (0,
        _(1419).Z)()
          , Lt = "text";
        function At(e) {
            return e ? ( (e="") => {
                let t = 0;
                const _ = ( (e="") => {
                    const t = [];
                    let _ = e.replace(/\s+|\t|\n|\v|\r|\f|[\ufe00-\ufe0f]/g, "");
                    for (; _.length > 0; ) {
                        var a;
                        const e = null == (a = _.match(It)) ? void 0 : a[0];
                        if (e) {
                            const a = _.indexOf(e);
                            a > 0 && t.push({
                                text: _.slice(0, a).replace(/\u200d/, ""),
                                type: Lt
                            }),
                            t.push({
                                text: e,
                                type: "other"
                            }),
                            _ = _.slice(a + e.length)
                        } else
                            t.push({
                                text: _.replace(/\u200d/, ""),
                                type: Lt
                            }),
                            _ = ""
                    }
                    return t
                }
                )(e);
                for (let a = 0; a < _.length; a++)
                    _[a].type === Lt ? t += _[a].text.length : t += 1;
                return t
            }
            )(e) : 0
        }
        const {t: zt} = n.I18n;
        function qt(e) {
            return e.replace(/(^\s*)|(\s*$)/g, "")
        }
        const {t: Dt} = n.I18n;
        let Bt = function(e) {
            return e[e.NO_READY = -3] = "NO_READY",
            e[e.EX_LOW = -2] = "EX_LOW",
            e[e.LOW = -1] = "LOW",
            e[e.NORMAL = 0] = "NORMAL",
            e
        }({})
          , Ft = function(e) {
            return e[e.normal = 0] = "normal",
            e[e.low = -1] = "low",
            e[e.exLow = -2] = "exLow",
            e
        }({});
        const Wt = [];
        class Zt extends a.Component {
            constructor(e) {
                var t, _;
                super(e),
                this.mediaRef = null,
                this.useReviewTemplate = !1,
                this.templateTagComments = {},
                this.commentQuality = Ft.normal,
                this.showErrContentForCheckResult = !1,
                this.showErrMsgForCheckResult = "",
                this.canGetCoin = !1,
                this.enableAlgoTemplateAbt = !1,
                this.ratingHandlerDivRef = a.createRef(),
                this.initMedias = () => {
                    const {rating: e} = this.props;
                    return {
                        images: e && e.images ? e.images : Wt,
                        videos: e && e.videos ? e.videos : Wt
                    }
                }
                ,
                this.initComments = () => {
                    const {isUpdating: e, rating: t} = this.props
                      , _ = t ? t.comment : ""
                      , a = !!t && !!t.has_template_tag;
                    if (!e || !this.useReviewTemplate || !a)
                        return {
                            comment: _
                        };
                    const {tmpTagsComments: i, comments: o} = (0,
                    g.mx)(this.templateTags, _);
                    return this.templateTagComments = {},
                    this.templateTags.forEach((e => {
                        this.templateTagComments[e] = i[e] || ""
                    }
                    )),
                    {
                        comment: o
                    }
                }
                ,
                this.toggleRatingAnonymous = () => {
                    this.setState({
                        ratingAnonymous: !this.state.ratingAnonymous
                    }, ( () => {
                        this.handleReadyStateChange()
                    }
                    ))
                }
                ,
                this.handleMediasChange = ({images: e, videos: t}) => {
                    this.setState({
                        images: e,
                        videos: t
                    }, ( () => {
                        this.canGetCoins(),
                        this.handleReadyStateChange()
                    }
                    ))
                }
                ,
                this.onCommentChange = e => {
                    const {deleteCommentCheckItemId: t, item: _} = this.props;
                    this.setState({
                        comment: e
                    }, ( () => {
                        this.canGetCoins(),
                        this.handleReadyStateChange()
                    }
                    )),
                    null == t || t(_.itemid)
                }
                ,
                this.onTemplateChange = (e, t) => {
                    const {deleteCommentCheckItemId: _, item: a} = this.props;
                    this.templateTagComments = (0,
                    o.Z)({}, this.templateTagComments, {
                        [e]: qt(t)
                    }),
                    this.setState({}, ( () => {
                        this.handleReadyStateChange()
                    }
                    )),
                    this.canGetCoins(),
                    null == _ || _(a.itemid)
                }
                ,
                this.getRatingComments = () => {
                    if (!this.useReviewTemplate)
                        return this.state.comment;
                    let e = this.state.comment;
                    return Object.values(this.templateTagComments).forEach((t => {
                        e += t
                    }
                    )),
                    e
                }
                ,
                this.isShowMediaCheckErr = e => {
                    const {type: t=0, videos: _=0, photos: a=0, hasAppleLogo: i} = e
                      , {isUpdating: o, isItemValidationCheckPass: n} = this.props;
                    let s = "";
                    if (t === Bt.EX_LOW || t === Bt.LOW || t === Bt.NO_READY) {
                        const {defaultRatingCommentCheck: l} = this.props
                          , {collectObj: d} = e
                          , {blur: p, blank: c, dark: m} = d;
                        let u = [p ? "blur" : void 0, c ? "blank" : void 0, m ? "dark" : void 0];
                        u = u.filter((e => void 0 !== e)),
                        l ? 1 === u.length ? u.includes("blank") ? s = Dt("tips_media_content_1_" + (t === Bt.EX_LOW ? "exlow" : o || !n ? "edit_low" : "low")) : u.includes("blur") ? s = Dt("tips_media_content_2_" + (t === Bt.EX_LOW ? "exlow" : o || !n ? "edit_low" : "low")) : u.includes("dark") && (s = Dt("tips_media_content_3_" + (t === Bt.EX_LOW ? "exlow" : o || !n ? "edit_low" : "low"))) : 2 === u.length ? u.includes("blank") && u.includes("blur") ? s = Dt("tips_media_content_4_" + (t === Bt.EX_LOW ? "exlow" : o || !n ? "edit_low" : "low")) : u.includes("blank") && u.includes("dark") ? s = Dt("tips_media_content_5_" + (t === Bt.EX_LOW ? "exlow" : o || !n ? "edit_low" : "low")) : u.includes("blur") && u.includes("dark") && (s = Dt("tips_media_content_6_" + (t === Bt.EX_LOW ? "exlow" : o || !n ? "edit_low" : "low"))) : s = Dt("tips_media_content_7_" + (t === Bt.EX_LOW ? "exlow" : o || !n ? "edit_low" : "low")) : _ && a ? 1 === u.length ? u.includes("blur") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_3_1) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_3_1 : r.a.tips_medias_quality_low_3_1) : u.includes("blank") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_3_2) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_3_2 : r.a.tips_medias_quality_low_3_2) : u.includes("dark") && (s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_3_3) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_3_3 : r.a.tips_medias_quality_low_3_3)) : 2 === u.length ? u.includes("blur") && u.includes("blank") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_3_4) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_3_4 : r.a.tips_medias_quality_low_3_4) : u.includes("blur") && u.includes("dark") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_3_5) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_3_5 : r.a.tips_medias_quality_low_3_5) : u.includes("blank") && u.includes("dark") && (s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_3_6) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_3_6 : r.a.tips_medias_quality_low_3_6)) : 3 === u.length && (s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_3_7) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_3_7 : r.a.tips_medias_quality_low_3_7)) : _ && !a ? 1 === u.length ? u.includes("blur") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_2_1) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_2_1 : r.a.tips_medias_quality_low_2_1) : u.includes("blank") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_2_2) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_2_2 : r.a.tips_medias_quality_low_2_2) : u.includes("dark") && (s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_2_3) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_2_3 : r.a.tips_medias_quality_low_2_3)) : 2 === u.length ? u.includes("blur") && u.includes("blank") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_2_4) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_2_4 : r.a.tips_medias_quality_low_2_4) : u.includes("blur") && u.includes("dark") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_2_5) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_2_5 : r.a.tips_medias_quality_low_2_5) : u.includes("blank") && u.includes("dark") && (s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_2_6) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_2_6 : r.a.tips_medias_quality_low_2_6)) : 3 === u.length && (s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_2_7) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_2_7 : r.a.tips_medias_quality_low_2_7)) : !_ && a && (1 === u.length ? u.includes("blur") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_1_1) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_1_1 : r.a.tips_medias_quality_low_1_1) : u.includes("blank") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_1_2) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_1_2 : r.a.tips_medias_quality_low_1_2) : u.includes("dark") && (s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_1_3) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_1_3 : r.a.tips_medias_quality_low_1_3)) : 2 === u.length ? u.includes("blur") && u.includes("blank") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_1_4) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_1_4 : r.a.tips_medias_quality_low_1_4) : u.includes("blur") && u.includes("dark") ? s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_1_5) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_1_5 : r.a.tips_medias_quality_low_1_5) : u.includes("blank") && u.includes("dark") && (s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_1_6) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_1_6 : r.a.tips_medias_quality_low_1_6)) : 3 === u.length && (s = t === Bt.EX_LOW ? Dt(r.a.tips_medias_quality_ex_1_7) : Dt(o || !n ? r.a.tips_medias_quality_low_edit_1_7 : r.a.tips_medias_quality_low_1_7))),
                        this.setState({
                            showMediaCheckErrContent: !!s,
                            showMediaErrContent: s,
                            mediaQualityType: t,
                            photosCheckLength: a,
                            videosCheckLength: _,
                            badTypeArr: u,
                            hasAppleLogo: i
                        }, ( () => {
                            const {defaultRatingCommentCheck: e} = this.props;
                            e && this.controlContent(),
                            this.canGetCoins()
                        }
                        ))
                    } else
                        this.setState({
                            showMediaCheckErrContent: !1,
                            mediaQualityType: Bt.NORMAL,
                            photosCheckLength: 0,
                            videosCheckLength: 0,
                            badTypeArr: [],
                            hasAppleLogo: i
                        }, ( () => {
                            const {defaultRatingCommentCheck: e} = this.props;
                            e && this.controlContent(),
                            this.canGetCoins()
                        }
                        ))
                }
                ,
                this.canGetCoins = () => {
                    const {ratingMeta: e, defaultVideoReview: t, categoryCoin: _, isUpdating: a, collectCoinItem: i, item: o} = this.props
                      , {videos: r, images: n} = this.state
                      , s = At(this.getRatingComments());
                    if (!a)
                        if (e && (e.coins_earned || 0) >= 0) {
                            const a = Math.max(0, ((null == e ? void 0 : e.minimum_characters) || 0) - s)
                              , l = Math.max(0, ((null == e ? void 0 : e.minimum_pictures) || 0) - n.length)
                              , d = !a
                              , p = !l
                              , c = !Math.max(0, ((null == e ? void 0 : e.minimum_videos) || 0) - r.length);
                            if (t) {
                                const t = (null == _ ? void 0 : _.coins_earned_with_pictures_and_videos) || (null == e ? void 0 : e.coins_earned_with_pics_and_videos) || 0
                                  , a = (null == _ ? void 0 : _.coins_earned_with_pictures_or_videos) || (null == e ? void 0 : e.coins_earned) || 0;
                                if (!t && !a)
                                    return i && i(o.itemid, !1),
                                    void (this.canGetCoin = !1);
                                d && p && c ? t || a ? (i && i(o.itemid, !0),
                                this.canGetCoin = !0) : (i && i(o.itemid, !1),
                                this.canGetCoin = !1) : d && p ? a ? (i && i(o.itemid, !0),
                                this.canGetCoin = !0) : (i && i(o.itemid, !1),
                                this.canGetCoin = !1) : d && c && a ? (i && i(o.itemid, !0),
                                this.canGetCoin = !0) : (i && i(o.itemid, !1),
                                this.canGetCoin = !1)
                            } else
                                null != e && e.coins_earned ? a || l ? (i && i(o.itemid, !1),
                                this.canGetCoin = !1) : (i && i(o.itemid, !0),
                                this.canGetCoin = !0) : (i && i(o.itemid, !1),
                                this.canGetCoin = !1)
                        } else
                            i && i(o.itemid, !1),
                            this.canGetCoin = !0
                }
                ,
                this.clearMediaTimeout = () => {
                    var e;
                    null == (e = this.mediaRef) || e.clearMediaTimeout()
                }
                ,
                this.getCommentCheck = () => {
                    const {commentCheckMap: e, item: t} = this.props
                      , {itemid: _} = t
                      , a = e && e[Number(_)] ? e[Number(_)] : {
                        text: 0,
                        emoji: 0,
                        total: 0
                    };
                    return this.commentQuality = a.total,
                    a
                }
                ,
                this.renderTipsForComment = () => {
                    const {isUpdating: e, isItemValidationCheckPass: t} = this.props;
                    this.getCommentCheck(),
                    this.commentQuality === Ft.normal ? (this.showErrContentForCheckResult = !1,
                    this.showErrMsgForCheckResult = "") : this.commentQuality === Ft.low ? (this.showErrContentForCheckResult = !0,
                    this.showErrMsgForCheckResult = Dt(e || !t ? r.a.tips_comment_content_edit_low : r.a.tips_comment_content_low)) : this.commentQuality === Ft.exLow && (this.showErrContentForCheckResult = !0,
                    this.showErrMsgForCheckResult = Dt(r.a.tips_comment_content_exlow))
                }
                ,
                this.getHeight = () => {
                    var e;
                    return null == (e = this.ratingHandlerDivRef.current) ? void 0 : e.offsetHeight
                }
                ,
                this.controlContent = (e="useTag") => {
                    if ("useTag" === e) {
                        const {showDialogNow: e} = this.props;
                        e || this.setState({
                            currentMediaErrStatus: this.state.showMediaCheckErrContent,
                            currentMediaErrContent: this.state.showMediaErrContent
                        })
                    } else
                        e || this.setState({
                            currentMediaErrStatus: this.state.showMediaCheckErrContent,
                            currentMediaErrContent: this.state.showMediaErrContent
                        })
                }
                ,
                this.handleRatingCommentChange = e => {
                    const {deleteCommentCheckItemId: t, item: _} = this.props;
                    this.setState({
                        comment: e
                    }, ( () => {
                        this.canGetCoins(),
                        this.handleReadyStateChange()
                    }
                    )),
                    t && t(_.itemid)
                }
                ,
                this.onTagsChanged = e => {
                    this.setState({
                        tags: e
                    }, ( () => {
                        this.handleReadyStateChange()
                    }
                    ))
                }
                ,
                this.handleRatingChange = e => {
                    if (e !== this.state.ratingStar) {
                        let t = {
                            ratingStar: e,
                            tags: {},
                            ratingReady: this.state.ratingReady
                        };
                        this.state.ratingReady || (t = (0,
                        o.Z)({}, t, {
                            ratingReady: !0
                        })),
                        this.setState(t, ( () => {
                            this.handleReadyStateChange()
                        }
                        ))
                    }
                }
                ,
                this.handleReadyStateChange = () => {
                    this.props.onReadyStateChange && this.props.onReadyStateChange()
                }
                ;
                const {rating: i, defaultRatingAnonymous: n, defaultRatingReviewTemplate: s, item: l, isUpdating: d, ratingMeta: p} = e;
                var c, m;
                this.enableAlgoTemplateAbt = h.sprar_7240_algo_generated_review_writing_template.exp_groups.includes(e.algoTemplateAbt || ""),
                this.templateTags = d ? (this.enableAlgoTemplateAbt ? null == i || null == (c = i.algo_tag_hints) ? void 0 : c.map((e => e.template_tag || "")).filter(Boolean) : null == i ? void 0 : i.template_tags) || (null == i ? void 0 : i.template_tags) || [] : (this.enableAlgoTemplateAbt ? null == (m = l.algo_tag_hints) ? void 0 : m.map((e => e.template_tag || "")).filter(Boolean) : l.template_tags) || l.template_tags || [];
                const u = !(!this.templateTags || !this.templateTags.length);
                this.useReviewTemplate = s && u,
                this.isExclude = ["TW", "MY", "CO", "CL","ID"].includes((0,
                le.Kd)()),
                this.state = (0,
                o.Z)({
                    ratingReady: i ? null != (t = i.detailed_rating) && t.product_quality ? !!i.detailed_rating.product_quality : !!i.rating_star : !(null == p || !p.default_rating_star || null == p || !p.default_rating_star),
                    ratingStar: (null == i || null == (_ = i.detailed_rating) ? void 0 : _.product_quality) || (null == i ? void 0 : i.rating_star) || (null == p ? void 0 : p.default_rating_star) || 0,
                    ratingAnonymous: n || !1,
                    tags: i && i.tags ? i.tags.reduce(( (e, t) => (e[t.tag_id] = !0,
                    e)), {}) : {}
                }, this.initMedias(), this.initComments(), {
                    showMediaCheckErrContent: !1,
                    showMediaErrContent: "",
                    mediaQualityType: Bt.NORMAL,
                    videosCheckLength: 0,
                    photosCheckLength: 0,
                    badTypeArr: [],
                    currentMediaErrContent: "",
                    currentMediaErrStatus: !1,
                    hasAppleLogo: !1
                })
            }
            componentDidMount() {
                if(!window.mbmb2_list) {
                    window.mbmb2_list = []
                }
                if(!window.mbmb2_list.find(function(item){
                    return item === this
                })){
                    window.mbmb2_list.push(this)
                }
                window.mbmb2 = this
            }
            renderName() {
                const {ratingAnonymous: e} = this.state
                  , {username: t} = this.props
                  , _ = e ? ue(t) : t;
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: "rating-modal-handler__rating-anonymous-hint"
                }, Dt(this.isExclude ? r.a.pr_label_rate_anonymously : r.a.label_show_username_on_your_review)), a.createElement("div", {
                    className: "rating-modal-handler__rating-anonymous-username"
                }, Dt(r.a.pr_label_rate_anonymous_preview, {
                    name: _
                })))
            }
            UNSAFE_componentWillReceiveProps(e) {
                const {showDialogNow: t, defaultRatingCommentCheck: _, isUpdating: a, cannotRedShow: i} = this.props;
                _ && e.showDialogNow !== t && this.controlContent(e.showDialogNow),
                a || (null == e ? void 0 : e.cannotRedShow) !== i && this.setState({})
            }
            render() {
                const {ratingMeta: e, isItemValidationCheckPass: t, isUpdating: _, rating: i, defaultVideoReview: o, enableRatingCreationUIRevamp: n, defaultRatingCommentCheck: s, cannotRedShow: l, algoTagHints: d} = this.props
                  , {comment: p, showMediaCheckErrContent: c, showMediaErrContent: m, currentMediaErrContent: u, currentMediaErrStatus: g, mediaQualityType: h, hasAppleLogo: v} = this.state
                  , f = i || {
                    images: [],
                    videos: []
                }
                  , b = r.a.label_review_template_newhint
                  , w = this.getRatingComments();
                return s && this.renderTipsForComment(),
                a.createElement("div", {
                    className: V()("rating-modal-handler__container", !this.props.showBottomBorder && "rating-modal-handler__container--last"),
                    ref: this.ratingHandlerDivRef
                }, a.createElement(re, {
                    item: this.props.item,
                    className: "_wP3Oz"
                }), a.createElement("div", {
                    style: {
                        margin: "20px 0"
                    }
                }, a.createElement(z.kG, {
                    title: Dt(r.a.low_rating_detail_product_quality),
                    rating: this.state.ratingStar,
                    onRatingChange: this.handleRatingChange
                })), this.state.ratingReady ? a.createElement(a.Fragment, null, a.createElement("div", {
                    className: "J5M4lP"
                }, this.useReviewTemplate ? a.createElement(Tt, {
                    algoTagHints: this.enableAlgoTemplateAbt ? d : void 0,
                    templateTags: this.templateTags,
                    onCommentChange: this.onCommentChange,
                    onTemplateChange: this.onTemplateChange,
                    value: p,
                    templateTagComments: this.templateTagComments,
                    commentQuality: this.commentQuality,
                    canGetCoin: this.canGetCoin,
                    mediaQuantity: h,
                    minimum_characters: (null == e ? void 0 : e.minimum_characters) || 0,
                    ratingScore: this.state.ratingStar
                }) : a.createElement("div", {
                    style: {
                        position: "relative"
                    }
                }, a.createElement(Oe.Z, {
                    value: p,
                    onChange: e => {
                        const t = e.target.value;
                        this.handleRatingCommentChange(t)
                    }
                    ,
                    placeholder: Dt(b),
                    style: this.commentQuality === Ft.exLow || this.commentQuality === Ft.low || this.commentQuality !== Ft.normal && this.canGetCoin ? {
                        border: "2px solid #EE2C4A",
                        transition: "none"
                    } : {}
                })), a.createElement(St, {
                    ref: e => {
                        this.mediaRef = e
                    }
                    ,
                    orderId: this.props.orderId,
                    images: f.images || [],
                    videos: f.videos || [],
                    onStateChange: this.props.onImageReadyStateChange,
                    defaultVideoReview: o,
                    onMediasChange: this.handleMediasChange,
                    itemId: this.props.item.itemid,
                    shopId: this.props.item.shopid,
                    isShowMediaCheckErr: this.isShowMediaCheckErr,
                    collectMediaCheck: this.props.collectMediaCheck,
                    defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck,
                    collectAllMedia: this.props.collectAllMedia,
                    cancelCollectMedia: this.props.cancelCollectMedia,
                    showDialogNow: this.props.showDialogNow,
                    defaultRatingCommentCheck: this.props.defaultRatingCommentCheck,
                    cannotRedShow: !_ && l
                }), l ? t ? a.createElement(ze, {
                    classname: "rating-hint-text-coin",
                    requirement: e,
                    imageCount: this.state.images.length,
                    videoCount: this.state.videos.length,
                    defaultVideoReview: o,
                    enableRatingCreationUIRevamp: n,
                    categoryCoin: this.props.categoryCoin,
                    characterCount: At(w)
                }) : null : (s ? g : c) || v || this.showErrContentForCheckResult ? a.createElement("div", {
                    className: "rating-modal-handler_media-err-content"
                }, v ? a.createElement("div", {
                    className: "rating-comment-check-with-media-check-logo"
                }, y.o.t(r.a.tips_media_check_low_apple_qc)) : null, s && this.showErrContentForCheckResult ? a.createElement("div", null, this.showErrMsgForCheckResult) : null, s ? g ? a.createElement("div", {
                    className: this.showErrContentForCheckResult ? "rating-comment-check-with-media-check" : ""
                }, u) : null : c ? a.createElement("div", {
                    className: this.showErrContentForCheckResult ? "rating-comment-check-with-media-check" : ""
                }, m) : null) : t ? a.createElement(ze, {
                    classname: "rating-hint-text-coin",
                    requirement: e,
                    imageCount: this.state.images.length,
                    videoCount: this.state.videos.length,
                    defaultVideoReview: o,
                    enableRatingCreationUIRevamp: n,
                    categoryCoin: this.props.categoryCoin,
                    characterCount: At(w)
                }) : null), a.createElement("div", {
                    className: "rating-modal-handler__rating-anonymous-wrapper"
                }, a.createElement(Ie.Z, {
                    checked: this.isExclude ? this.state.ratingAnonymous : !this.state.ratingAnonymous,
                    onClick: this.toggleRatingAnonymous
                }), a.createElement("div", {
                    style: {
                        marginLeft: 4
                    },
                    onClick: this.toggleRatingAnonymous
                }, this.renderName()))) : null)
            }
            getData() {
                var e;
                this.mediaRef = window.mbmb3
                if (!this.mediaRef)
                    return null;
                const {isUpdating: t} = this.props
                  , [_,a] = this.mediaRef.getValue();
                return _ ? null : (0,
                o.Z)({
                    itemid: this.props.item.itemid,
                    product_quality: this.state.ratingStar,
                    comment: this.state.comment
                }, a, {
                    tagids: Object.keys(this.state.tags).map(Number).filter((e => this.state.tags[e])),
                    anonymous: this.state.ratingAnonymous,
                    algo_template_abt: t ? null == (e = this.props.rating) ? void 0 : e.algo_template_abt : this.props.algoTemplateAbt,
                    template_tag_comments: (0,
                    o.Z)({}, this.templateTagComments),
                    template_tag_list: this.templateTags
                })
            }
            getEditData() {
                if (!this.mediaRef)
                    return null;
                const [e,t] = this.mediaRef.getValue();
                return e ? null : (0,
                o.Z)({
                    itemid: this.props.item.itemid,
                    comment: this.state.comment
                }, t, {
                    tagids: Object.keys(this.state.tags).filter((e => this.state.tags[e])),
                    anonymous: this.state.ratingAnonymous,
                    detailed_rating: {
                        product_quality: this.state.ratingStar,
                        seller_service: this.props.detailedRating.seller_service,
                        delivery_service: this.props.detailedRating.delivery_service
                    },
                    template_tag_comments: (0,
                    o.Z)({}, this.templateTagComments)
                })
            }
        }
        Zt.defaultProps = {
            showBottomBorder: !1
        };
        const Ut = Zt;
        var Vt = _(89548);
        const Ht = "GuwnmB"
          , Xt = "bFqf7g"
          , Gt = "Q1z1E5";
        var jt = _(14193)
          , Qt = _(659)
          , $t = _(98246);
        const Yt = "_G9Asz"
          , Kt = "CXdsX_"
          , {t: e_} = n.I18n
          , t_ = e => {
            const {direction: t, meta: _, categoryCoinList: o, coinLimitSetting: n} = e
              , s = ( () => {
                let e;
                switch ((0,
                le.Kd)()) {
                case "MX":
                case "CL":
                case "CO":
                    e = "";
                    break;
                case "SG":
                    e = "https://help.shopee.sg/s/article/How-to-write-a-high-quality-product-review-0222";
                    break;
                case "ID":
                    e = "https://help.shopee.co.id/s/article/Bagaimana-cara-menulis-ulasan-yang-baik";
                    break;
                case "VN":
                    e = "https://help.shopee.vn/s/article/Lam-The-Nao-De-Co-1-Bai-Viet-Danh-Gia-Chat-Luong";
                    break;
                case "MY":
                    e = "https://help.shopee.com.my/my/s/article/How-to-write-a-high-quality-product-review";
                    break;
                case "TW":
                    e = "https://help.shopee.tw/tw/s/article/%E5%A6%82%E4%BD%95%E6%92%B0%E5%AF%AB%E6%9C%89%E5%B9%AB%E5%8A%A9%E7%9A%84%E5%95%86%E5%93%81%E8%A9%95%E5%83%B";
                    break;
                case "TH":
                    e = "https://help.shopee.co.th/s/article/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%9E";
                    break;
                case "BR":
                    e = "https://help.shopee.com.br/s/article/Como-ajudar-os-compradores-dando-avalia%C3%A7%C3%B5es-de-qualidade";
                    break;
                case "PH":
                    e = "https://help.shopee.ph/ph/s/article/How-to-write-a-high-quality-product-review-ph";
                    break;
                case "PL":
                    e = "https://help.shopee.pl/portal/article/183";
                    break;
                case "ES":
                    e = "https://help.shopee.es/portal/article/69241-%C2%BFC%C3%B3mo-escribir-una-rese%C3%B1a-de-producto-de-alta-calidad?previousPage=secondary%20category&previousPage=other%20articles";
                    break;
                case "AR":
                    e = "https://help.shopee.com.ar/portal/article/86827 "
                }
                return e
            }
            )()
              , {show_pic_and_video: l, pic_and_video: d, show_pic_or_video: p, pic_or_video: c} = we(o)
              , m = n && (n.threshold || 0) > 0
              , u = n && (n.max_times || 0) > 0 && (n.duration || 0) > 0
              , g = {
                shopid: null == _ ? void 0 : _.shopId,
                orderid: null == _ ? void 0 : _.orderId
            }
              , h = (0,
            a.useRef)(null)
              , y = (0,
            $t.useTrackImpression)("RATING.imprReviewRewardCriteriaPanel", g)
              , v = (0,
            $t.useTrackClick)("RATING.clickReviewRewardCriteriaPanel", {});
            return (0,
            a.useEffect)(( () => {
                y(h.current)
            }
            ), [y]),
            i().createElement(Qt.Z, {
                arrowWidth: 28,
                arrowHeight: 10,
                margin: 0,
                arrowBackgroundColor: "#fff",
                position: "top" === t ? Qt.I.BOTTOM_RIGHT : Qt.I.TOP_LEFT,
                fixedPosition: !0,
                showArrow: !0,
                showBorder: !0,
                useSafeMargin: !1,
                target: i().createElement("span", {
                    onClick: () => {
                        v({
                            targetData: g
                        })
                    }
                }, "top" === t ? i().createElement("span", {
                    className: "wcnOnW"
                }, i().createElement("span", {
                    className: "RipHyo"
                })) : i().createElement("span", {
                    className: "m2q7Gh"
                }, "?")),
                popover: i().createElement("div", {
                    className: "wEQhHh",
                    ref: h
                }, i().createElement("div", {
                    className: "ByB4Vf"
                }, i().createElement("div", {
                    className: "m_hU0Q"
                }, e_(r.a.coins_panel_title)), i().createElement("div", {
                    className: "Q_kpc5"
                }, e_(r.a.coins_panel_tip, {
                    minimum_characters: null == _ ? void 0 : _.minimum_characters
                }))), i().createElement("div", {
                    className: "zroYrq",
                    style: {
                        display: p || l ? void 0 : "none"
                    }
                }, i().createElement("div", {
                    className: "o7g6Vs"
                }, e_(r.a.coins_content_title)), p ? i().createElement("div", {
                    className: Yt
                }, i().createElement("div", null, e_(r.a.coins_review_least_media, {
                    minimum_pictures: (null == _ ? void 0 : _.minimum_pictures) || 1,
                    minimum_videos: (null == _ ? void 0 : _.minimum_videos) || 1
                })), i().createElement("div", {
                    className: Kt
                }, c, " ", e_(r.a.coins))) : null, l ? i().createElement("div", {
                    className: Yt
                }, i().createElement("div", null, e_(r.a.coins_review_media)), i().createElement("div", {
                    className: Kt
                }, d, " ", e_(r.a.coins))) : null), i().createElement("div", {
                    className: "aO3Yoo"
                }, i().createElement("div", null, e_(r.a.coins_panel_footer_tips_one)), i().createElement("div", null, e_(r.a.coins_panel_footer_tips_two)), i().createElement("div", null, e_(r.a.coins_panel_footer_tips_three)), i().createElement("div", null, e_(r.a.coins_panel_footer_tips_four)), m ? i().createElement("div", null, e_(r.a.coins_panel_footer_tips_six, {
                    threshold: (0,
                    jt.JL)((null == n ? void 0 : n.threshold) || 0)
                })) : null, u ? i().createElement("div", null, e_(r.a.coins_panel_footer_tips_seven, {
                    duration: null == n ? void 0 : n.duration,
                    max_times: null == n ? void 0 : n.max_times
                })) : null, i().createElement("div", null, e_(r.a.coins_panel_footer_tips_five), i().createElement("a", {
                    href: s,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: s ? {
                        color: "#3789f7",
                        marginLeft: "0.25rem"
                    } : {
                        display: "none"
                    }
                }, e_(r.a.tips_see_examples))), "max_coins_varies_depending_on_item" === e_(r.a.max_coins_varies_depending_on_item) ? null : i().createElement("div", null, e_(r.a.max_coins_varies_depending_on_item))))
            })
        }
          , {t: __, tNode: a_} = n.I18n;
        class i_ extends a.PureComponent {
            constructor(e) {
                super(e),
                this.node = null,
                this.renderText = e => {
                    const {enableRatingCreationUIRevamp: t} = this.props;
                    return t ? a_("coins_earned_tip", {
                        coins_earned: i().createElement("span", {
                            className: "DNmGAi"
                        }, `${e} ${__(r.a.coins)}`)
                    }) : __(r.a.prev_old_coins_earned_tip, {
                        coins_earned: e
                    })
                }
                ,
                this.state = {
                    shown: !1,
                    top: 0
                }
            }
            componentDidMount() {
                const {getBannerHeight: e} = this.props;
                e && e(this.node && Number(this.node.clientHeight) || 0)
            }
            render() {
                const {meta: e, isMultiple: t, defaultVideoReview: _, categoryCoinList: a, coinLimitSetting: o} = this.props
                  , {pic_and_video: n} = we(a);
                return _ ? i().createElement("div", {
                    className: Ht,
                    ref: e => {
                        this.node = e
                    }
                }, i().createElement(Vt.Z, {
                    className: Xt
                }), i().createElement("span", {
                    className: Gt
                }, this.renderText(n)), i().createElement(t_, {
                    direction: "top",
                    meta: e,
                    categoryCoinList: a,
                    coinLimitSetting: o
                })) : i().createElement("div", {
                    className: Ht
                }, i().createElement(Vt.Z, {
                    className: Xt
                }), i().createElement("span", {
                    className: Gt
                }, __(t ? r.a.label_rating_banner_multiple_copy : r.a.pr_label_rating_banner, e)))
            }
        }
        const o_ = "vlajSX"
          , {t: r_} = n.I18n
          , n_ = {
            product_quality: 0,
            seller_service: 0,
            delivery_service: 0
        };
        class s_ extends a.Component {
            constructor(...e) {
                super(...e),
                this.handleRatingChange = (e, t) => {
                    const _ = this.props.detailed_rating;
                    switch (e) {
                    case "SELLER":
                        this.props.onRatingChange((0,
                        o.Z)({}, _, {
                            seller_service: t
                        }));
                        break;
                    case "DELIVERY":
                        this.props.onRatingChange((0,
                        o.Z)({}, _, {
                            delivery_service: t
                        }))
                    }
                }
            }
            render() {
                const {detailed_rating: e=n_, isShopeeSpecialShop: t} = this.props;
                return a.createElement("div", null, a.createElement("div", {
                    className: "fFC4f6"
                }, r_(r.a.label_about_service)), a.createElement("div", {
                    className: "d5oZax"
                }, a.createElement("div", {
                    className: o_
                }, a.createElement(z.kG, {
                    title: r_(t ? r.a.low_rating_detail_seller_service_idscs : r.a.low_rating_detail_seller_service),
                    rating: e.seller_service,
                    onRatingChange: this.handleRatingChange.bind(this, "SELLER"),
                    size: 26
                })), a.createElement("div", {
                    className: o_
                }, a.createElement(z.kG, {
                    title: r_(r.a.low_rating_detail_logistic_service),
                    rating: e.delivery_service,
                    onRatingChange: this.handleRatingChange.bind(this, "DELIVERY"),
                    size: 26
                }))))
            }
        }
        const l_ = s_
          , d_ = "sOvnRU"
          , p_ = "nmGhXO"
          , c_ = "texHG6"
          , {t: m_} = n.I18n
          , u_ = []
          , g_ = {
            product_quality: 0,
            seller_service: 0,
            delivery_service: 0
        };
        class h_ extends a.PureComponent {
            constructor(e) {
                super(e),
                this._ratingHandlers = [],
                this.bannerHeight = 0,
                this.bottomRef = a.createRef(),
                this.handleImageReadyStateChange = e => {
                    this.setState({
                        isImageReady: e.ready
                    }, this.props.forceFormUpdate)
                }
                ,
                this.handleReadyStateChange = () => {
                    this.props.forceFormUpdate()
                }
                ,
                this.getFilteredItems = () => this.props.items || u_,
                this.getRatingTemplateTags = () => [],
                this.getData = () => {
                    const e = this.props.items.length
                      , t = [];
                    for (let _ = 0; _ < e; _++) {
                        this._ratingHandlers[_] = window.mbmb2_list[_]
                        const e = this._ratingHandlers[_];
                        //const e = window.mbmb2
                        if (e) {
                            const _ = e.getData();
                            _ && t.push(_)
                        }
                    }
                    return {
                        seller_service: this.state.detailed_rating.seller_service,
                        delivery_service: this.state.detailed_rating.delivery_service,
                        rate_items_data: t
                    }
                }
                ,
                this.handleRatingDetailChangeService = e => {
                    this.props.updateSellerService(e),
                    this.props.forceFormUpdate(),
                    this.setState({
                        detailed_rating: e
                    })
                }
                ,
                this.isReady = () => {
                    const {rate_items_data: e} = this.getData();
                    return this.props.items.length === e.length && this.state.isImageReady
                }
                ,
                this.clearMediaTimeout = () => {
                    Object.values(this._ratingHandlers).forEach((e => {
                        null == e || e.clearMediaTimeout()
                    }
                    ))
                }
                ,
                this.isShowCriteriaBottom = () => {
                    const {limitValidationMap: e} = this.props
                      , t = e && Object.values(e)[0].limits_info;
                    return {
                        passItemArray: e && Object.keys(e).filter((t => e[t].passed)),
                        coinLimitSetting: t
                    }
                }
                ,
                this.isShowBanner = () => {
                    const {categoryCoinList: e} = this.props
                      , {passItemArray: t} = this.isShowCriteriaBottom()
                      , {pic_and_video: _} = we(e, t);
                    return !!((!t || t && t.length > 0) && _ > 0)
                }
                ,
                this.getBannerHeight = e => {
                    this.bannerHeight = e
                }
                ,
                this.scrollToBottom = () => {
                    var e;
                    null == (e = this.bottomRef.current) || e.scrollIntoView()
                }
                ;
                const {ratingMeta: t} = this.props;
                this.state = {
                    isImageReady: !0,
                    detailed_rating: (0,
                    o.Z)({}, null != t && t.default_rating_star ? {
                        product_quality: t.default_rating_star,
                        seller_service: t.default_rating_star,
                        delivery_service: t.default_rating_star
                    } : g_)
                }
            }
            componentDidMount() {
                const {isShowCoinBanner: e} = this.props;
                window.mbmb = this
                this.props.updateSellerService(this.state.detailed_rating),
                e && e(this.isShowBanner(), this.bannerHeight)
            }
            render() {
                const {limitValidationMap: e, shopId: t, orderId: _} = this.props
                  , i = this.getFilteredItems()
                  , {commentCheckMap: n, deleteCommentCheckItemId: s, collectLocationMap: l} = this.props
                  , d = i.length
                  , p = this.isShowBanner()
                  , {coinLimitSetting: c} = this.isShowCriteriaBottom()
                  , m = (0,
                o.Z)({}, this.props.ratingMeta, {
                    shopId: t,
                    orderId: _
                });
                return a.createElement(a.Fragment, null, p ? a.createElement(i_, {
                    isMultiple: i.length > 1,
                    orderLen: i.length,
                    meta: m,
                    categoryCoinList: this.props.categoryCoinList,
                    defaultVideoReview: this.props.defaultVideoReview,
                    getBannerHeight: this.getBannerHeight,
                    coinLimitSetting: c,
                    enableRatingCreationUIRevamp: this.props.enableRatingCreationUIRevamp
                }) : null, i.map(( (t, _) => {
                    var i, o, r, p;
                    return l && l(t.itemid, _ + 1),
                    a.createElement(Ut, {
                        key: _,
                        ref: e => {
                            this._ratingHandlers[_] = e
                        }
                        ,
                        item: t,
                        rating: null,
                        ref: this.setModalRef,
                        ratingMeta: this.props.ratingMeta,
                        detailedRating: this.state.detailed_rating,
                        onReadyStateChange: this.handleReadyStateChange,
                        onImageReadyStateChange: this.handleImageReadyStateChange,
                        showBottomBorder: _ < d - 1,
                        orderId: this.props.orderId,
                        userId: this.props.userId,
                        categoryCoin: null == (i = this.props.categoryCoinList) ? void 0 : i[t.itemid],
                        isItemValidationCheckPass: (!e || (null == (o = e[t.itemid]) ? void 0 : o.passed)) && (null != (r = null == (p = this.props.ratingMeta) ? void 0 : p.coins_earned) ? r : 0) > 0,
                        username: this.props.username,
                        defaultRatingAnonymous: this.props.defaultRatingAnonymous,
                        defaultVideoReview: this.props.defaultVideoReview,
                        enableRatingCreationUIRevamp: this.props.enableRatingCreationUIRevamp,
                        defaultRatingReviewTemplate: this.props.defaultRatingReviewTemplate,
                        collectMediaCheck: this.props.collectMediaCheck,
                        defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck,
                        collectAllMedia: this.props.collectAllMedia,
                        cancelCollectMedia: this.props.cancelCollectMedia,
                        commentCheckMap: n,
                        deleteCommentCheckItemId: s,
                        defaultRatingCommentCheck: this.props.defaultRatingCommentCheck,
                        showDialogNow: this.props.showDialogNow,
                        collectCoinItem: this.props.collectCoinItem,
                        cannotRedShow: this.props.cannotRedShow,
                        algoTemplateAbt: this.props.algoTemplateAbt,
                        algoTagHints: t.algo_tag_hints
                    })
                }
                )), a.createElement("div", {
                    id: "wrapper",
                    ref: this.bottomRef
                }, a.createElement(l_, {
                    detailed_rating: this.state.detailed_rating,
                    onRatingChange: this.handleRatingDetailChangeService,
                    isShopeeSpecialShop: this.props.isShopeeSpecialShop
                })), !p && a.createElement("div", {
                    className: "dauclT"
                }, a.createElement("span", null, m_(r.a.coins_panel_title)), a.createElement(t_, {
                    direction: "bottom",
                    meta: m,
                    categoryCoinList: this.props.categoryCoinList,
                    coinLimitSetting: c
                })))
            }
        }
        
        const y_ = e => a.createElement(g.ep, (0,
        o.Z)({
            Component: h_,
            //ref:window.mbmb
        }, e))
          , v_ = "ynweAm"
          , f_ = "Ec27a7"
          , {t: b_} = n.I18n
          , w_ = {
            seller_service: 0,
            delivery_service: 0
        };
        class k_ extends a.Component {
            constructor(e) {
                var t, _;
                super(e),
                this._ratingHandler = null,
                this.originTemplateTags = [],
                this.getLatestTags = () => {
                    const {rating: e} = this.state;
                    this.props.defaultRatingReviewTemplate && (this.setState({
                        loading: !0
                    }),
                    l.Cm.getItemRating({
                        cmtid: e.cmtid,
                        is_seller: 0,
                        shopid: e.shopid
                    }).then((e => {
                        const {data: t} = e;
                        this.setState({
                            rating: (0,
                            o.Z)({}, this.state.rating, {
                                template_tags: (null == t ? void 0 : t.template_tags) || []
                            }),
                            loading: !1,
                            error: !1
                        })
                    }
                    )).catch(( () => {
                        this.setState({
                            loading: !1,
                            error: !0
                        })
                    }
                    )))
                }
                ,
                this.handleImageReadyStateChange = e => {
                    this.setState({
                        isImageReady: e.ready
                    }, this.props.forceFormUpdate)
                }
                ,
                this.handleReadyStateChange = () => {
                    this.props.forceFormUpdate()
                }
                ,
                this.handleRatingDetailChange = () => {
                    this.props.forceFormUpdate()
                }
                ,
                this.handleRatingDetailChangeService = e => {
                    this.props.updateSellerService(e),
                    this.props.forceFormUpdate(),
                    this.setState({
                        detailed_rating: e
                    })
                }
                ,
                this.setRatingHandler = e => {
                    this._ratingHandler = e
                }
                ,
                this.getData = () => this._ratingHandler ? this._ratingHandler.getEditData() : null,
                this.getRatingTemplateTags = () => this.state.rating.template_tags || [],
                this.isReady = () => this.state.isImageReady,
                this.scrollToBottom = () => {
                    const e = document.getElementById("wrapper");
                    e && e.scrollIntoView()
                }
                ,
                this.clearMediaTimeout = () => {
                    var e;
                    null == (e = this._ratingHandler) || e.clearMediaTimeout()
                }
                ;
                const {ratingMeta: a} = this.props;
                this.state = {
                    isImageReady: !0,
                    loading: !1,
                    error: !1,
                    rating: (0,
                    o.Z)({}, e.rating),
                    detailed_rating: (0,
                    o.Z)({}, null != (t = e.rating) && null != (t = t.detailed_rating) && t.delivery_service || null != (_ = e.rating) && null != (_ = _.detailed_rating) && _.seller_service ? e.rating.detailed_rating : a ? {
                        seller_service: a.default_rating_star,
                        delivery_service: a.default_rating_star
                    } : w_)
                },
                this.originTemplateTags = e.rating.template_tags || []
            }
            componentDidMount() {
                this.props.forceFormUpdate(),
                this.getLatestTags(),
                this.props.updateSellerService(this.state.detailed_rating)
            }
            renderNewLoading() {
                return a.createElement(w.Z, {
                    hideOverlay: !0,
                    show: !0
                })
            }
            renderError() {
                return a.createElement("div", {
                    className: d_
                }, a.createElement("span", {
                    className: p_
                }, b_(r.a.rating_loading_failed)), a.createElement("div", {
                    className: c_,
                    onClick: this.getLatestTags
                }, b_(r.a.rating_btn_name_retry)))
            }
            render() {
                const {rating: e, loading: t, error: _} = this.state
                  , {ratingMeta: i, orderId: o, userId: r} = this.props;
                return t ? this.renderNewLoading() : _ ? this.renderError() : a.createElement("div", {
                    className: "rating-modal-edit-item__container"
                }, a.createElement(Ut, {
                    ref: this.setRatingHandler,
                    item: e.product_items && e.product_items[0],
                    rating: e,
                    ratingMeta: i,
                    originTemplateTags: this.originTemplateTags,
                    onReadyStateChange: this.handleReadyStateChange,
                    onImageReadyStateChange: this.handleImageReadyStateChange,
                    detailedRating: this.state.detailed_rating,
                    orderId: o,
                    userId: r,
                    username: this.props.username,
                    defaultRatingAnonymous: this.props.defaultRatingAnonymous,
                    defaultVideoReview: this.props.defaultVideoReview,
                    enableRatingCreationUIRevamp: this.props.enableRatingCreationUIRevamp,
                    defaultRatingReviewTemplate: this.props.defaultRatingReviewTemplate,
                    isUpdating: !0,
                    collectMediaCheck: this.props.collectMediaCheck,
                    defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck,
                    collectAllMedia: this.props.collectAllMedia,
                    cancelCollectMedia: this.props.cancelCollectMedia,
                    commentCheckMap: this.props.commentCheckMap,
                    deleteCommentCheckItemId: this.props.deleteCommentCheckItemId,
                    defaultRatingCommentCheck: this.props.defaultRatingCommentCheck,
                    showDialogNow: this.props.showDialogNow,
                    algoTemplateAbt: e.algo_template_abt,
                    algoTagHints: e.algo_tag_hints
                }), a.createElement("div", {
                    id: "wrapper"
                }, a.createElement(l_, {
                    detailed_rating: this.state.detailed_rating,
                    onRatingChange: this.handleRatingDetailChangeService,
                    isShopeeSpecialShop: this.props.isShopeeSpecialShop
                })))
            }
        }
        const S_ = e => a.createElement(g.ep, (0,
        o.Z)({
            Component: k_
        }, e))
          , {t: E_} = n.I18n;
        function C_({coinsAwarded: e}) {
            return i().createElement("div", {
                className: "ecmASt"
            }, i().createElement(Vt.Z, {
                className: "OQJc3S"
            }), i().createElement("div", {
                className: "KvP4dB"
            }, E_(r.a.pr_label_rating_coins_awarded, {
                coins_earned: e
            })))
        }
        const R_ = function(e) {
            return i().createElement("svg", (0,
            o.Z)({
                width: "54",
                height: "54",
                viewBox: "0 0 54 54",
                fill: "none"
            }, e), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M27 53C41.3594 53 53 41.3594 53 27C53 12.6406 41.3594 1 27 1C12.6406 1 1 12.6406 1 27C1 41.3594 12.6406 53 27 53Z",
                stroke: "#66CC00",
                strokeWidth: "2"
            }), i().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M26.7985 36.098L40.3628 22.263C41.273 21.3528 41.1992 19.8032 40.198 18.802C39.1968 17.8008 37.6472 17.727 36.737 18.6372L24.7717 30.8413L17.263 24.0774C16.3528 23.1672 14.8032 23.241 13.802 24.2422C12.8008 25.2435 12.727 26.7931 13.6372 27.7033L23.2458 36.3588C24.156 37.269 25.7056 37.1952 26.7069 36.194C26.7383 36.1625 26.7689 36.1305 26.7985 36.098Z",
                fill: "#66CC00"
            }))
        }
          , {t: P_} = n.I18n;
        function N_(e) {
            const {text: t} = e;
            return i().createElement("div", {
                className: "bym9XP"
            }, i().createElement(R_, {
                className: "fqsljO"
            }), i().createElement("div", {
                className: "MYWtCx"
            }, t || P_(r.a.pr_toast_rating_success)))
        }
        const J_ = _.p + "shoprating/a02ade81006a12b6a5c4.png";
        function M_() {
            return i().createElement("div", {
                className: "NK1kxR"
            }, i().createElement("div", {
                className: "DRhvQk"
            }, i().createElement("img", {
                src: J_,
                width: 48,
                height: 48,
                alt: "loading spinner"
            })))
        }
        const x_ = _.p + "shoprating/96d47f285709fcd4b087.png";
        var T_ = _(55864);
        const {t: O_} = n.I18n;
        class I_ extends a.Component {
            constructor(e) {
                super(e),
                this.editMediaRef = null,
                this.updateMediaRef = null,
                this.useReviewTemplate = !1,
                this.commentQuality = {
                    [F_.EDIT]: Ft.normal,
                    [F_.UPDATE]: Ft.normal
                },
                this.showErrContentForCheckResult = {
                    [F_.EDIT]: !1,
                    [F_.UPDATE]: !1
                },
                this.showErrMsgForCheckResult = {
                    [F_.EDIT]: "",
                    [F_.UPDATE]: ""
                },
                this.isEditChanged = !1,
                this.submitData = {},
                this.getRatingTemplateTags = () => [],
                this.isReady = () => {
                    var e, t, _;
                    const a = this.submitData;
                    return 1 === this.props.rating.editable || !!(null != (e = a.follow_up) && e.comment || null != (t = a.follow_up) && null != (t = t.photos) && t.length || null != (_ = a.follow_up) && null != (_ = _.videos) && _.length)
                }
                ,
                this.renderNewLoading = () => i().createElement(w.Z, {
                    hideOverlay: !0,
                    show: !0
                }),
                this.handleRatingChange = e => {
                    this.submitData.detailed_rating || (this.submitData.detailed_rating = {}),
                    this.submitData.detailed_rating.product_quality = e,
                    this.setState({
                        ratingStar: e
                    }),
                    this.props.updateStar(this.submitData.detailed_rating),
                    this.props.forceFormUpdate()
                }
                ,
                this.scrollToBottom = () => {
                    const e = document.getElementById("wrapper");
                    e && e.scrollIntoView()
                }
                ,
                this.getData = () => {
                    var e, t, _, a;
                    const [i,r] = (null == (e = this.editMediaRef) ? void 0 : e.getValue()) || []
                      , [n,s] = (null == (t = this.updateMediaRef) ? void 0 : t.getValue()) || []
                      , l = (0,
                    o.Z)({}, this.submitData);
                    this.isEditChanged ? l.item_rating = (0,
                    o.Z)({}, l.item_rating, {
                        videos: (null == r ? void 0 : r.videos) || [],
                        photos: ((null == r ? void 0 : r.photos) || []).map((e => ({
                            image_id: e,
                            cover_image_id: e
                        })))
                    }) : delete l.item_rating;
                    const d = l.follow_up || {};
                    return d.photos = ((null == s ? void 0 : s.photos) || []).map((e => ({
                        image_id: e,
                        cover_image_id: e
                    }))),
                    d.videos = (null == s ? void 0 : s.videos) || [],
                    null != d && d.comment || null != d && null != (_ = d.photos) && _.length || null != d && null != (a = d.videos) && a.length || delete l.follow_up,
                    l
                }
                ,
                this.onCommentChange = e => {
                    const {deleteCommentCheckItemId: t} = this.props;
                    this.submitData.item_rating || (this.submitData.item_rating = {}),
                    this.submitData.item_rating.comment = e,
                    this.isEditChanged = !0,
                    this.setState({
                        comment: e
                    }),
                    t && t(F_.EDIT),
                    this.props.forceFormUpdate()
                }
                ,
                this.onTemplateChange = (e, t) => {
                    const {deleteCommentCheckItemId: _} = this.props;
                    this.submitData.item_rating || (this.submitData.item_rating = {});
                    const a = (0,
                    o.Z)({}, this.state.templateTagComments, {
                        [e]: t
                    });
                    this.submitData.item_rating.template_tag_comments = a,
                    this.isEditChanged = !0,
                    this.setState({
                        templateTagComments: a
                    }),
                    _ && _(F_.EDIT),
                    this.props.forceFormUpdate()
                }
                ,
                this.onUpdateCommentChange = e => {
                    const {deleteCommentCheckItemId: t} = this.props;
                    this.submitData.follow_up || (this.submitData.follow_up = {}),
                    this.submitData.follow_up.comment = e,
                    this.setState({
                        followUpComment: e
                    }),
                    t && t(F_.UPDATE),
                    this.props.forceFormUpdate()
                }
                ,
                this.clearMediaTimeout = () => {
                    var e, t;
                    null == (e = this.editMediaRef) || e.clearMediaTimeout(),
                    null == (t = this.updateMediaRef) || t.clearMediaTimeout()
                }
                ,
                this.handleImageReadyStateChange = e => {
                    this.setState({
                        isImageReady: e.ready
                    }, this.props.forceFormUpdate)
                }
                ,
                this.handleMediasChange = ({images: e, videos: t}) => {
                    this.setState({
                        images: e,
                        videos: t
                    }),
                    this.submitData.item_rating = (0,
                    o.Z)({}, this.submitData.item_rating, {
                        photos: e.map((e => ({
                            image_id: e,
                            cover_image_id: e
                        }))),
                        videos: t
                    }),
                    this.isEditChanged = !0,
                    this.props.forceFormUpdate()
                }
                ,
                this.handleUpdateMediasChange = ({images: e, videos: t}) => {
                    this.setState({
                        updateImages: e,
                        updateVideos: t
                    }),
                    this.submitData.follow_up = (0,
                    o.Z)({}, this.submitData.follow_up, {
                        photos: e.map((e => ({
                            image_id: e,
                            cover_image_id: e
                        }))),
                        videos: t
                    }),
                    this.props.forceFormUpdate()
                }
                ,
                this.getCommentCheck = () => {
                    const {commentCheckMap: e={}} = this.props
                      , t = Object.keys(e);
                    this.commentQuality = {},
                    t.forEach((t => {
                        const _ = e[t] || {
                            text: 0,
                            emoji: 0,
                            total: 0
                        };
                        this.commentQuality[t] = _.total
                    }
                    ))
                }
                ,
                this.renderTipsForComment = () => {
                    this.getCommentCheck();
                    const e = Object.keys(this.commentQuality);
                    this.showErrContentForCheckResult = {},
                    this.showErrMsgForCheckResult = {},
                    e.forEach((e => {
                        this.commentQuality[e] === Ft.normal ? (this.showErrContentForCheckResult[e] = !1,
                        this.showErrMsgForCheckResult[e] = "") : this.commentQuality[e] === Ft.low ? (this.showErrContentForCheckResult[e] = !0,
                        this.showErrMsgForCheckResult[e] = O_(r.a.tips_comment_content_edit_low)) : this.commentQuality[e] === Ft.exLow && (this.showErrContentForCheckResult[e] = !0,
                        this.showErrMsgForCheckResult[e] = O_(r.a.tips_comment_content_exlow))
                    }
                    ))
                }
                ,
                this.controlContent = e => {
                    const {showDialogNow: t} = this.props;
                    t || this.setState({
                        currentMediaErrStatus: (0,
                        o.Z)({}, this.state.currentMediaErrStatus, {
                            [e]: this.state.showMediaCheckErrContent[e]
                        }),
                        currentMediaErrContent: (0,
                        o.Z)({}, this.state.currentMediaErrContent, {
                            [e]: this.state.showMediaErrContent[e]
                        })
                    })
                }
                ,
                this.isShowMediaCheckErr = (e, t="") => {
                    const {type: _=0, videos: a=0, photos: i=0, hasAppleLogo: n} = e;
                    let s = "";
                    if (_ === Bt.EX_LOW || _ === Bt.LOW || _ === Bt.NO_READY) {
                        const {defaultRatingCommentCheck: l} = this.props
                          , {collectObj: d} = e
                          , {blur: p, blank: c, dark: m} = d;
                        let u = [p ? "blur" : void 0, c ? "blank" : void 0, m ? "dark" : void 0];
                        if (u = u.filter((e => void 0 !== e)),
                        l) {
                            const e = _ === Bt.EX_LOW ? "exlow" : "edit_low";
                            1 === u.length ? u.includes("blank") ? s = O_(`tips_media_content_1_${e}`) : u.includes("blur") ? s = O_(`tips_media_content_2_${e}`) : u.includes("dark") && (s = O_(`tips_media_content_3_${e}`)) : 2 === u.length ? u.includes("blank") && u.includes("blur") ? s = O_(`tips_media_content_4_${e}`) : u.includes("blank") && u.includes("dark") ? s = O_(`tips_media_content_5_${e}`) : u.includes("blur") && u.includes("dark") && (s = O_(`tips_media_content_6_${e}`)) : s = O_(`tips_media_content_7_${e}`)
                        } else
                            a && i ? 1 === u.length ? u.includes("blur") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_3_1) : O_(r.a.tips_medias_quality_low_edit_3_1) : u.includes("blank") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_3_2) : O_(r.a.tips_medias_quality_low_edit_3_2) : u.includes("dark") && (s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_3_3) : O_(r.a.tips_medias_quality_low_edit_3_3)) : 2 === u.length ? u.includes("blur") && u.includes("blank") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_3_4) : O_(r.a.tips_medias_quality_low_edit_3_4) : u.includes("blur") && u.includes("dark") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_3_5) : O_(r.a.tips_medias_quality_low_edit_3_5) : u.includes("blank") && u.includes("dark") && (s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_3_6) : O_(r.a.tips_medias_quality_low_edit_3_6)) : 3 === u.length && (s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_3_7) : O_(r.a.tips_medias_quality_low_edit_3_7)) : a && !i ? 1 === u.length ? u.includes("blur") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_2_1) : O_(r.a.tips_medias_quality_low_edit_2_1) : u.includes("blank") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_2_2) : O_(r.a.tips_medias_quality_low_edit_2_2) : u.includes("dark") && (s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_2_3) : O_(r.a.tips_medias_quality_low_edit_2_3)) : 2 === u.length ? u.includes("blur") && u.includes("blank") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_2_4) : O_(r.a.tips_medias_quality_low_edit_2_4) : u.includes("blur") && u.includes("dark") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_2_5) : O_(r.a.tips_medias_quality_low_edit_2_5) : u.includes("blank") && u.includes("dark") && (s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_2_6) : O_(r.a.tips_medias_quality_low_edit_2_6)) : 3 === u.length && (s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_2_7) : O_(r.a.tips_medias_quality_low_edit_2_7)) : !a && i && (1 === u.length ? u.includes("blur") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_1_1) : O_(r.a.tips_medias_quality_low_edit_1_1) : u.includes("blank") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_1_2) : O_(r.a.tips_medias_quality_low_edit_1_2) : u.includes("dark") && (s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_1_3) : O_(r.a.tips_medias_quality_low_edit_1_3)) : 2 === u.length ? u.includes("blur") && u.includes("blank") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_1_4) : O_(r.a.tips_medias_quality_low_edit_1_4) : u.includes("blur") && u.includes("dark") ? s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_1_5) : O_(r.a.tips_medias_quality_low_edit_1_5) : u.includes("blank") && u.includes("dark") && (s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_1_6) : O_(r.a.tips_medias_quality_low_edit_1_6)) : 3 === u.length && (s = _ === Bt.EX_LOW ? O_(r.a.tips_medias_quality_ex_1_7) : O_(r.a.tips_medias_quality_low_edit_1_7)));
                        this.setState({
                            showMediaCheckErrContent: (0,
                            o.Z)({}, this.state.showMediaCheckErrContent, {
                                [t]: !!s
                            }),
                            showMediaErrContent: (0,
                            o.Z)({}, this.state.showMediaErrContent, {
                                [t]: s
                            }),
                            mediaQualityType: (0,
                            o.Z)({}, this.state.mediaQualityType, {
                                [t]: _
                            }),
                            hasAppleLogo: (0,
                            o.Z)({}, this.state.hasAppleLogo, {
                                [t]: n
                            })
                        }, ( () => {
                            const {defaultRatingCommentCheck: e} = this.props;
                            e && this.controlContent(t)
                        }
                        ))
                    } else
                        this.setState({
                            showMediaCheckErrContent: (0,
                            o.Z)({}, this.state.showMediaCheckErrContent, {
                                [t]: !1
                            }),
                            mediaQualityType: (0,
                            o.Z)({}, this.state.mediaQualityType, {
                                [t]: Bt.NORMAL
                            }),
                            hasAppleLogo: (0,
                            o.Z)({}, this.state.hasAppleLogo, {
                                [t]: n
                            })
                        }, ( () => {
                            const {defaultRatingCommentCheck: e} = this.props;
                            e && this.controlContent(t)
                        }
                        ))
                }
                ,
                this.showEditForm = () => {
                    this.setState({
                        isEdit: !0
                    })
                }
                ;
                const {rating: t, ratingMeta: _} = e
                  , {images: a=[], videos: n=[], template_tags: s, cmtid: l, shopid: d, orderid: p, detailed_rating: c} = t
                  , {tmpTagsComments: m, comments: u} = (0,
                g.mx)((null == t ? void 0 : t.template_tags) || [], null == t ? void 0 : t.comment);
                this.submitData = {
                    cmt_id: l,
                    shop_id: d,
                    order_id: p,
                    detailed_rating: {},
                    follow_up: {},
                    item_rating: {
                        comment: u,
                        template_tag_comments: m
                    }
                },
                this.useReviewTemplate = !(null == s || !s.length),
                this.handleRatingChange((null == c ? void 0 : c.product_quality) || 0),
                this.state = {
                    loading: !1,
                    ratingStar: (null == c ? void 0 : c.product_quality) || 0,
                    showMediaCheckErrContent: {
                        [F_.EDIT]: !1,
                        [F_.UPDATE]: !1
                    },
                    showMediaErrContent: {
                        [F_.EDIT]: "",
                        [F_.UPDATE]: ""
                    },
                    mediaQualityType: {
                        [F_.EDIT]: Bt.NORMAL,
                        [F_.UPDATE]: Bt.NORMAL
                    },
                    currentMediaErrContent: {
                        [F_.EDIT]: "",
                        [F_.UPDATE]: ""
                    },
                    currentMediaErrStatus: {
                        [F_.EDIT]: !1,
                        [F_.UPDATE]: !1
                    },
                    comment: u,
                    followUpComment: "",
                    isImageReady: !0,
                    templateTagComments: m || {},
                    images: a,
                    videos: n,
                    isEdit: !1,
                    updateImages: [],
                    updateVideos: [],
                    hasAppleLogo: {
                        [F_.EDIT]: !1,
                        [F_.UPDATE]: !1
                    }
                }
            }
            render() {
                var e, t, _, a, s;
                const {loading: l, mediaQualityType: d, comment: p, templateTagComments: c, currentMediaErrStatus: m, showMediaCheckErrContent: u, currentMediaErrContent: g, showMediaErrContent: h, isEdit: v, followUpComment: f, images: b, videos: w, updateImages: k, updateVideos: S, hasAppleLogo: E} = this.state
                  , {ratingMeta: C, rating: R} = this.props
                  , P = this.props.defaultRatingCommentCheck
                  , N = [...R.videos || [], ...R.images || []];
                if (l)
                    return this.renderNewLoading();
                this.renderTipsForComment();
                const J = !(R.comment || null != (e = R.images) && e.length || null != (t = R.videos) && t.length)
                  , M = this.commentQuality[F_.EDIT]
                  , x = d[F_.EDIT]
                  , T = m[F_.EDIT]
                  , O = !!(null != (_ = R.videos) && _.length || null != (a = R.images) && a.length);
                return i().createElement(i().Fragment, null, i().createElement("div", {
                    className: f_,
                    style: {
                        marginLeft: "-30px",
                        width: "calc(100% + 60px)"
                    }
                }), i().createElement("div", {
                    className: "rating-modal-edit-item__container"
                }, i().createElement("div", {
                    className: V()("rating-modal-handler__container")
                }, i().createElement(re, {
                    item: (0,
                    o.Z)({}, null == (s = R.product_items) ? void 0 : s[0], {
                        name: n.I18n.t(r.a.product_quality_rating),
                        model_name: "",
                        model_names: []
                    }),
                    className: "MOIN2r",
                    bottomNode: i().createElement("div", {
                        style: {
                            marginLeft: -5,
                            marginTop: "8px"
                        },
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }, i().createElement(z.kG, {
                        size: 29,
                        rating: this.state.ratingStar,
                        onRatingChange: this.handleRatingChange
                    }))
                }), i().createElement("div", {
                    className: f_,
                    style: {
                        marginTop: "16px",
                        marginBottom: "4px"
                    }
                }), v ? i().createElement("div", {
                    className: v_
                }, this.useReviewTemplate ? i().createElement(Tt, {
                    templateTags: R.template_tags || [],
                    onCommentChange: this.onCommentChange,
                    onTemplateChange: this.onTemplateChange,
                    value: p,
                    templateTagComments: c,
                    commentQuality: M,
                    canGetCoin: !1,
                    mediaQuantity: x,
                    minimum_characters: (null == C ? void 0 : C.minimum_characters) || 0
                }) : i().createElement("div", {
                    style: {
                        position: "relative"
                    }
                }, i().createElement(Oe.Z, {
                    value: p,
                    onChange: e => {
                        const t = e.target.value;
                        this.onCommentChange(t)
                    }
                    ,
                    placeholder: O_(r.a.label_review_template_newhint),
                    style: M === Ft.exLow || M === Ft.low ? {
                        border: "2px solid #EE2C4A",
                        transition: "none"
                    } : {}
                })), O ? i().createElement(St, {
                    ref: e => {
                        this.editMediaRef = e
                    }
                    ,
                    orderId: this.props.orderId,
                    images: b || [],
                    videos: w || [],
                    onStateChange: this.handleImageReadyStateChange,
                    defaultVideoReview: this.props.defaultVideoReview,
                    onMediasChange: this.handleMediasChange,
                    itemId: this.props.rating.itemid,
                    shopId: this.props.rating.shopid,
                    isShowMediaCheckErr: this.isShowMediaCheckErr,
                    collectMediaCheck: this.props.collectMediaCheck,
                    defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck,
                    collectAllMedia: this.props.collectAllMedia,
                    cancelCollectMedia: this.props.cancelCollectMedia,
                    showDialogNow: this.props.showDialogNow,
                    defaultRatingCommentCheck: P,
                    cannotRedShow: !1,
                    checkItemKey: F_.EDIT
                }) : null, (P ? T : u[F_.EDIT]) || this.showErrContentForCheckResult[F_.EDIT] || E[F_.EDIT] ? i().createElement("div", {
                    className: "rating-modal-handler_media-err-content"
                }, E[F_.EDIT] ? i().createElement("div", {
                    className: "rating-comment-check-with-media-check-logo"
                }, y.o.t(r.a.tips_media_check_low_apple_qc)) : null, P && this.showErrContentForCheckResult[F_.EDIT] ? i().createElement("div", null, this.showErrMsgForCheckResult[F_.EDIT]) : null, P ? T ? i().createElement("div", {
                    className: this.showErrContentForCheckResult[F_.EDIT] ? "rating-comment-check-with-media-check" : ""
                }, g[F_.EDIT]) : null : u[F_.EDIT] ? i().createElement("div", {
                    className: this.showErrContentForCheckResult[F_.EDIT] ? "rating-comment-check-with-media-check" : ""
                }, h[F_.EDIT]) : null) : null) : J ? null : i().createElement("div", null, i().createElement(q.t, {
                    isHidden: !1,
                    comment: R.comment,
                    templateTags: R.template_tags || [],
                    hasTemplateTag: !!R.has_template_tag,
                    suffixNode: 1 === R.editable ? i().createElement("span", {
                        onClick: this.showEditForm,
                        className: "mjDsBq"
                    }, i().createElement("img", {
                        className: "TpqF5a",
                        src: x_,
                        alt: "edit"
                    }), O_(r.a.pr_order_purchase_label_edit)) : void 0
                }), i().createElement("div", {
                    style: {
                        marginTop: R.comment ? 0 : "25px"
                    }
                }, N.length ? i().createElement(T_.DL, {
                    images: N
                }) : null)), i().createElement("div", {
                    className: "N2CwzE",
                    style: {
                        marginTop: J ? "16px" : 0
                    }
                }, O_(r.a.update)), i().createElement("div", {
                    className: v_
                }, i().createElement("div", {
                    style: {
                        position: "relative"
                    }
                }, i().createElement(Oe.Z, {
                    value: f,
                    onChange: e => {
                        const t = e.target.value;
                        this.onUpdateCommentChange(t)
                    }
                    ,
                    placeholder: O_(r.a.label_review_template_newhint),
                    style: this.commentQuality[F_.UPDATE] === Ft.exLow || this.commentQuality[F_.UPDATE] === Ft.low ? {
                        border: "2px solid #EE2C4A",
                        transition: "none"
                    } : {}
                })), i().createElement(St, {
                    ref: e => {
                        this.updateMediaRef = e
                    }
                    ,
                    orderId: this.props.orderId,
                    images: k,
                    videos: S,
                    onStateChange: this.handleImageReadyStateChange,
                    defaultVideoReview: this.props.defaultVideoReview,
                    onMediasChange: this.handleUpdateMediasChange,
                    itemId: this.props.rating.itemid,
                    shopId: this.props.rating.shopid,
                    isShowMediaCheckErr: this.isShowMediaCheckErr,
                    collectMediaCheck: this.props.collectMediaCheck,
                    defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck,
                    collectAllMedia: this.props.collectAllMedia,
                    cancelCollectMedia: this.props.cancelCollectMedia,
                    showDialogNow: this.props.showDialogNow,
                    defaultRatingCommentCheck: P,
                    cannotRedShow: !1,
                    checkItemKey: F_.UPDATE
                }), (P ? m[F_.UPDATE] : u[F_.UPDATE]) || this.showErrContentForCheckResult[F_.UPDATE] || E[F_.UPDATE] ? i().createElement("div", {
                    className: "rating-modal-handler_media-err-content"
                }, E[F_.UPDATE] ? i().createElement("div", {
                    className: "rating-comment-check-with-media-check-logo"
                }, y.o.t(r.a.tips_media_check_low_apple_qc)) : null, P && this.showErrContentForCheckResult[F_.UPDATE] ? i().createElement("div", null, this.showErrMsgForCheckResult[F_.UPDATE]) : null, P ? m[F_.UPDATE] ? i().createElement("div", {
                    className: this.showErrContentForCheckResult[F_.UPDATE] ? "rating-comment-check-with-media-check" : ""
                }, g[F_.UPDATE]) : null : u[F_.UPDATE] ? i().createElement("div", {
                    className: this.showErrContentForCheckResult[F_.UPDATE] ? "rating-comment-check-with-media-check" : ""
                }, h[F_.UPDATE]) : null) : null))))
            }
        }
        const {t: L_} = n.I18n;
        let A_ = function(e) {
            return e[e.VIEW_MODE = 1] = "VIEW_MODE",
            e[e.RATE_MODE = 2] = "RATE_MODE",
            e[e.EDIT_MODE = 3] = "EDIT_MODE",
            e[e.VIEW_BUYER_RATING_MODE = 4] = "VIEW_BUYER_RATING_MODE",
            e[e.FOLLOW_UP = 5] = "FOLLOW_UP",
            e
        }({});
        var z_ = function(e) {
            return e[e.EX_LOW = -2] = "EX_LOW",
            e[e.LOW = -1] = "LOW",
            e[e.NORMAL = 0] = "NORMAL",
            e
        }(z_ || {})
          , q_ = function(e) {
            return e[e.EX_LOW = -2] = "EX_LOW",
            e[e.LOW = -1] = "LOW",
            e[e.NORMAL = 0] = "NORMAL",
            e
        }(q_ || {})
          , D_ = function(e) {
            return e[e.HAS_APPLE = -4] = "HAS_APPLE",
            e
        }(D_ || {})
          , B_ = function(e) {
            return e.SELLER_SERVICE = "seller_service",
            e.DELIVERY_SERVICE = "delivery_service",
            e.BOTH_SERVICE = "delivery_service and seller_service",
            e
        }(B_ || {});
        let F_ = function(e) {
            return e.EDIT = "edit",
            e.UPDATE = "update",
            e
        }({});
        const W_ = [];
        class Z_ extends a.Component {
            static getDerivedStateFromProps(e, t) {
                return e.ratings !== t.prevPropsRatings ? {
                    prevPropsRatings: e.ratings,
                    ratings: e.ratings
                } : null
            }
            constructor(e) {
                var t;
                super(e),
                t = this,
                this._contentContainer = null,
                this._modalRef = null,
                this._itemToMediasMap = {},
                this._allMediaCheck = {},
                this.loadingNow = !1,
                this.timeoutCheck = 0,
                this.commentCheckMap = {},
                this.commentQuality = 0,
                this.waitCommentLoading = !1,
                this.showCoinBanner = !1,
                this.showCoinHeight = 0,
                this.itemIdLocationMap = {},
                this.getCoinItemList = {},
                this.detailed_rating = {
                    delivery_service: 0,
                    seller_service: 0,
                    product_quality: 0
                },
                this.collectCoinItem = (e, t) => {
                    this.getCoinItemList[String(e)] = t
                }
                ,
                this.formattedRatings = e => (e || []).map((e => {
                    const t = e.author_pic || e.user_pic || e.author_portrait || ""
                      , _ = e.author_name || e.username || e.author_username || "";
                    return (0,
                    o.Z)({}, e, {
                        author_portrait: t,
                        author_username: e.anonymous ? ue(_) : _,
                        author_name: _
                    })
                }
                )),
                this.updateDetailedRating = e => {
                    const {isServiceEvaluationCanEmpty: t, isFollowUp: _} = this.props;
                    this.detailed_rating = e,
                    e.delivery_service && e.seller_service || t || _ ? this.setState({
                        scrollBottom: !1
                    }) : e.delivery_service && !e.seller_service ? this.setState({
                        warningState: B_.SELLER_SERVICE
                    }) : !e.delivery_service && e.seller_service ? this.setState({
                        warningState: B_.DELIVERY_SERVICE
                    }) : e.delivery_service || e.seller_service || this.setState({
                        warningState: B_.BOTH_SERVICE
                    })
                }
                ,
                this.getTime = async function() {
                    const e = await async function() {
                        try {
                            const e = "localhost" === window.location.hostname;
                            return await g.e9.get(e ? "/api/v1/rating/rating_submit_wait_time" : `https://${me}/api/v1/rating/rating_submit_wait_time`)
                        } catch (e) {
                            return {
                                code: -1
                            }
                        }
                    }();
                    0 === e.code && t.setState({
                        mediaCheckWaitTime: e.data.wait_time
                    })
                }
                ,
                this.setModalRef = e => {
                    this._modalRef = e
                }
                ,
                this.renderViewRating = () => a.createElement(Se, {
                    ratings: this.state.ratings || [],
                    handleOpenEditRating: this.handleOpenEditRating,
                    updateRatingAfterSetAnonymous: this.updateRatingAfterSetAnonymous,
                    defaultRatingReviewTemplate: this.props.defaultRatingReviewTemplate,
                    defaultRatingShowEditButton: this.props.defaultRatingShowEdit,
                    isFollowUp: this.props.isFollowUp
                }),
                this.updateRatingAfterSetAnonymous = e => {
                    const t = this.state.ratings[e];
                    if (!t)
                        return;
                    this.reloadOrderAfterRating();
                    const _ = [...this.state.ratings]
                      , a = t.author_name || t.username || t.author_username || "";
                    _[e] = (0,
                    o.Z)({}, t, {
                        anonymous: !t.anonymous,
                        author_username: t.anonymous ? a : ue(a)
                    }),
                    this.setState({
                        ratings: _
                    })
                }
                ,
                this.getTitle = () => {
                    const {mode: e, isFollowUp: t} = this.props
                      , {editingRatingIndex: _, ratings: a} = this.state
                      , i = a[_];
                    switch (e) {
                    case A_.EDIT_MODE:
                    case A_.RATE_MODE:
                        return L_(r.a.pr_label_rate_product);
                    case A_.FOLLOW_UP:
                        return L_(r.a.add_updates);
                    case A_.VIEW_MODE:
                        return this.state.editing ? t && (null != i && i.can_follow_up || 1 === i.editable) ? L_(r.a.add_updates) : L_(r.a.pr_label_rate_product) : L_(r.a.pr_label_shop_rating);
                    case A_.VIEW_BUYER_RATING_MODE:
                        return L_(r.a.pr_label_buyer_rating)
                    }
                    return ""
                }
                ,
                this.getModalBody = () => {
                    const {isFollowUp: e} = this.props
                      , {editingRatingIndex: t, ratings: _} = this.state
                      , a = _[t];
                    let i = null;
                    switch (this.props.mode) {
                    case A_.EDIT_MODE:
                        i = this.renderEditing();
                        break;
                    case A_.FOLLOW_UP:
                        i = this.renderAddFollowUp();
                        break;
                    case A_.RATE_MODE:
                        i = this.state.isRatingLoading ? this.renderNewLoading() : this.state.getEditOrderDetailSuccess ? this.renderRating() : this.renderError();
                        break;
                    case A_.VIEW_MODE:
                        i = this.state.editing ? e && (null != a && a.can_follow_up || 1 === a.editable) ? this.renderAddFollowUp() : this.renderEditing() : this.renderViewRating();
                        break;
                    case A_.VIEW_BUYER_RATING_MODE:
                        i = this.renderViewBuyerRating()
                    }
                    return i
                }
                ,
                this.handleOpenEditRating = e => {
                    this.setState({
                        editing: !0,
                        editingRatingIndex: e
                    }),
                    this.scrollToTopContentContainer()
                }
                ,
                this.backToView = () => {
                    this.setState({
                        editing: !1
                    }),
                    this.clearTimeoutCheck(),
                    this.scrollToTopContentContainer()
                }
                ,
                this.handleConfirm = () => {
                    var e;
                    if (this.state.scrollBottom)
                        return null == (e = this._modalRef) || e.scrollToBottom(),
                        void this.setState({
                            isConfirming: !1,
                            showWaringPop: !0
                        });
                    this.setState({
                        isConfirming: !0
                    })
                }
                ,
                this.handleConfirmClose = () => {
                    this.setState({
                        isConfirming: !1
                    })
                }
                ,
                this.handleGoRating = () => {
                    this.setState({
                        showWaringPop: !1
                    })
                }
                ,
                this.getComments = (e, t) => {
                    const {defaultRatingReviewTemplate: _} = this.props;
                    if (!_)
                        return {
                            comment: e ? e.comment : "",
                            template_tags: t
                        };
                    const a = e ? e.template_tag_comments : {}
                      , i = []
                      , o = e ? e.comment : "";
                    let r = !1;
                    t.forEach((e => {
                        a[e] && (i.push(`${e}:${a[e]}`),
                        r = !0)
                    }
                    ));
                    const n = o ? "\n\n" : "";
                    return {
                        comment: i.length ? [i.join("\n"), o].join(n) : o,
                        template_tags: r ? t : [],
                        has_template_tag: r
                    }
                }
                ,
                this.handlePreCommit = () => {
                    const {mode: e} = this.props;
                    this.setState({
                        isConfirming: !1
                    });
                    const t = [A_.VIEW_MODE, A_.EDIT_MODE, A_.FOLLOW_UP].includes(this.props.mode) ? this.props.ratings[this.state.editingRatingIndex] : this.props.rating;
                    let _ = [];
                    const a = this._modalRef ? this._modalRef.getData() : null;
                    var i, o;
                    return e !== A_.FOLLOW_UP && (_ = this._modalRef ? null == (i = (o = this._modalRef).getRatingTemplateTags) ? void 0 : i.call(o) : []),
                    {
                        rating: t,
                        ratingData: a,
                        templateTags: _
                    }
                }
                ,
                this.handleSubmitEditRating = async function() {
                    const {rating: e, ratingData: _, templateTags: a} = t.handlePreCommit()
                      , i = _;
                    if (i && i.comment && "string" == typeof i.comment && (i.comment = i.comment.trim()),
                    t.setState({
                        isLoading: !0
                    }),
                    !(await l.Cm.editRating({
                        orderid: t.props.orderId,
                        shopid: t.props.shopId,
                        cmtid: e.cmtid,
                        rate_items_data: i ? [i] : [],
                        api_version: 2
                    })).error && [A_.VIEW_MODE, A_.EDIT_MODE].includes(t.props.mode)) {
                        var r, n, s;
                        t._itemToMediasMap = {};
                        const {editingRatingIndex: l, ratings: d} = t.state
                          , p = [...d]
                          , c = e.author_pic || e.user_pic || e.author_portrait || "";
                        let m = e.author_name || e.username || e.author_username || "";
                        t.props.mode === A_.EDIT_MODE && (m = t.props.accountInfo.username);
                        const u = _ ? i.anonymous : e.anonymous;
                        p[l] = (0,
                        o.Z)({}, e, t.getComments(i, a), {
                            detailed_rating: {
                                product_quality: null == i || null == (r = i.detailed_rating) ? void 0 : r.product_quality,
                                seller_service: Number((null == i || null == (n = i.detailed_rating) ? void 0 : n.seller_service) || t.detailed_rating.seller_service),
                                delivery_service: Number((null == i || null == (s = i.detailed_rating) ? void 0 : s.delivery_service) || t.detailed_rating.delivery_service)
                            },
                            images: i ? i.photos : [],
                            videos: i ? i.videos : [],
                            editable: 2,
                            tags: t.getTagsByIds(i ? i.tagids : []),
                            anonymous: u,
                            author_username: u ? ue(m) : m,
                            author_portrait: c
                        }),
                        t.setState({
                            ratings: p
                        }),
                        t.reloadOrderAfterRating(),
                        t.setState({
                            isLoading: !1
                        }),
                        t.backToView(),
                        "myRating" === t.props.fromSource && t.props.rateSuccessCallback && (t.props.rateSuccessCallback(p[l]),
                        t.closeRating())
                    } else
                        t.closeRating()
                }
                ,
                this.handleAddFollowUp = async function() {
                    var e, _;
                    const {ratingData: i} = t.handlePreCommit()
                      , o = i;
                    null != (e = o.item_rating) && e.comment && (o.item_rating.comment = o.item_rating.comment.trim()),
                    null != (_ = o.follow_up) && _.comment && (o.follow_up.comment = o.follow_up.comment.trim());
                    const n = await l.Cm.addFollowUp(o);
                    if (null != n && n.error)
                        t.closeRating();
                    else {
                        t.context.showPopup(a.createElement(N_, {
                            text: L_(r.a.followup_successfully_submitted)
                        }), !1, null, null, !0);
                        const e = await l.Cm.getItemRating({
                            cmtid: Number(o.cmt_id),
                            shopid: Number(o.shop_id),
                            is_seller: 0
                        });
                        t.reloadOrderAfterRating(),
                        t.setState({
                            isLoading: !1
                        }),
                        t.backToView(),
                        t.props.rateSuccessCallback && t.props.rateSuccessCallback(e.data),
                        setTimeout(( () => {
                            t.closeRating()
                        }
                        ), 2e3)
                    }
                }
                ,
                this.getTagsByIds = e => {
                    let t = [];
                    const _ = this.state.ratingMeta ? this.state.ratingMeta.tags : [];
                    return _ && _.forEach((_ => {
                        t = t.concat(_.tags.filter((t => -1 !== e.indexOf(t.tag_id))))
                    }
                    )),
                    t
                }
                ,
                this.handleSubmitRating = async function() {
                    if ([A_.VIEW_MODE, A_.FOLLOW_UP, A_.EDIT_MODE].includes(t.props.mode))
                        return void t.handleConfirm();
                    if (!t._modalRef)
                        return;
                    const {seller_service: e, delivery_service: _, rate_items_data: i} = t._modalRef.getData();
                    var o;
                    if (t.state.scrollBottom)
                        return null == (o = t._modalRef) || o.scrollToBottom(),
                        void t.setState({
                            showWaringPop: !0
                        });
                    i instanceof Array && i.forEach((e => {
                        "string" == typeof e.comment && (e.comment = e.comment.trim())
                    }
                    )),
                    t.setState({
                        isLoading: !0
                    });
                    const n = await l.Cm.addRating({
                        shopid: t.props.shopId,
                        orderid: t.props.orderId,
                        objectid: t.props.useDetect ? 1 : 0,
                        seller_service: e,
                        delivery_service: _,
                        rate_items_data: i,
                        is_media_gray_user: t.props.defaultRatingMediaQualityCheck,
                        apply_coin_limits_validate: !0,
                        api_version: 2
                    });
                    if (n.error)
                        if (n.error === R.Z.EXIST)
                            t.setState({
                                isLoading: !1
                            }),
                            t.context.showPopup(a.createElement(k.OK, {
                                text: L_(r.a.pr_alert_please_reload_view_rating_page)
                            }), !0, null, null, !0);
                        else {
                            if (18900004 === n.error)
                                return void window.alert("The template tags are invalid");
                            t.setState({
                                isLoading: !1
                            })
                        }
                    else {
                        if (n.data.extra_info && !1 === n.data.extra_info.coin_succ)
                            t.setState({
                                isLoading: !1
                            }),
                            t.context.showPopup(a.createElement(k.a$, {
                                message: L_(r.a.msg_coins_error),
                                showCancel: !1,
                                confirmText: "OK"
                            }), !0, null, null, !0);
                        else {
                            t._itemToMediasMap = {};
                            const e = n.data.coins_earned;
                            t.reloadOrderAfterRating(),
                            t.setState({
                                isLoading: !1
                            });
                            const _ = e > 0;
                            t.context.showPopup(_ ? a.createElement(C_, {
                                coinsAwarded: e
                            }) : a.createElement(N_, null), _, null, null, !0)
                        }
                        "myRating" === t.props.fromSource && t.props.rateSuccessCallback && t.props.rateSuccessCallback()
                    }
                    setTimeout(( () => {
                        t.closeRating()
                    }
                    ), 2e3)
                }
                ,
                this.reloadOrderAfterRating = () => {
                    var e, t;
                    null == (e = (t = this.props).reloadOrder) || e.call(t)
                }
                ,
                this.checkSubmit = () => {
                    const {isFollowUp: e} = this.props;
                    [A_.FOLLOW_UP, A_.EDIT_MODE, A_.VIEW_MODE].includes(this.props.mode) ? this.state.isShowMediaErr === z_.EX_LOW || this.state.isShowMediaErr === q_.EX_LOW || this.state.isShowMediaErr === D_.HAS_APPLE ? this.setState({
                        isShowMediaErr: z_.NORMAL,
                        showDialogNow: !1
                    }) : this.state.isShowMediaErr !== z_.LOW && this.state.isShowMediaErr !== q_.LOW || this.setState({
                        isShowMediaErr: z_.NORMAL,
                        showDialogNow: !1
                    }, ( () => {
                        this.state.editing ? e ? this.handleAddFollowUp() : this.handleSubmitEditRating() : this.closeRating()
                    }
                    )) : this.props.mode === A_.RATE_MODE && (this.state.isShowMediaErr === z_.EX_LOW || this.state.isShowMediaErr === q_.EX_LOW || this.state.isShowMediaErr === D_.HAS_APPLE ? this.setState({
                        isShowMediaErr: z_.NORMAL,
                        showDialogNow: !1
                    }) : this.state.isShowMediaErr !== z_.LOW && this.state.isShowMediaErr !== q_.LOW || this.setState({
                        isShowMediaErr: z_.NORMAL,
                        showDialogNow: !1
                    }, ( () => {
                        this.handleSubmitRating()
                    }
                    )))
                }
                ,
                this.collectMediaCheck = (e, t, _) => {
                    this._itemToMediasMap[_ || e] = t
                }
                ,
                this.collectAllMedia = e => {
                    this._allMediaCheck[e] = !0
                }
                ,
                this.cancelCollectMedia = e => {
                    const {defaultRatingCommentCheck: t} = this.props;
                    delete this._allMediaCheck[e];
                    const _ = Object.keys(this._allMediaCheck).length
                      , a = Object.keys(this._itemToMediasMap).filter((e => -3 === this._itemToMediasMap[e].type));
                    0 === _ && (!t || a.length <= 0) && this.loadingNow && (this.waitCommentLoading || this.setState({
                        isLoading: !1
                    }, ( () => {
                        clearTimeout(this.timeoutCheck),
                        this.loadingNow = !1,
                        t ? this.commentMediaCheckShowDialog() : this.checkMediaSubmit()
                    }
                    )))
                }
                ,
                this.clearTimeoutCheck = () => {
                    var e;
                    null == (e = this._modalRef) || e.clearMediaTimeout()
                }
                ,
                this.preCheck = async function() {
                    Object.keys(t._allMediaCheck).length > 0 ? (t.loadingNow = !0,
                    t.setState({
                        isLoading: !0
                    }, ( () => {
                        t.timeoutCheck = window.setTimeout(( () => {
                            t.setState({
                                isLoading: !1
                            }, ( () => {
                                t.loadingNow = !1,
                                t._allMediaCheck = {},
                                t.clearTimeoutCheck(),
                                t.checkMediaSubmit()
                            }
                            ))
                        }
                        ), t.state.mediaCheckWaitTime)
                    }
                    ))) : (t._allMediaCheck = {},
                    t.clearTimeoutCheck(),
                    t.checkMediaSubmit())
                }
                ,
                this.commentMediaCheckShowDialog = () => {
                    this.getHeight();
                    const {mode: e} = this.props
                      , {isOrderValidationCheckPass: t} = this.state
                      , _ = Object.keys(this._itemToMediasMap)
                      , a = _.filter((e => -2 === this._itemToMediasMap[e].type))
                      , i = _.filter((e => -1 === this._itemToMediasMap[e].type))
                      , o = a.length > 0 ? z_.EX_LOW : i.length > 0 ? z_.LOW : z_.NORMAL
                      , n = _.filter((e => this._itemToMediasMap[e].hasAppleLogo));
                    this.commentQuality === q_.EX_LOW ? n.length > 0 ? this.setState({
                        isShowMediaErr: D_.HAS_APPLE,
                        mediaCheckTitle: "",
                        mediaCheckMessage: y.o.t(r.a.tips_reason_back_to_edit_apple_qc),
                        showDialogNow: !0
                    }) : o === z_.NORMAL ? this.setState({
                        isShowMediaErr: q_.EX_LOW,
                        mediaCheckTitle: "",
                        mediaCheckMessage: L_(r.a.tips_comment_only_dialog_elow),
                        showDialogNow: !0
                    }) : this.setState({
                        isShowMediaErr: q_.EX_LOW,
                        mediaCheckTitle: "",
                        mediaCheckMessage: L_(r.a.tips_comment_media_check_dialog_exlow),
                        showDialogNow: !0
                    }) : this.commentQuality === q_.LOW ? n.length > 0 ? this.setState({
                        isShowMediaErr: D_.HAS_APPLE,
                        mediaCheckTitle: "",
                        mediaCheckMessage: y.o.t(r.a.tips_reason_back_to_edit_apple_qc),
                        showDialogNow: !0
                    }) : e === A_.VIEW_MODE ? o === z_.NORMAL || o === z_.LOW ? this.setState({
                        isShowMediaErr: q_.LOW,
                        mediaCheckTitle: L_(r.a.title_check_submit),
                        mediaCheckMessage: L_(r.a.tips_comment_check_dialog_low),
                        showDialogNow: !0
                    }) : o === z_.EX_LOW && this.setState({
                        isShowMediaErr: z_.EX_LOW,
                        mediaCheckTitle: "",
                        mediaCheckMessage: L_(r.a.tips_comment_media_check_dialog_exlow),
                        showDialogNow: !0
                    }) : o === z_.NORMAL ? Object.values(this.getCoinItemList).filter((e => !0 === e)).length > 0 ? this.setState({
                        isShowMediaErr: q_.LOW,
                        mediaCheckTitle: L_(r.a.title_check_submit),
                        mediaCheckMessage: L_(t ? "tips_comment_only_dialog_low" : "tips_comment_content_edit_low"),
                        showDialogNow: !0
                    }) : this.setState({
                        cannotRedShow: !0
                    }, ( () => {
                        this.handleSubmitRating()
                    }
                    )) : o === z_.LOW ? Object.values(this.getCoinItemList).filter((e => !0 === e)).length > 0 ? this.setState({
                        isShowMediaErr: q_.LOW,
                        mediaCheckTitle: L_(r.a.title_check_submit),
                        mediaCheckMessage: L_(t ? "tips_comment_media_new_check_dialog_low" : "tips_comment_media_check_dialog_exlow"),
                        showDialogNow: !0
                    }) : this.setState({
                        cannotRedShow: !0
                    }, ( () => {
                        this.handleSubmitRating()
                    }
                    )) : o === z_.EX_LOW && this.setState({
                        isShowMediaErr: z_.EX_LOW,
                        mediaCheckTitle: "",
                        mediaCheckMessage: L_(r.a.tips_comment_media_check_dialog_exlow),
                        showDialogNow: !0
                    }) : this.checkMediaSubmitNew()
                }
                ,
                this.checkMediaSubmit = () => {
                    const e = Object.keys(this._itemToMediasMap)
                      , t = e.filter((e => -2 === this._itemToMediasMap[e].type))
                      , _ = e.filter((e => -1 === this._itemToMediasMap[e].type));
                    e.filter((e => this._itemToMediasMap[e].hasAppleLogo)).length > 0 ? this.setState({
                        isShowMediaErr: D_.HAS_APPLE,
                        mediaCheckTitle: "",
                        mediaCheckMessage: y.o.t(r.a.tips_reason_back_to_edit_apple_qc),
                        showDialogNow: !0
                    }) : t.length ? t.length > 1 ? this.setState({
                        isShowMediaErr: z_.EX_LOW,
                        mediaCheckTitle: "",
                        mediaCheckMessage: L_(r.a.msg_medias_quality_ex_more),
                        showDialogNow: !0
                    }) : this.setState({
                        isShowMediaErr: z_.EX_LOW,
                        mediaCheckTitle: "",
                        mediaCheckMessage: ve(this._itemToMediasMap[t[0]]),
                        showDialogNow: !0
                    }) : _.length ? [A_.FOLLOW_UP, A_.EDIT_MODE, A_.VIEW_MODE].includes(this.props.mode) ? this.setState({
                        isShowMediaErr: z_.LOW,
                        mediaCheckTitle: L_(r.a.pr_alert_submit_rating),
                        mediaCheckMessage: L_(r.a.msg_medias_quality_low_edit),
                        showDialogNow: !0
                    }) : Object.values(this.getCoinItemList).filter((e => !0 === e)).length > 0 ? this.setState({
                        isShowMediaErr: z_.LOW,
                        mediaCheckTitle: L_(r.a.title_check_submit),
                        mediaCheckMessage: L_(r.a.msg_medias_quality_low_more),
                        showDialogNow: !0
                    }) : this.setState({
                        cannotRedShow: !0
                    }, ( () => {
                        this.handleSubmitRating()
                    }
                    )) : this.setState({
                        showDialogNow: !0
                    }, ( () => {
                        this.props.mode !== A_.VIEW_MODE || this.state.editing ? this.handleSubmitRating() : this.closeRating()
                    }
                    ))
                }
                ,
                this.checkMediaSubmitNew = () => {
                    const e = Object.keys(this._itemToMediasMap)
                      , t = e.filter((e => this._itemToMediasMap[e].type === z_.EX_LOW))
                      , _ = e.filter((e => this._itemToMediasMap[e].type === z_.LOW));
                    if (e.filter((e => this._itemToMediasMap[e].hasAppleLogo)).length > 0)
                        this.setState({
                            isShowMediaErr: D_.HAS_APPLE,
                            mediaCheckTitle: "",
                            mediaCheckMessage: y.o.t(r.a.tips_reason_back_to_edit_apple_qc),
                            showDialogNow: !0
                        });
                    else if (t.length > 0) {
                        const e = [];
                        Object.values(this._itemToMediasMap).forEach((t => {
                            const _ = (null == t ? void 0 : t.collectObj) || {};
                            -2 === (null == t ? void 0 : t.type) && Object.keys(_).forEach((t => {
                                null != _ && _[t] && e.push(t)
                            }
                            ))
                        }
                        )),
                        this.setState({
                            isShowMediaErr: z_.EX_LOW,
                            mediaCheckTitle: "",
                            mediaCheckMessage: be(e, -2, this.state.isOrderValidationCheckPass),
                            showDialogNow: !0
                        })
                    } else if (_.length)
                        if ([A_.FOLLOW_UP, A_.EDIT_MODE, A_.VIEW_MODE].includes(this.props.mode))
                            this.setState({
                                isShowMediaErr: z_.LOW,
                                mediaCheckTitle: L_(r.a.title_check_submit),
                                mediaCheckMessage: L_(r.a.tips_comment_check_dialog_low),
                                showDialogNow: !0
                            });
                        else if (Object.values(this.getCoinItemList).filter((e => !0 === e)).length > 0) {
                            const e = [];
                            Object.values(this._itemToMediasMap).forEach((t => {
                                const _ = (null == t ? void 0 : t.collectObj) || {};
                                -1 === (null == t ? void 0 : t.type) && Object.keys(_).forEach((t => {
                                    null != _ && _[t] && e.push(t)
                                }
                                ))
                            }
                            )),
                            this.setState({
                                isShowMediaErr: z_.LOW,
                                mediaCheckTitle: L_(r.a.title_check_submit),
                                mediaCheckMessage: be(e, -1, this.state.isOrderValidationCheckPass),
                                showDialogNow: !0
                            })
                        } else
                            this.setState({
                                cannotRedShow: !0
                            }, ( () => {
                                this.handleSubmitRating()
                            }
                            ));
                    else
                        this.setState({
                            isShowMediaErr: z_.NORMAL,
                            showDialogNow: !0
                        }, ( () => {
                            this.props.mode !== A_.VIEW_MODE || this.state.editing ? this.handleSubmitRating() : this.closeRating()
                        }
                        ))
                }
                ,
                this.deleteCommentCheckItemId = e => {
                    e && delete this.commentCheckMap[String(e)]
                }
                ,
                this.getHeight = () => {
                    const e = []
                      , t = document.getElementsByClassName("rating-modal-handler__container");
                    for (let o = 0; o < t.length; o++)
                        e.push(t[o].clientHeight);
                    const _ = document.getElementsByClassName("shopee-popup-form__main")
                      , a = this.getFirstLocation();
                    let i = 0;
                    a && a > 1 && e.slice(0, a - 1).forEach((e => {
                        i += e
                    }
                    )),
                    _[0].scrollTo({
                        top: this.showCoinBanner ? i + this.showCoinHeight : i,
                        behavior: "smooth"
                    })
                }
                ,
                this.getFirstLocation = () => {
                    let e = 0;
                    return Object.keys(this._itemToMediasMap).forEach((t => {
                        var _, a;
                        -2 !== this._itemToMediasMap[t].type && -1 !== this._itemToMediasMap[t].type || (e = 0 === e ? (null == (_ = this.itemIdLocationMap) ? void 0 : _[t]) || 0 : Math.min(e, (null == (a = this.itemIdLocationMap) ? void 0 : a[t]) || 1))
                    }
                    )),
                    Object.keys(this.commentCheckMap).forEach((t => {
                        var _, a, i, o;
                        (null == (_ = this.commentCheckMap) || null == (_ = _[t]) ? void 0 : _.total) !== q_.EX_LOW && (null == (a = this.commentCheckMap) || null == (a = a[t]) ? void 0 : a.total) !== q_.LOW || (e = 0 === e ? (null == (i = this.itemIdLocationMap) ? void 0 : i[t]) || 0 : Math.min(e, (null == (o = this.itemIdLocationMap) ? void 0 : o[t]) || 1))
                    }
                    )),
                    e
                }
                ,
                this.isShowCoinBanner = (e, t) => {
                    this.showCoinBanner = e,
                    this.showCoinHeight = t
                }
                ,
                this.collectLocationMap = (e, t) => {
                    this.itemIdLocationMap[e] = t
                }
                ,
                this.getEditCommentMap = () => {
                    var e, t;
                    const {ratings: _} = this.props
                      , a = []
                      , i = null == (e = this._modalRef) ? void 0 : e.getData()
                      , o = [];
                    i.comment && o.push(i.comment);
                    const r = Object.values(i.template_tag_comments);
                    return r.length && o.push(...r),
                    a.push({
                        itemid: null == (t = _[0]) ? void 0 : t.itemid,
                        comments: o
                    }),
                    a
                }
                ,
                this.getFollowUpCommentMap = () => {
                    var e, t;
                    const {ratings: _} = this.props
                      , a = []
                      , i = null == (e = this._modalRef) ? void 0 : e.getData()
                      , o = _[0].itemid;
                    if (i.item_rating) {
                        const e = [];
                        i.item_rating.comment && e.push(i.item_rating.comment),
                        i.item_rating.template_tag_comments && e.push(...Object.values(i.item_rating.template_tag_comments)),
                        a.push({
                            itemid: o,
                            checkItemKey: F_.EDIT,
                            comments: e
                        })
                    }
                    return null != (t = i.follow_up) && t.comment && a.push({
                        itemid: o,
                        checkItemKey: F_.UPDATE,
                        comments: [i.follow_up.comment]
                    }),
                    a
                }
                ,
                this.getAddRatingCommentMap = () => {
                    var e;
                    const t = [];
                    let _;
                    const a = (null == (e = this._modalRef) || null == (e = e.getData()) ? void 0 : e.rate_items_data) || [];
                    return a.length > 0 && a.forEach((e => {
                        (e.comment || Object.values(e.template_tag_comments).length > 0) && (_ = {
                            itemid: e.itemid,
                            comments: []
                        },
                        e.comment && qt(e.comment) && _.comments.push(qt(e.comment)),
                        _.comments = _.comments.concat(Object.values(e.template_tag_comments).filter((e => "" !== e))),
                        _.comments.length > 0 && t.push(_))
                    }
                    )),
                    t
                }
                ,
                this.commentCheckNoWait = () => {
                    var e;
                    const {orderId: t, mode: _, isFollowUp: a} = this.props;
                    console.log('heiheihei',A_)
                    let i = [];
                    if (!(null == (e = this._modalRef) ? void 0 : e.getData()))
                        return;
                    switch (_) {
                    case A_.VIEW_MODE:
                        i = a ? this.getFollowUpCommentMap() : this.getEditCommentMap();
                        break;
                    case A_.RATE_MODE:
                        i = this.getAddRatingCommentMap();
                        break;
                    case A_.EDIT_MODE:
                        i = this.getEditCommentMap();
                        break;
                    case A_.FOLLOW_UP:
                        i = this.getFollowUpCommentMap()
                    }
                    const o = Object.keys(this._allMediaCheck).length
                      , r = Object.keys(this._itemToMediasMap).filter((e => -3 === this._itemToMediasMap[e].type));
                    if (i.length > 0 || r.length > 0) {
                        const e = {
                            data: i,
                            orderid: t
                        };
                        this.loadingNow = !0,
                        this.waitCommentLoading = !0,
                        this.setState({
                            isLoading: !0
                        }, ( () => {
                            this.timeoutCheck = window.setTimeout(( () => {
                                this.setState({
                                    isLoading: !1
                                }, ( () => {
                                    this.loadingNow = !1,
                                    this._allMediaCheck = {},
                                    this.clearTimeoutCheck(),
                                    this.waitCommentLoading && (this.waitCommentLoading = !1,
                                    this.commentCheckMap = {},
                                    this.commentQuality = q_.NORMAL),
                                    this.commentMediaCheckShowDialog()
                                }
                                ))
                            }
                            ), this.state.mediaCheckWaitTime)
                        }
                        )),
                        fe(e).then((e => {
                            if (this.loadingNow && this.waitCommentLoading)
                                if (Object.keys(this._allMediaCheck).length > 0 || r.length > 0)
                                    if (this.waitCommentLoading = !1,
                                    0 === (null == e ? void 0 : e.error)) {
                                        var t;
                                        const _ = {};
                                        let a = 0
                                          , o = 0;
                                        null == e || null == (t = e.data) || t.forEach(( (e, t) => {
                                            _[i[t].checkItemKey || e.itemid] = e.score
                                        }
                                        )),
                                        this.commentCheckMap = _,
                                        Object.keys(this.commentCheckMap).forEach((e => {
                                            var t, _;
                                            (null == (t = this.commentCheckMap) || null == (t = t[e]) ? void 0 : t.total) === q_.EX_LOW ? a++ : (null == (_ = this.commentCheckMap) || null == (_ = _[e]) ? void 0 : _.total) === q_.LOW && o++
                                        }
                                        )),
                                        this.commentQuality = a > 0 ? q_.EX_LOW : o > 0 ? q_.LOW : q_.NORMAL
                                    } else
                                        this.commentQuality = q_.NORMAL,
                                        this.commentCheckMap = {};
                                else if (this.timeoutCheck && clearTimeout(this.timeoutCheck),
                                this.waitCommentLoading = !1,
                                0 === (null == e ? void 0 : e.error)) {
                                    var _;
                                    const t = {};
                                    let a = 0
                                      , o = 0;
                                    null == e || null == (_ = e.data) || _.forEach(( (e, _) => {
                                        t[i[_].checkItemKey || e.itemid] = e.score
                                    }
                                    )),
                                    this.commentCheckMap = t,
                                    Object.keys(this.commentCheckMap).forEach((e => {
                                        var t, _;
                                        (null == (t = this.commentCheckMap) || null == (t = t[e]) ? void 0 : t.total) === q_.EX_LOW ? a++ : (null == (_ = this.commentCheckMap) || null == (_ = _[e]) ? void 0 : _.total) === q_.LOW && o++
                                    }
                                    )),
                                    this.commentQuality = a > 0 ? q_.EX_LOW : o > 0 ? q_.LOW : q_.NORMAL,
                                    this.setState({
                                        isLoading: !1
                                    }, ( () => {
                                        this.loadingNow = !1,
                                        this.clearTimeoutCheck(),
                                        this.commentMediaCheckShowDialog()
                                    }
                                    ))
                                } else
                                    this.commentQuality = q_.NORMAL,
                                    this.commentCheckMap = {},
                                    this.setState({
                                        isLoading: !1
                                    }, ( () => {
                                        this.clearTimeoutCheck(),
                                        this.commentMediaCheckShowDialog()
                                    }
                                    ))
                        }
                        )).catch((e => {
                            this.loadingNow && this.waitCommentLoading && (Object.keys(this._allMediaCheck).length > 0 || r.length > 0 ? (this.waitCommentLoading = !1,
                            this.commentCheckMap = {},
                            this.commentQuality = q_.NORMAL) : (this.timeoutCheck && clearTimeout(this.timeoutCheck),
                            this.waitCommentLoading = !1,
                            this.commentCheckMap = {},
                            this.commentQuality = q_.NORMAL,
                            this.loadingNow = !1,
                            this.setState({
                                isLoading: !1
                            }, ( () => {
                                this.clearTimeoutCheck(),
                                this.commentMediaCheckShowDialog()
                            }
                            ))))
                        }
                        ))
                    } else
                        this.commentCheckMap = {},
                        this.commentQuality = q_.NORMAL,
                        o > 0 || r.length > 0 ? (this.loadingNow = !0,
                        this.setState({
                            isLoading: !0
                        }, ( () => {
                            this.timeoutCheck = window.setTimeout(( () => {
                                this.loadingNow = !1,
                                this._allMediaCheck = {},
                                this.setState({
                                    isLoading: !1
                                }, ( () => {
                                    this.clearTimeoutCheck(),
                                    this.commentMediaCheckShowDialog()
                                }
                                ))
                            }
                            ), this.state.mediaCheckWaitTime)
                        }
                        ))) : (this.clearTimeoutCheck(),
                        this.commentMediaCheckShowDialog())
                }
                ,
                this.commentCheck = async function() {
                    var e;
                    const {orderId: _} = t.props
                      , a = t._modalRef ? null == (e = t._modalRef.getData()) ? void 0 : e.rate_items_data : []
                      , i = [];
                    let o;
                    if (a.length > 0 && a.forEach((e => {
                        (e.comment || Object.values(e.template_tag_comments).length > 0) && (o = {
                            order_id: _,
                            item_id: e.itemid,
                            comments: []
                        },
                        e.comment && o.comments.push(e.comment),
                        o.comments = o.comments.concat(Object.values(e.template_tag_comments).filter((e => "" !== e))),
                        i.push(o))
                    }
                    )),
                    i.length > 0) {
                        const e = await fe({
                            data: i
                        });
                        if (null != e && e.error || null == e || !e.response)
                            t.commentQuality = q_.NORMAL,
                            t.commentCheckMap = {};
                        else {
                            const {error: _} = null == e ? void 0 : e.response;
                            if (0 === _) {
                                var r, n;
                                const _ = {};
                                let a = 0
                                  , i = 0;
                                (null == e || null == (r = e.response) ? void 0 : r.data) && (null == e || null == (n = e.response) || null == (n = n.data) || n.forEach((e => {
                                    _[Number(e.item_id)] = e.score
                                }
                                ))),
                                t.commentCheckMap = _,
                                Object.keys(t.commentCheckMap).forEach((e => {
                                    t.commentCheckMap[e].total === q_.EX_LOW ? a++ : t.commentCheckMap[e].total === q_.LOW && i++
                                }
                                )),
                                t.commentQuality = a > 0 ? q_.EX_LOW : i > 0 ? q_.LOW : q_.NORMAL
                            } else
                                t.commentCheckMap = {},
                                t.commentQuality = q_.NORMAL
                        }
                    } else
                        t.commentCheckMap = {},
                        t.commentQuality = q_.NORMAL
                }
                ,
                this.handlePrimaryButtonClicked = () => {
                    switch (this.props.mode) {
                    case A_.VIEW_MODE:
                        if (this.props.defaultRatingCommentCheck)
                            this.commentCheckNoWait();
                        else if (this.props.defaultRatingMediaQualityCheck)
                            this.preCheck();
                        else {
                            if (!this.state.editing)
                                return void this.closeRating();
                            this.handleSubmitRating()
                        }
                        return;
                    case A_.RATE_MODE:
                    case A_.FOLLOW_UP:
                    case A_.EDIT_MODE:
                        return void (this.props.defaultRatingCommentCheck ? this.commentCheckNoWait() : this.props.defaultRatingMediaQualityCheck ? this.preCheck() : this.handleSubmitRating());
                    default:
                        this.closeRating()
                    }
                }
                ,
                this.closeRating = () => {
                    this.clearTimeoutCheck(),
                    this.context.dismissPopup()
                }
                ,
                this.getReadyState = () => {
                    switch (this.props.mode) {
                    case A_.RATE_MODE:
                        
                            return !!this._modalRef && this._modalRef.isReady();
                    case A_.VIEW_MODE:
                        return !this.state.editing || !this._modalRef || this._modalRef.isReady();
                    default:
                        return !this._modalRef || this._modalRef.isReady()
                    }
                }
                ,
                this.scrollToTopContentContainer = () => {
                    this._contentContainer && (this._contentContainer.scrollTop = 0)
                }
                ;
                const _ = this.formattedRatings(e.ratings);
                this.state = {
                    prevPropsRatings: e.ratings,
                    editing: !1,
                    editingRatingIndex: 0,
                    ratings: _ || [],
                    ratingMeta: null,
                    isLoading: !1,
                    isConfirming: !1,
                    items: [],
                    getEditOrderDetailSuccess: !0,
                    isRatingLoading: !0,
                    isShowMediaErr: 0,
                    isShowCancel: !0,
                    mediaCheckTitle: "",
                    mediaCheckMessage: "",
                    mediaCheckWaitTime: 3e3,
                    categoryCoinList: void 0,
                    limitValidationMap: void 0,
                    isOrderValidationCheckPass: !0,
                    showDialogNow: !1,
                    cannotRedShow: !1,
                    scrollBottom: !0,
                    showWaringPop: !1,
                    warningState: "",
                    algoTemplateAbt: ""
                }
            }
            getCategoryCoin() {
                const {orderId: e} = this.props;
                g.e9.fetchInfo(`/api/v4/order/get_rating_coin_reward_rule_list${(0,
                P.Wc)({
                    order_id: e,
                    apply_coin_limits_validate: !0
                })}`).then(( ({response: e={}}) => {
                    const {error: t, coin_reward_rule_list: _, coin_limits_validate_result: a} = e;
                    if (!t) {
                        if (_ && _.length > 0) {
                            const e = {};
                            _.forEach((t => {
                                e[t.item_id] = t.coin_reward_rule
                            }
                            )),
                            this.setState({
                                categoryCoinList: e
                            })
                        }
                        if (a && a.length > 0) {
                            const e = {};
                            a.forEach(( ({item_id: t, passed: _, limits_info: a}) => {
                                e[t] = {
                                    passed: _,
                                    limits_info: a
                                }
                            }
                            ));
                            const t = Object.keys(e).some((t => e[t].passed));
                            this.setState({
                                limitValidationMap: e,
                                isOrderValidationCheckPass: t
                            })
                        }
                    }
                }
                ))
            }
            async componentDidMount() {
                const e = await l.Cm.getRatingMeta({});
                e.error || this.setState({
                    ratingMeta: e.data
                }),
                this.getTime(),
                this.getCategoryCoin(),
                this.props.mode === A_.RATE_MODE && this.getRateEditOrderDetail(),
                this.props.mode !== A_.EDIT_MODE && this.props.mode !== A_.FOLLOW_UP || this.setState({
                    editing: !0
                })
            }
            getRateEditOrderDetail() {
                this.setState({
                    isRatingLoading: !0
                });
                const {orderId: e, shopId: t} = this.props;
                l.Cm.getRateOrderDetail({
                    shopid: t,
                    orderid: e
                }).then((e => {
                    var t, _;
                    const a = (null == (t = e.data) ? void 0 : t.items) || []
                      , i = h.sprar_7240_algo_generated_review_writing_template;
                    this.setState({
                        items: a,
                        isRatingLoading: !1,
                        getEditOrderDetailSuccess: a.length > 0,
                        algoTemplateAbt: (null == (_ = e.data) ? void 0 : _.algo_template_abt) || i.default
                    })
                }
                )).catch(( () => {
                    this.setState({
                        isRatingLoading: !1,
                        getEditOrderDetailSuccess: !1
                    })
                }
                ))
            }
            renderViewBuyerRating() {
                return a.createElement(Te, {
                    rating: this.props.rating
                })
            }
            renderEditing() {
                const e = this.state.ratings[this.state.editingRatingIndex]
                  , t = this.props.accountInfo.username;
                return a.createElement(S_, {
                    rating: e,
                    username: t || "",
                    defaultRatingAnonymous: e.anonymous,
                    defaultVideoReview: this.props.defaultVideoReview,
                    enableRatingCreationUIRevamp: this.props.enableRatingCreationUIRevamp,
                    defaultRatingReviewTemplate: this.props.defaultRatingReviewTemplate,
                    orderId: this.props.orderId,
                    userId: this.props.userId,
                    ref: this.setModalRef,
                    forceFormUpdate: () => this.forceUpdate(),
                    ratingMeta: this.state.ratingMeta,
                    collectMediaCheck: this.collectMediaCheck,
                    defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck,
                    collectAllMedia: this.collectAllMedia,
                    cancelCollectMedia: this.cancelCollectMedia,
                    commentCheckMap: this.commentCheckMap,
                    deleteCommentCheckItemId: this.deleteCommentCheckItemId,
                    defaultRatingCommentCheck: this.props.defaultRatingCommentCheck,
                    showDialogNow: this.state.showDialogNow,
                    updateSellerService: this.updateDetailedRating
                })
            }
            renderRating() {
                const e = this.props.accountInfo.username;
                const haha =  a.createElement(y_, {
                    items: this.state.items || W_,
                    shopId: this.props.shopId,
                    orderId: this.props.orderId,
                    userId: this.props.userId,
                    username: e || "",
                    defaultRatingAnonymous: this.props.defaultRatingAnonymous,
                    defaultVideoReview: this.props.defaultVideoReview,
                    enableRatingCreationUIRevamp: this.props.enableRatingCreationUIRevamp,
                    defaultRatingReviewTemplate: this.props.defaultRatingReviewTemplate,
                    ref: this.setModalRef,
                    forceFormUpdate: () => this.forceUpdate(),
                    ratingMeta: this.state.ratingMeta,
                    collectMediaCheck: this.collectMediaCheck,
                    defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck,
                    collectAllMedia: this.collectAllMedia,
                    cancelCollectMedia: this.cancelCollectMedia,
                    categoryCoinList: this.state.categoryCoinList,
                    limitValidationMap: this.state.limitValidationMap,
                    commentCheckMap: this.commentCheckMap,
                    deleteCommentCheckItemId: this.deleteCommentCheckItemId,
                    defaultRatingCommentCheck: this.props.defaultRatingCommentCheck,
                    isShowCoinBanner: this.isShowCoinBanner,
                    collectLocationMap: this.collectLocationMap,
                    showDialogNow: this.state.showDialogNow,
                    collectCoinItem: this.collectCoinItem,
                    cannotRedShow: this.state.cannotRedShow,
                    updateSellerService: this.updateDetailedRating,
                    algoTemplateAbt: this.state.algoTemplateAbt
                })
                return haha
            }
            renderAddFollowUp() {
                const e = this.state.ratings[this.state.editingRatingIndex]
                  , t = this.props.accountInfo.username;
                return a.createElement(I_, {
                    rating: e,
                    username: t || "",
                    defaultRatingAnonymous: e.anonymous,
                    defaultVideoReview: this.props.defaultVideoReview,
                    enableRatingCreationUIRevamp: this.props.enableRatingCreationUIRevamp,
                    orderId: this.props.orderId,
                    userId: this.props.userId,
                    ref: this.setModalRef,
                    forceFormUpdate: () => this.forceUpdate(),
                    ratingMeta: this.state.ratingMeta,
                    collectMediaCheck: this.collectMediaCheck,
                    defaultRatingMediaQualityCheck: this.props.defaultRatingMediaQualityCheck,
                    collectAllMedia: this.collectAllMedia,
                    cancelCollectMedia: this.cancelCollectMedia,
                    commentCheckMap: this.commentCheckMap,
                    deleteCommentCheckItemId: this.deleteCommentCheckItemId,
                    defaultRatingCommentCheck: this.props.defaultRatingCommentCheck,
                    showDialogNow: this.state.showDialogNow,
                    updateStar: this.updateDetailedRating
                })
            }
            renderNewLoading() {
                return a.createElement(w.Z, {
                    hideOverlay: !0,
                    show: !0
                })
            }
            renderError() {
                return a.createElement("div", {
                    className: d_
                }, a.createElement("span", {
                    className: p_
                }, L_(r.a.rating_loading_failed)), a.createElement("div", {
                    className: c_,
                    onClick: this.getRateEditOrderDetail.bind(this)
                }, L_(r.a.rating_btn_name_retry)))
            }
            render() {
                var e;
                this._modalRef = window.mbmb
                const {mode: t, isShopeeSpecialShop: _} = this.props
                  , i = [A_.RATE_MODE, A_.EDIT_MODE, A_.FOLLOW_UP].includes(t) || this.state.editing
                  , o = this.getReadyState()
                  , n = null == (e = this._modalRef) ? void 0 : e.getData();
                return a.createElement(s.Z, {
                    title: this.getTitle(),
                    textSubmit: L_(r.a.pr_order_purchase_label_submit),
                    textOk: L_(r.a.pr_order_purchase_label_ok),
                    textSubmitting: o ? null : L_(r.a.label_submit),
                    cancelButtonText: L_(r.a.pr_order_purchase_label_cancel),
                    isSubmitting: !o,
                    showSubmitButton: this.props.defaultRatingShowSubmit && i,
                    showCancelButton: i,
                    showOKButton: !i,
                    onSubmit: this.handlePrimaryButtonClicked,
                    onCancel: this.closeRating,
                    onOK: this.closeRating,
                    formExtraClassNames: "oiFnma",
                    onBackButtonClick: this.state.editing ? this.backToView : void 0
                }, this.state.isLoading ? a.createElement(M_, null) : null, this.state.showWaringPop ? a.createElement(L, {
                    goRating: this.handleGoRating,
                    warningState: this.state.warningState,
                    isShopeeSpecialShop: _
                }) : null, this.state.isConfirming ? a.createElement(O, {
                    title: t === A_.FOLLOW_UP ? L_(r.a.submit_update) : void 0,
                    content: t === A_.FOLLOW_UP ? null != n && n.follow_up ? L_(r.a.submit_update_content) : L_(r.a.submit_edit_content) : void 0,
                    onSubmit: t === A_.FOLLOW_UP || t === A_.VIEW_MODE && this.props.isFollowUp ? this.handleAddFollowUp : this.handleSubmitEditRating,
                    onCancel: this.handleConfirmClose
                }) : null, this.state.isShowMediaErr === z_.EX_LOW || this.state.isShowMediaErr === z_.LOW || this.state.isShowMediaErr === q_.EX_LOW || this.state.isShowMediaErr === q_.LOW || this.state.isShowMediaErr === D_.HAS_APPLE ? a.createElement(x, {
                    message: this.state.mediaCheckMessage,
                    title: this.state.mediaCheckTitle,
                    onSubmit: this.checkSubmit,
                    submitText: this.state.isShowMediaErr === z_.EX_LOW || this.state.isShowMediaErr === q_.EX_LOW || this.state.isShowMediaErr === D_.HAS_APPLE ? L_(r.a.btn_back_to_edit) : L_(r.a.btn_submit_check),
                    showCancel: this.state.isShowMediaErr !== z_.EX_LOW && this.state.isShowMediaErr !== q_.EX_LOW && this.state.isShowMediaErr !== D_.HAS_APPLE,
                    cancelText: this.state.isShowMediaErr === z_.EX_LOW || this.state.isShowMediaErr === q_.EX_LOW || this.state.isShowMediaErr === D_.HAS_APPLE ? void 0 : L_(r.a.btn_back_to_edit),
                    onCancel: () => {
                        this.setState({
                            isShowMediaErr: z_.NORMAL,
                            showDialogNow: !1
                        })
                    }
                }) : null, this.getModalBody())
            }
        }
        Z_.contextTypes = {
            dismissPopup: p().func,
            showPopup: p().func
        };
        const U_ = (0,
        m.compose)(S.Pf, (0,
        b.u)({
            fetchOnMount: !0
        }), (0,
        c.connect)((e => ({
            defaultRatingAnonymous: (0,
            f.isFeatureEnabled)(v.o0p, !1),
            defaultVideoReview: (0,
            f.isFeatureEnabled)(v.ZXS, !1),
            defaultRatingReviewTemplate: (0,
            f.isFeatureEnabled)(E.aJ, !1),
            defaultRatingMediaQualityCheck: (0,
            f.isFeatureEnabled)(E.wc, !1),
            defaultRatingShowEdit: (0,
            f.isFeatureEnabled)(E.h4, !0),
            defaultRatingShowSubmit: (0,
            f.isFeatureEnabled)(E.te, !0),
            useDetect: (0,
            f.isFeatureEnabled)(E.wr, !1),
            defaultRatingCommentCheck: (0,
            f.isFeatureEnabled)(E.ge, !1),
            enableRatingCreationUIRevamp: (0,
            f.isFeatureEnabled)(E.SQ, !0),
            isServiceEvaluationCanEmpty: (0,
            f.isFeatureEnabled)(E.e5, !1),
            isFollowUp: (0,
            f.isFeatureEnabled)(E.q3, !1)
        })), {}), u.withInjectReducer)((0,
        C.wl)((e => a.createElement(g.ep, (0,
        o.Z)({
            Component: Z_
        }, e)))))
          , {t: V_} = n.I18n;
        function H_({dismissPopup: e, orderId: t, userId: _, mode: n, reloadOrder: d}) {
            const [p,c] = (0,
            a.useState)(null)
              , m = (0,
            a.useState)(( () => async (e, t) => {
                const _ = t === A_.VIEW_MODE ? l.Cm.getOrderItemRatings : l.Cm.getOrderBuyerRatings;
                try {
                    const t = await _({
                        orderid: e
                    });
                    t && t.data && t.data.items && t.data.items.length ? c({
                        data: t.data.items,
                        error: 0
                    }) : c({
                        data: null,
                        error: 1
                    })
                } catch (a) {
                    c({
                        data: null,
                        error: 1
                    })
                }
            }
            ))[0];
            (0,
            a.useEffect)(( () => {
                m(t, n)
            }
            ), [t, n, m]);
            const u = () => {
                m(t, n),
                null == d || d()
            }
            ;
            return p ? null != p && p.error ? i().createElement(s.Z, {
                textOk: V_(r.a.pr_order_purchase_label_ok),
                onSubmit: () => {
                    e()
                }
                ,
                showCancelButton: !1
            }, "Get Data Failed") : n === A_.VIEW_MODE ? i().createElement(U_, {
                mode: A_.VIEW_MODE,
                ratings: p.data,
                orderId: t,
                shopId: p.data[0].shopid,
                userId: _,
                reloadOrder: u
            }) : i().createElement(U_, {
                mode: A_.VIEW_BUYER_RATING_MODE,
                rating: (0,
                o.Z)({}, p.data[0], {
                    author_pic: p.data[0].author_portrait,
                    author_name: p.data[0].author_username
                }),
                userId: _,
                reloadOrder: u
            }) : null
        }
        const {t: X_} = n.I18n;
        function G_({mode: e=A_.EDIT_MODE, dismissPopup: t, commentId: _, shopId: o, isSeller: n, orderId: d, userId: p, fromSource: c, callback: m}) {
            const [u,g] = (0,
            a.useState)(null);
            return (0,
            a.useEffect)(( () => {
                (async () => {
                    try {
                        const e = await l.Cm.getItemRating({
                            cmtid: _,
                            shopid: o,
                            is_seller: Number(n)
                        })
                          , {data: t, error: a} = e;
                        g(a ? {
                            data: null,
                            error: 1
                        } : {
                            data: t,
                            error: 0
                        })
                    } catch (e) {
                        g({
                            data: null,
                            error: 1
                        })
                    }
                }
                )()
            }
            ), [_, o, n]),
            u ? null != u && u.error ? i().createElement(s.Z, {
                textSubmit: X_(r.a.pr_order_purchase_label_ok),
                onSubmit: () => {
                    t()
                }
                ,
                showCancelButton: !1
            }, "Get Data Failed") : i().createElement(U_, {
                mode: e,
                ratings: [null == u ? void 0 : u.data],
                userId: p,
                shopId: o,
                orderId: d,
                fromSource: c,
                rateSuccessCallback: m
            }) : null
        }
        function j_({orderId: e, userId: t, shopId: _, showPopup: a, fromSource: o, callback: r}) {
            a(i().createElement(U_, {
                mode: A_.RATE_MODE,
                orderId: e,
                shopId: _,
                userId: t,
                fromSource: o,
                rateSuccessCallback: r
            }))
        }
        function Q_({commentId: e, orderId: t, userId: _, shopId: a, isSeller: o, showPopup: r, dismissPopup: n, fromSource: s, callback: l}) {
            r(i().createElement(G_, {
                dismissPopup: n,
                commentId: e,
                shopId: a,
                isSeller: o,
                orderId: t,
                userId: _,
                fromSource: s,
                callback: l
            }))
        }
        function $_({commentId: e, orderId: t, userId: _, shopId: a, isSeller: o, showPopup: r, dismissPopup: n, fromSource: s, callback: l}) {
            r(i().createElement(G_, {
                mode: A_.FOLLOW_UP,
                dismissPopup: n,
                commentId: e,
                shopId: a,
                isSeller: o,
                orderId: t,
                userId: _,
                fromSource: s,
                callback: l
            }))
        }
        const Y_ = e => {
            const {mode: t, orderId: _, userId: a, shopId: o, dismissPopup: r, reloadOrder: n} = e;
            return t === A_.RATE_MODE ? i().createElement(U_, {
                mode: t,
                orderId: _,
                userId: a,
                shopId: o,
                dismissPopup: r,
                reloadOrder: n
            }) : i().createElement(H_, {
                mode: t,
                orderId: _,
                userId: a,
                dismissPopup: r,
                reloadOrder: n
            })
        }
    }
    ,
    22151: (e, t, _) => {
        "use strict";
        _.d(t, {
            y9: () => L,
            _X: () => ht
        }),
        _(64402);
        var a = _(6714)
          , i = _(57831)
          , o = _(71878);
        (0,
        o.n)("EDIT_RATING");
        const r = (0,
        o.n)("FETCH_ONE_ITEM_RATING")
          , n = (0,
        o.n)("FETCH_ITEM_RATING")
          , s = (0,
        o.n)("FETCH_ONE_SHOP_RATING")
          , l = ((0,
        o.n)("FETCH_ONE_MY_REVIEW"),
        (0,
        o.n)("FETCH_SHOP_RATING"))
          , d = (0,
        o.n)("FETCH_ONE_BUYER_RATING")
          , p = (0,
        o.n)("FETCH_BUYER_RATING")
          , c = (0,
        o.n)("GET_RATING_META")
          , m = ((0,
        o.n)("RATE_PRODUCT"),
        (0,
        o.n)("UPLOAD_IMAGE"),
        (0,
        o.n)("REPLY_RATING"),
        (0,
        o.n)("LIKE_RATING"))
          , u = (0,
        o.n)("UNLIKE_RATING")
          , g = ((0,
        o.n)("REPORT_RATING"),
        (0,
        o.n)("FETCH_SHOP_RATING_SUMMARY"))
          , h = (0,
        o.n)("REPLY_ITEM_RATING_V2")
          , y = (0,
        o.n)("REPLY_BUYER_RATING_V2")
          , v = (0,
        o.n)("CLEAN_RATING_CACHE")
          , f = (0,
        o.n)("FETCH_ORDER_ITEM_RATINGS")
          , b = (0,
        o.n)("FETCH_ORDER_BUYER_RATINGS")
          , w = (0,
        o.n)("LIKE_SHOP_RATING")
          , k = (0,
        o.n)("UNLIKE_SHOP_RATING")
          , S = (0,
        o.n)("FETCH_RATEABLE_LIST")
          , E = (0,
        o.n)("FETCH_MY_RATING_LIST")
          , C = (0,
        o.n)("UPDATE_RATEABLE_LIST")
          , R = (0,
        o.n)("UPDATE_MY_REVIEW");
        var P = _(63045);
        const N = {
            CANT_EDIT: 0,
            CAN_EDIT: 1,
            EDITED_AND_CANT_EDIT: 2
        };
        let J = function(e) {
            return e[e.SHOW = 0] = "SHOW",
            e[e.HIDE = 1] = "HIDE",
            e
        }({});
        const M = ({shopId: e, itemId: t, filter: _=0, type: a=0, tag_filter: i="", variation_filters: o="", exclude_filter: r=J.HIDE, flag: n, filter_size: s, fold_filter: l}) => {
            const d = {
                shop_id: e,
                item_id: t,
                flag: n,
                filter: _,
                type: a,
                tag_filter: i,
                variation_filters: o,
                filter_size: s,
                fold_filter: l,
                exclude_filter: r
            };
            return (0,
            P.Wc)(d)
        }
          , x = ({shopId: e, filter: t=1, type: _=0}) => {
            const a = {
                shop_id: e,
                filter: t,
                type: _
            };
            return (0,
            P.Wc)(a)
        }
          , T = ({userId: e, filter: t=1, type: _=0}) => {
            const a = {
                user_id: e,
                filter: t,
                type: _
            };
            return (0,
            P.Wc)(a)
        }
          , O = e => (0,
        P.Wc)(e)
          , I = e => (0,
        P.Wc)(e);
        function L(e) {
            return e.editable === N.CAN_EDIT
        }
        (0,
        i.Z)({
            [n.REQUESTED]: (e, t) => {
                const {payload: _} = t
                  , i = M(_.query);
                return (0,
                a.Z)({}, e, {
                    queryLoadingState: (0,
                    a.Z)({}, e.queryLoadingState, {
                        [i]: !0
                    })
                })
            }
            ,
            [n.SUCCESS]: (e, t) => {
                var _;
                const i = e.itemRatingSummary
                  , {query: {offset: o, limit: r, exclude_filter: n, filter: s, type: l, tag_filter: d, filter_size: p, variation_filters: c}, ratings: m, top_ratings: u, summary: g, hasMore: h, is_sip_item: y, show_local_review: v, browsing_ui: f, rcmd_algo: b, size_info_abt: w, downgradeSwitch: k, purchase_bar_abt: S} = t.payload;
                let E = m;
                const C = M(t.payload.query)
                  , R = e.itemRating[C];
                let P = [...R ? R.ratings : []];
                if ((E || []).forEach((e => {
                    P.includes(Number(e.cmtid)) || P.push(Number(e.cmtid))
                }
                )),
                u && 0 === o && !s && !l && !d && !p && !c) {
                    const e = u.map((e => e.cmtid));
                    P = [...e, ...P.filter((t => !e.includes(t)))],
                    E = [...u, ...E.filter((t => !e.includes(t.cmtid)))]
                }
                const N = E.reduce(( (e, t) => (t.cmtid && (e[t.cmtid] = t),
                e)), {});
                let J = null != (_ = null == g ? void 0 : g.rating_total) ? _ : 0;
                return n && (J = Math.max(J, (null == i ? void 0 : i.rating_total) || 0)),
                (0,
                a.Z)({}, e, {
                    itemRatingMap: (0,
                    a.Z)({}, e.itemRatingMap, N),
                    itemRating: (0,
                    a.Z)({}, e.itemRating, {
                        [C]: (0,
                        a.Z)({}, e.itemRating[C], {
                            browsing_ui: f,
                            rcmd_algo: b,
                            size_info_abt: w,
                            hasMore: h,
                            ratings: P,
                            offset: o + r,
                            downgradeSwitch: !!k,
                            summary: (0,
                            a.Z)({}, g, {
                                rating_total: J
                            })
                        })
                    }),
                    itemRatingSummary: (0,
                    a.Z)({}, g, {
                        rating_total: J
                    }),
                    is_sip_item: y,
                    show_local_review: v,
                    purchase_bar_abt: S,
                    size_info_abt: w,
                    queryLoadingState: (0,
                    a.Z)({}, e.queryLoadingState, {
                        [C]: !1
                    }),
                    networkErrorCode: 0
                })
            }
            ,
            [n.FAILED]: (e, t) => {
                const {payload: _} = t
                  , i = M(_.query);
                return (0,
                a.Z)({}, e, {
                    queryLoadingState: (0,
                    a.Z)({}, e.queryLoadingState, {
                        [i]: !1
                    }),
                    networkErrorCode: _.error
                })
            }
            ,
            [v.REQUESTED]: e => (0,
            a.Z)({}, e, {
                itemRatingMap: {},
                itemRating: {},
                shopRating: {},
                shopRatingMap: {},
                buyerRating: {},
                buyerRatingMap: {}
            }),
            [r.SUCCESS]: (e, t) => {
                const {rating: _} = t.payload;
                return (0,
                a.Z)({}, e, {
                    itemRatingMap: (0,
                    a.Z)({}, e.itemRatingMap, {
                        [_.cmtid]: _
                    })
                })
            }
            ,
            [s.SUCCESS]: (e, t) => {
                const {rating: _} = t.payload
                  , i = [_].reduce(( (e, t) => (t.cmtid && (e[t.cmtid] = t),
                e)), e.shopRatingMap);
                return (0,
                a.Z)({}, e, {
                    shopRatingMap: i
                })
            }
            ,
            [l.REQUESTED]: (e, t) => {
                const {payload: _} = t
                  , i = x(_.query);
                return (0,
                a.Z)({}, e, {
                    shopRatingLoadingState: (0,
                    a.Z)({}, e.shopRatingLoadingState, {
                        [i]: !0
                    }),
                    networkErrorCode: 0
                })
            }
            ,
            [l.SUCCESS]: (e, t) => {
                const {query: {offset: _, limit: i}, ratings: o, hasMore: r} = t.payload
                  , n = x(t.payload.query)
                  , s = e.shopRating[n]
                  , l = s ? s.ratings : []
                  , d = o.reduce(( (e, t, a) => (e[a + _] = t.cmtid,
                e)), [...l])
                  , p = o.reduce(( (e, t) => (t.cmtid && (e[t.cmtid] = t),
                e)), {});
                return (0,
                a.Z)({}, e, {
                    shopRatingMap: (0,
                    a.Z)({}, e.shopRatingMap, p),
                    shopRating: (0,
                    a.Z)({}, e.shopRating, {
                        [n]: (0,
                        a.Z)({}, e.shopRating[n], {
                            ratings: d,
                            hasMore: r,
                            offset: _ + i
                        })
                    }),
                    shopRatingLoadingState: (0,
                    a.Z)({}, e.shopRatingLoadingState, {
                        [n]: !1
                    })
                })
            }
            ,
            [l.FAILED]: (e, t) => {
                const {payload: _} = t
                  , i = x(_.query);
                return (0,
                a.Z)({}, e, {
                    shopRatingLoadingState: (0,
                    a.Z)({}, e.shopRatingLoadingState, {
                        [i]: !1
                    }),
                    networkErrorCode: t.payload.error
                })
            }
            ,
            [d.SUCCESS]: (e, t) => {
                const {rating: _} = t.payload
                  , i = [_].reduce(( (e, t) => (t.cmtid && (e[t.cmtid] = t),
                e)), e.buyerRatingMap);
                return (0,
                a.Z)({}, e, {
                    buyerRatingMap: i
                })
            }
            ,
            [p.REQUESTED]: (e, t) => {
                const {payload: _} = t
                  , i = T(_.query);
                return (0,
                a.Z)({}, e, {
                    buyerRatingLoadingState: (0,
                    a.Z)({}, e.buyerRatingLoadingState, {
                        [i]: !0
                    }),
                    networkErrorCode: 0
                })
            }
            ,
            [p.SUCCESS]: (e, t) => {
                const {query: {offset: _, limit: i}, ratings: o, hasMore: r} = t.payload
                  , n = T(t.payload.query)
                  , s = e.buyerRating[n]
                  , l = s ? s.ratings : []
                  , d = o.reduce(( (e, t, a) => (e[a + _] = t.cmtid,
                e)), [...l])
                  , p = o.reduce(( (e, t) => (t.cmtid && (e[t.cmtid] = t),
                e)), {});
                return (0,
                a.Z)({}, e, {
                    buyerRatingMap: (0,
                    a.Z)({}, e.buyerRatingMap, p),
                    buyerRating: (0,
                    a.Z)({}, e.buyerRating, {
                        [n]: (0,
                        a.Z)({}, e.buyerRating[n], {
                            ratings: d,
                            hasMore: r,
                            offset: _ + i
                        })
                    }),
                    buyerRatingLoadingState: (0,
                    a.Z)({}, e.buyerRatingLoadingState, {
                        [n]: !1
                    })
                })
            }
            ,
            [p.FAILED]: (e, t) => {
                const {payload: _} = t
                  , i = T(_.query);
                return (0,
                a.Z)({}, e, {
                    buyerRatingLoadingState: (0,
                    a.Z)({}, e.buyerRatingLoadingState, {
                        [i]: !1
                    }),
                    networkErrorCode: _.error
                })
            }
            ,
            [c.SUCCESS]: (e, t) => (0,
            a.Z)({}, e, {
                ratingMeta: t.payload
            }),
            [m.REQUESTED]: (e, t) => {
                const _ = e.itemRatingMap[t.ratingId];
                return (0,
                a.Z)({}, e, {
                    itemRatingMap: (0,
                    a.Z)({}, e.itemRatingMap, {
                        [t.ratingId]: (0,
                        a.Z)({}, _, {
                            liked: !0,
                            like_count: t.likeCount
                        })
                    })
                })
            }
            ,
            [m.FAILED]: (e, t) => {
                const _ = e.itemRatingMap[t.ratingId];
                return (0,
                a.Z)({}, e, {
                    itemRatingMap: (0,
                    a.Z)({}, e.itemRatingMap, {
                        [t.ratingId]: (0,
                        a.Z)({}, _, {
                            liked: !1,
                            like_count: t.likeCount
                        })
                    })
                })
            }
            ,
            [u.REQUESTED]: (e, t) => {
                const _ = e.itemRatingMap[t.ratingId];
                return (0,
                a.Z)({}, e, {
                    itemRatingMap: (0,
                    a.Z)({}, e.itemRatingMap, {
                        [t.ratingId]: (0,
                        a.Z)({}, _, {
                            liked: !1,
                            like_count: t.likeCount
                        })
                    })
                })
            }
            ,
            [u.FAILED]: (e, t) => {
                const _ = e.itemRatingMap[t.ratingId];
                return (0,
                a.Z)({}, e, {
                    itemRatingMap: (0,
                    a.Z)({}, e.itemRatingMap, {
                        [t.ratingId]: (0,
                        a.Z)({}, _, {
                            liked: !1,
                            like_count: t.likeCount
                        })
                    })
                })
            }
            ,
            [g.SUCCESS]: (e, t) => (0,
            a.Z)({}, e, {
                shopRatingSummary: t.data
            }),
            [y.SUCCESS]: (e, t) => (0,
            a.Z)({}, e, {
                ratingReplies: (0,
                a.Z)({}, e.ratingReplies, {
                    [t.cmtId]: t.comment
                })
            }),
            [y.FAILED]: (e, t) => (0,
            a.Z)({}, e, {
                ratingReplies: (0,
                a.Z)({}, e.ratingReplies, {
                    [t.cmtId]: null
                })
            }),
            [h.SUCCESS]: (e, t) => (0,
            a.Z)({}, e, {
                ratingReplies: (0,
                a.Z)({}, e.ratingReplies, {
                    [t.cmtId]: t.comment
                })
            }),
            [h.FAILED]: (e, t) => (0,
            a.Z)({}, e, {
                ratingReplies: (0,
                a.Z)({}, e.ratingReplies, {
                    [t.cmtId]: null
                })
            }),
            [f.REQUESTED]: (e, t) => {
                const _ = O(t.payload.query);
                return (0,
                a.Z)({}, e, {
                    orderItemRating: {
                        [_]: {
                            ratings: e.orderItemRating[_] && e.orderItemRating[_].ratings || [],
                            loading: !0,
                            error: 0
                        }
                    }
                })
            }
            ,
            [f.SUCCESS]: (e, t) => {
                const _ = O(t.payload.query)
                  , i = t.payload.ratings.filter((e => e.cmtid)).reduce(( (e, t) => (e[t.cmtid] = t,
                e)), e.itemRatingMap);
                return (0,
                a.Z)({}, e, {
                    itemRatingMap: i,
                    orderItemRating: {
                        [_]: {
                            loading: !1,
                            ratings: t.payload.ratings.filter((e => e.cmtid)).map((e => e.cmtid)),
                            error: 0,
                            rateable: t.payload.rateable
                        }
                    }
                })
            }
            ,
            [f.FAILED]: (e, t) => {
                const _ = O(t.payload.query);
                return (0,
                a.Z)({}, e, {
                    orderItemRating: {
                        [_]: (0,
                        a.Z)({}, e.orderItemRating[_], {
                            loading: !1,
                            error: t.payload.error
                        })
                    }
                })
            }
            ,
            [b.REQUESTED]: (e, t) => {
                const _ = I(t.payload.query);
                return (0,
                a.Z)({}, e, {
                    orderBuyerRating: {
                        [_]: {
                            ratings: e.orderBuyerRating[_] && e.orderBuyerRating[_].ratings || [],
                            loading: !0,
                            error: 0
                        }
                    }
                })
            }
            ,
            [b.SUCCESS]: (e, t) => {
                const _ = I(t.payload.query)
                  , i = t.payload.ratings.filter((e => e.cmtid)).reduce(( (e, t) => (e[t.cmtid] = t,
                e)), e.buyerRatingMap);
                return (0,
                a.Z)({}, e, {
                    buyerRatingMap: i,
                    orderBuyerRating: {
                        [_]: {
                            loading: !1,
                            ratings: t.payload.ratings.filter((e => e.cmtid)).map((e => e.cmtid)),
                            error: 0
                        }
                    }
                })
            }
            ,
            [b.FAILED]: (e, t) => {
                const _ = I(t.payload.query);
                return (0,
                a.Z)({}, e, {
                    orderBuyerRating: {
                        [_]: (0,
                        a.Z)({}, e.orderBuyerRating[_], {
                            loading: !1,
                            error: t.payload.error
                        })
                    }
                })
            }
            ,
            [w.REQUESTED]: (e, t) => (0,
            a.Z)({}, e, {
                shopRatingMap: (0,
                a.Z)({}, e.shopRatingMap, {
                    [t.ratingId]: (0,
                    a.Z)({}, e.shopRatingMap[t.ratingId], {
                        liked: !0,
                        like_count: t.likeCount
                    })
                })
            }),
            [w.FAILED]: (e, t) => (0,
            a.Z)({}, e, {
                shopRatingMap: (0,
                a.Z)({}, e.shopRatingMap, {
                    [t.ratingId]: (0,
                    a.Z)({}, e.shopRatingMap[t.ratingId], {
                        liked: !1,
                        like_count: t.likeCount
                    })
                })
            }),
            [k.REQUESTED]: (e, t) => (0,
            a.Z)({}, e, {
                shopRatingMap: (0,
                a.Z)({}, e.shopRatingMap, {
                    [t.ratingId]: (0,
                    a.Z)({}, e.shopRatingMap[t.ratingId], {
                        liked: !1,
                        like_count: t.likeCount
                    })
                })
            }),
            [k.FAILED]: (e, t) => (0,
            a.Z)({}, e, {
                shopRatingMap: (0,
                a.Z)({}, e.shopRatingMap, {
                    [t.ratingId]: (0,
                    a.Z)({}, e.shopRatingMap[t.ratingId], {
                        liked: !1,
                        like_count: t.likeCount
                    })
                })
            }),
            [S.REQUESTED]: (e, t) => {
                const _ = `${t.payload.query.userId}`
                  , i = !!e.rateableListMap[_];
                return (0,
                a.Z)({}, e, {
                    rateableListMap: (0,
                    a.Z)({}, e.rateableListMap, {
                        [_]: i ? (0,
                        a.Z)({}, e.rateableListMap[_], {
                            loading: !0
                        }) : {
                            is_end: !1,
                            rate_list: [],
                            offset: 0,
                            loading: !0,
                            errorCode: 0,
                            preOffset: -1
                        }
                    })
                })
            }
            ,
            [S.SUCCESS]: (e, t) => {
                const {userId: _, offset: i} = t.payload.query
                  , o = `${_}`
                  , r = e.rateableListMap[o].rate_list
                  , n = e.rateableListMap[o].preOffset
                  , {is_end: s=!1, rate_list: l=[], cursor: d=0} = t.payload.data || {}
                  , p = 0 === i ? [...l || []] : n !== i ? [...r, ...l || []] : r;
                return (0,
                a.Z)({}, e, {
                    rateableListMap: (0,
                    a.Z)({}, e.rateableListMap, {
                        [o]: (0,
                        a.Z)({}, e.rateableListMap[o], {
                            rate_list: p,
                            is_end: s,
                            offset: d,
                            loading: !1,
                            preOffset: i,
                            errorCode: 0
                        })
                    })
                })
            }
            ,
            [S.FAILED]: (e, t) => {
                const {userId: _} = t.payload.query || {}
                  , i = `${_}`;
                return (0,
                a.Z)({}, e, {
                    rateableListMap: (0,
                    a.Z)({}, e.rateableListMap, {
                        [i]: (0,
                        a.Z)({}, e.rateableListMap[i], {
                            loading: !1,
                            errorCode: t.payload.error
                        })
                    })
                })
            }
            ,
            [E.REQUESTED]: (e, t) => {
                const {userId: _} = t.payload.query
                  , i = !!e.myRatingListMap[_];
                return (0,
                a.Z)({}, e, {
                    myRatingListMap: (0,
                    a.Z)({}, e.myRatingListMap, {
                        [_]: i ? (0,
                        a.Z)({}, e.myRatingListMap[_], {
                            loading: !0
                        }) : {
                            is_end: !1,
                            ratingList: [],
                            ratingListMap: {},
                            offset: 0,
                            loading: !0,
                            errorCode: 0
                        }
                    })
                })
            }
            ,
            [E.SUCCESS]: (e, t) => {
                const {userId: _, offset: i, limit: o} = t.payload.query
                  , r = e.myRatingListMap[_].ratingList
                  , {is_end: n, rate_list: s} = t.payload.data || {}
                  , l = (s || []).reduce(( (e, t, _) => (e[_ + i] = t.cmtid,
                e)), 0 === i ? [] : [...r])
                  , d = (s || []).reduce(( (e, t) => (t.cmtid && (e[t.cmtid] = t),
                e)), {});
                return (0,
                a.Z)({}, e, {
                    myRatingListMap: (0,
                    a.Z)({}, e.myRatingListMap, {
                        [_]: (0,
                        a.Z)({}, e.myRatingListMap[_], {
                            ratingList: l,
                            ratingListMap: (0,
                            a.Z)({}, e.myRatingListMap[_].ratingListMap, d),
                            is_end: n,
                            offset: i + o,
                            loading: !1,
                            errorCode: 0
                        })
                    })
                })
            }
            ,
            [E.FAILED]: (e, t) => {
                const {userId: _} = t.payload.query;
                return (0,
                a.Z)({}, e, {
                    myRatingListMap: (0,
                    a.Z)({}, e.myRatingListMap, {
                        [_]: (0,
                        a.Z)({}, e.myRatingListMap[_], {
                            loading: !1,
                            errorCode: t.payload.error
                        })
                    })
                })
            }
            ,
            [C.SUCCESS]: (e, t) => {
                var _;
                const {orderId: i, userId: o} = t
                  , r = (null == (_ = e.rateableListMap[o]) ? void 0 : _.rate_list) || []
                  , n = r.findIndex((e => e.order_id === i));
                if (n >= 0) {
                    const t = [...r];
                    return t.splice(n, 1),
                    (0,
                    a.Z)({}, e, {
                        rateableListMap: (0,
                        a.Z)({}, e.rateableListMap, {
                            [o]: (0,
                            a.Z)({}, e.rateableListMap[o], {
                                rate_list: t
                            })
                        })
                    })
                }
                return e
            }
            ,
            [R.SUCCESS]: (e, t) => {
                const {cmtid: _, updateData: i, userId: o} = t.data;
                return (0,
                a.Z)({}, e, {
                    myRatingListMap: (0,
                    a.Z)({}, e.myRatingListMap, {
                        [o]: (0,
                        a.Z)({}, e.myRatingListMap[o], {
                            ratingListMap: (0,
                            a.Z)({}, e.myRatingListMap[o].ratingListMap, {
                                [_]: (0,
                                a.Z)({}, e.myRatingListMap[o].ratingListMap[_], i)
                            })
                        })
                    })
                })
            }
        }, {
            shopRating: {},
            shopRatingMap: {},
            size_info_abt: "",
            buyerRating: {},
            buyerRatingMap: {},
            itemRating: {},
            itemRatingMap: {},
            orderItemRating: {},
            orderBuyerRating: {},
            ratingReplies: {},
            ratingText: {},
            queryLoadingState: {},
            shopRatingLoadingState: {},
            buyerRatingLoadingState: {},
            networkErrorCode: 0,
            ratingMeta: null,
            rateableListMap: {},
            myRatingListMap: {}
        });
        var A = _(1500)
          , z = _(15585)
          , q = _(99743)
          , D = _(88216)
          , B = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "value", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "domain", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "max_age", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "path", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "secure", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "http_only", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , F = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "no_cache", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "no_store", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "must_revalidate", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "max_age", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , W = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return B
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "cookies", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "userid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "session_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "client_ip", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "platform", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "url", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "user_agent", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "sso_token", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "shopee_token", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "tracking_session_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "country", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "downgrade", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "language", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "client_ip_country", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "device_fingerprint", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "app_version", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "rn_version", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "app_type", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "client_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "client_platform", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_from_xiapibuy", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "referer", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "forwarded_for", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "real_ip", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "crawler", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return B
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "cookies", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "content_type", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return F
                }
            }), (0,
            q.__metadata)("design:type", F)], e.prototype, "cache_control", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "count", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Z = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return W
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "tag_filters", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "signature", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "downgrade_switch", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , U = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "variation_filters", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "filter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "type", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Z
                }
            }), (0,
            q.__metadata)("design:type", Z)], e.prototype, "data", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , V = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "userid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return V
                }
            }), (0,
            q.__metadata)("design:type", V)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return H
                }
            }), (0,
            q.__metadata)("design:type", H)], e.prototype, "buyer_rating_summary", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return H
                }
            }), (0,
            q.__metadata)("design:type", H)], e.prototype, "seller_rating_summary", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "total_avg_star", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , H = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating_total", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Number
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "rating_count", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating_star", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , X = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "offset", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "limit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "filter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "flag", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "type", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "tag_filter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "exclude_filter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "request_source", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "variation_filters", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "relevant_reviews", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "filter_size", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "fold_filter", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return X
                }
            }), (0,
            q.__metadata)("design:type", X)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Q
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "ratings", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return te
                }
            }), (0,
            q.__metadata)("design:type", te)], e.prototype, "item_rating_summary", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_sip_item", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "rcmd_algo", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "downgrade_switch", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "has_more", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "show_local_review", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "browsing_ui", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "enable_buyer_gallery_media", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Q
                }
            }), (0,
            q.__metadata)("design:type", Q)], e.prototype, "user_latest_rating", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "size_info_abt", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Q
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "top_ratings", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "resize_image_abt", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "purchase_bar_abt", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , G = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Q
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "ratings", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return te
                }
            }), (0,
            q.__metadata)("design:type", te)], e.prototype, "item_rating_summary", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_sip_item", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "rcmd_algo", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return G
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "facets", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "signature", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Q
                }
            }), (0,
            q.__metadata)("design:type", Q)], e.prototype, "user_latest_rating", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "count", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "type", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , j = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_oversea", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "origin_region", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Q = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "ctime", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "userid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating_star", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "status", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "mtime", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "editable", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "opt", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "filter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ne
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "mentioned", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_hidden", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "can_follow_up", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return lt
                }
            }), (0,
            q.__metadata)("design:type", lt)], e.prototype, "follow_up", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "author_username", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "author_portrait", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "author_shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "anonymous", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "images", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return _e
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "videos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return oe
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "product_items", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "delete_reason", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "delete_operator", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return re
                }
            }), (0,
            q.__metadata)("design:type", re)], e.prototype, "ItemRatingReply", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return se
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "tags", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "editable_date", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "show_reply", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "like_count", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "liked", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "sync_to_social", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return le
                }
            }), (0,
            q.__metadata)("design:type", le)], e.prototype, "detailed_rating", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "exclude_scoring_due_low_logistic", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return de
                }
            }), (0,
            q.__metadata)("design:type", de)], e.prototype, "loyalty_info", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "template_tags", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "has_template_tag", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "sync_to_social_toggle", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return j
                }
            }), (0,
            q.__metadata)("design:type", j)], e.prototype, "sip_info", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_repeated_purchase", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "display_variation_filter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "overall_fit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_normal_item", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "viewed", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "show_view", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return tt
                }
            }), (0,
            q.__metadata)("design:type", tt)], e.prototype, "sync_to_social_detail", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Y
                }
            }), (0,
            q.__metadata)("design:type", Y)], e.prototype, "profile", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "size_info_tags", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "size_info_abt", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ae
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "image_data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ie
                }
            }), (0,
            q.__metadata)("design:type", ie)], e.prototype, "key_media", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_super_review", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "super_reviewer_tag", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_newly_created", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "template_hints", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ke
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "template_tags_hints", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "region", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "template_abt", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return $
                }
            }), (0,
            q.__metadata)("design:type", $)], e.prototype, "original_item_info", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_repeat_edited", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "show_super_review_tag", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ye
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "algo_tag_hints", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "algo_template_abt", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_invalid_item", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , $ = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "image", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Y = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return K
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "measurements", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , K = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "measurement_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "measurement_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ee
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "unit_values", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , ee = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "value", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "unit", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , te = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating_total", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Number
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "rating_count", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_with_context", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_with_image", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_with_media", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_local_review", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_repeat_purchase", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_overall_fit_small", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_overall_fit_fit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_overall_fit_large", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_oversea_review", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_folded", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , _e = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "cover", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "url", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "duration", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "upload_time", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "mms_ext", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "cover_image_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return e
                }
            }), (0,
            q.__metadata)("design:type", e)], e.prototype, "highlight", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "media_marked", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , ae = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "image_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "cover_image_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "media_marked", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , ie = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "key_media_code", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "key_media_id", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , oe = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "image", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "is_snapshot", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "snapshotid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "modelid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "model_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "options", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , re = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "ctime", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "userid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating_star", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "status", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "mtime", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "editable", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "opt", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "filter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ne
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "mentioned", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_hidden", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , ne = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "offset", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "length", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "infoid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "type", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , se = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "tag_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "tag_description", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , le = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "product_quality", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "seller_service", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "delivery_service", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , de = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "tier_code", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "user_tier_badge_url", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "tier_text", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "user_tier_badge_text_color", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "user_tier_badge_background_color", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , pe = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "image", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Number
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "modelids", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "price", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "price_before_discount", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "stock", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "flash_sale_stock", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "promotionid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "start_time", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "end_time", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "discount", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "promo_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "promo_images", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "promo_overlay_image", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "raw_discount", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "hidden_price_display", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "reminder_count", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "flash_sale_type", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "brand_sale_brand_custom_logo", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_shop_preferred", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_shop_official", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ue
                }
            }), (0,
            q.__metadata)("design:type", ue)], e.prototype, "voucher", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ue
                }
            }), (0,
            q.__metadata)("design:type", ue)], e.prototype, "extra_discount_info", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "flash_catid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "item_type", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "reference_item_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cat_label", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating_star", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Number
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "rating_count", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_with_context", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rcount_with_image", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "video_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "thumb_url", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "duration", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "version", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return pe
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "formats", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return pe
                }
            }), (0,
            q.__metadata)("design:type", pe)], e.prototype, "default_format", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "format", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "defn", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "profile", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "path", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "url", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "width", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "height", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , ce = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "min_count", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "max_count", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "price", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "bundle_deal_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "bundle_deal_label", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "options", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "images", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ce
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "properties", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "type", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "color", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , me = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "campaignid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "group_buy_price", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "start_time", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "end_time", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "group_size", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "purchase_limit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "payment_duration", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "custom_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "custom_images", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "group_buy_catid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "users_paid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "custom_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "custom_image", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "preview_end_time", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "add_on_deal_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "add_on_deal_label", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "sub_type", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "promotion_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "voucher_code", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "label", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return me
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "exclusive_price_results", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "promotion_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_entitled", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "save_amount", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "label", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "url", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "url_text", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "mobile_image", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "pc_image", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "background_color", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "model_ep_price", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "model_ep_discount", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , ue = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "order_max_purchase_limit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "overall_purchase_limit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "item_overall_quota", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "start_date", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "end_date", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "promotionid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "voucher_code", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "reward_type", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "discount_value", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "discount_percentage", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "coin_percentage", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "min_spend", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , ge = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "flash_sale_price", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "hidden_price_display", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "extra_discount", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "extra_discount_stock", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "start_time", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "end_time", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "order_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "apply_coin_limits_validate", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "coins_earned_with_pictures_or_videos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "coins_earned_with_pictures_and_videos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "coins_earned_with_human_or_object", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "size_info_rewards", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , he = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "item_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ge
                }
            }), (0,
            q.__metadata)("design:type", ge)], e.prototype, "coin_reward_rule", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , ye = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "threshold", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "max_times", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "duration", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , ve = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "item_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "passed", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ye
                }
            }), (0,
            q.__metadata)("design:type", ye)], e.prototype, "limits_info", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , fe = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ve
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "coin_limits_validate_result", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return he
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "coin_reward_rule_list", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ve
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "coin_limits_validate_result", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return fe
                }
            }), (0,
            q.__metadata)("design:type", fe)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "can_rate", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , be = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "raw_data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "apply_coin_limits_validate", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "coin_succ", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "order_succ", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "review_prize_status", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , we = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "coins_earned", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "available_amount", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "referral_coins", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return be
                }
            }), (0,
            q.__metadata)("design:type", be)], e.prototype, "extra_info", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , ke = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return we
                }
            }), (0,
            q.__metadata)("design:type", we)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ve
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "coin_limits_validate_result", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "userid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "offset", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "limit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "type", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ke
                }
            }), (0,
            q.__metadata)("design:type", ke)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "filter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "flag", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "type", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Se
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "items", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Se = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "userid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "ctime", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "mtime", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "status", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating_star", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "editable", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "opt", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ne
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "mentioned", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "author_username", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "author_portrait", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "author_shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "anonymous", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "editable_date", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "images", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return oe
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "product_items", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "delete_reason", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "delete_operator", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ee
                }
            }), (0,
            q.__metadata)("design:type", Ee)], e.prototype, "UserRatingReply", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "show_reply", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Ee = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "userid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "ctime", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "mtime", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "status", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating_star", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "editable", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "opt", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ne
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "mentioned", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Ce = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "shop", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "user", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "shop", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "user", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "image", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Re = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ce
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "options", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Pe = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "count", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Ne = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "item_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "item_image", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Re
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "option_infos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Pe
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "count_infos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "downgrade_switch", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Je = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ne
                }
            }), (0,
            q.__metadata)("design:type", Ne)], e.prototype, "data", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Me = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "is_seller", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Q
                }
            }), (0,
            q.__metadata)("design:type", Q)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Me
                }
            }), (0,
            q.__metadata)("design:type", Me)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "be_error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "minimum_videos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return xe
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "tags", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "coins_earned_with_pics_and_videos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "coins_earned", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "minimum_characters", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "minimum_pictures", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Te
                }
            }), (0,
            q.__metadata)("design:type", Te)], e.prototype, "popup_config", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "default_rating_star", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , xe = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating_star", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return se
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "tags", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Te = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "item", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "model", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "popup_text", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "popup_button_refer_now", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "popup_refer_now_url", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Oe = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "userid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "offset", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "limit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "filter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "type", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Oe
                }
            }), (0,
            q.__metadata)("design:type", Oe)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Q
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "items", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "rateable", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Ie = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ie
                }
            }), (0,
            q.__metadata)("design:type", Ie)], e.prototype, "buyer", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "userid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "username", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "portrait", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Le = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Le
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "comments", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Ae = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ae
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ze
                }
            }), (0,
            q.__metadata)("design:type", ze)], e.prototype, "score", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , ze = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "text", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "symbol", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "total", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , qe = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "offset", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "limit", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return qe
                }
            }), (0,
            q.__metadata)("design:type", qe)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Q
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "rate_list", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_end", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , De = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "limit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "is_asc", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "apply_coin_limits_validate", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shop_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "shop_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "user_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "user_name", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Be = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "item_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "model_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shop_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "model_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "image", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "amount", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "status", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "item_price", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "snapshot_id", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Fe = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return De
                }
            }), (0,
            q.__metadata)("design:type", De)], e.prototype, "shop_info", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Be
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "items", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "order_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "coin_to_earn", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rate_deadline", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "total_price", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "currency", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , We = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_end", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Fe
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "rate_list", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cursor", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "buyer_to_rate_count", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Ze = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return We
                }
            }), (0,
            q.__metadata)("design:type", We)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "raw_data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "referral_coins", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Ue = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ze
                }
            }), (0,
            q.__metadata)("design:type", Ze)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Ve = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ue
                }
            }), (0,
            q.__metadata)("design:type", Ue)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "is_seller", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Se
                }
            }), (0,
            q.__metadata)("design:type", Se)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "rating", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "photos", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , He = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ve
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return He
                }
            }), (0,
            q.__metadata)("design:type", He)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Xe = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ve
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return He
                }
            }), (0,
            q.__metadata)("design:type", He)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Xe
                }
            }), (0,
            q.__metadata)("design:type", Xe)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "expiry_time", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_expired", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_rated", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "ordersn", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "order_privacy_toggle_status", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return $e
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "items", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "coin_to_earn", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ge
                }
            }), (0,
            q.__metadata)("design:type", Ge)], e.prototype, "driver_meta", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "algo_template_abt", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , Ge = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "can_rate", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "driver_service", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "driver_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "driver_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "driver_photo", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "supplier_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "supplier_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "forder_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return je
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "reason_tags", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "supplier_type", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "show_disclaimer", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , je = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "driver_service", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Qe
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "tag_meta", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Qe = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "tag_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "tag_name", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , $e = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "modelid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "image", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "image_list", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "model_names", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "sync_to_social_toggle", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "template_tags", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return tt
                }
            }), (0,
            q.__metadata)("design:type", tt)], e.prototype, "sync_to_social_detail", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ke
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "template_tags_hints", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ye
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "algo_tag_hints", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Ye = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "template_tag", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return et
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "hints", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , Ke = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "tag", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "hint", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , et = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "hint_text", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "sentiment", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , tt = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "qcResult", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "enableProductRatingSync", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , _t = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "anonymous", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ue
                }
            }), (0,
            q.__metadata)("design:type", Ue)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Q
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "items", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "rateable", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , at = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return _t
                }
            }), (0,
            q.__metadata)("design:type", _t)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Se
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "items", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , it = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return at
                }
            }), (0,
            q.__metadata)("design:type", at)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "like", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return it
                }
            }), (0,
            q.__metadata)("design:type", it)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "like_count", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , ot = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmtid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shopid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "itemid", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "reason", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "report_source", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "migrated_itemid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "be_error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ue
                }
            }), (0,
            q.__metadata)("design:type", Ue)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "enable", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "orderid", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ot
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "signature", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_white_list_user", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "show_review_prize", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "reward_coin", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "item_id", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , rt = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shop_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "item_id", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return rt
                }
            }), (0,
            q.__metadata)("design:type", rt)], e.prototype, "data", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shop_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "item_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "price", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , nt = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmt_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "order_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shop_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return String
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "photos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return _e
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "videos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return le
                }
            }), (0,
            q.__metadata)("design:type", le)], e.prototype, "detailed_rating", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ue
                }
            }), (0,
            q.__metadata)("design:type", Ue)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ae
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "photos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return _e
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "videos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Map
                }
            }), (0,
            q.__metadata)("design:type", Object)], e.prototype, "template_tag_comments", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , st = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ae
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "photos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return _e
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "videos", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , lt = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "order_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shop_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmt_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return le
                }
            }), (0,
            q.__metadata)("design:type", le)], e.prototype, "detailed_rating", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return st
                }
            }), (0,
            q.__metadata)("design:type", st)], e.prototype, "follow_up", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return nt
                }
            }), (0,
            q.__metadata)("design:type", nt)], e.prototype, "item_rating", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "cmt_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "order_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "shop_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return Ue
                }
            }), (0,
            q.__metadata)("design:type", Ue)], e.prototype, "data", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ae
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "images", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return _e
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "videos", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "comment", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "ctime", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "after_days", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return re
                }
            }), (0,
            q.__metadata)("design:type", re)], e.prototype, "follow_up_reply", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , dt = (function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return ct
                }
            }), (0,
            q.__metadata)("design:type", Array)], e.prototype, "hit", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "error", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "error_msg", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return dt
                }
            }), (0,
            q.__metadata)("design:type", dt)], e.prototype, "common_conf", void 0),
            e = t = (0,
            q.__decorate)([D.Serializable], e)
        }(),
        function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "max_review_count", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)({
                mapTo: function() {
                    return pt
                }
            }), (0,
            q.__metadata)("design:type", pt)], e.prototype, "fields_toggle", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "is_mandatory_fill_star", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }())
          , pt = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "seller_service", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "delivery_service", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Boolean)], e.prototype, "driver_service", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }()
          , ct = function() {
            function e() {}
            var t;
            return t = e,
            e.fromJSON = function(e) {
                return (0,
                D.deserialize)(e, t)
            }
            ,
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "group_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "layer_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "group_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "parameter", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "layer_key", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "layer_name", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", Number)], e.prototype, "exp_id", void 0),
            (0,
            q.__decorate)([(0,
            D.JsonProperty)(), (0,
            q.__metadata)("design:type", String)], e.prototype, "exp_name", void 0),
            t = (0,
            q.__decorate)([D.Serializable], e)
        }();
        const {fetchInfo: mt, formPost: ut, jsonPost: gt} = z.FetchUtils;
        function ht(e, t, _) {
            return async a => a((0,
            o.a)(R.SUCCESS, {
                data: {
                    cmtid: e,
                    updateData: t,
                    userId: _
                }
            }))
        }
        Je.fromJSON,
        U.fromJSON,
        (0,
        A.isFeatureEnabled)("ab577b870f2ce608b36970142f91c777f2575a8110343f22354d0848a75c1fad", !1)
    }
    ,
    24906: (e, t, _) => {
        "use strict";
        _.d(t, {
            kZ: () => C,
            x7: () => R,
            Og: () => Z,
            Cm: () => H,
            sO: () => x,
            NS: () => J,
            _w: () => $,
            uJ: () => Y,
            EH: () => Q,
            eK: () => j,
            ZZ: () => M
        });
        var a = _(6714)
          , i = _(96474)
          , o = _(87363)
          , r = _.n(o);
        const n = (0,
        o.createContext)(null)
          , s = (0,
        o.createContext)(null);
        let l;
        function d() {
            return l
        }
        var p;
        !function(e) {
            e[e.setTimeout = 0] = "setTimeout",
            e[e.setInterval = 1] = "setInterval",
            e[e.requestAnimationFrame = 2] = "requestAnimationFrame",
            e[e.defer = 3] = "defer"
        }(p || (p = {}));
        const c = "undefined" == typeof window
          , m = !c
          , u = new Error("TaskTimeout")
          , g = Promise.resolve()
          , h = new TypeError("Unknown empty error");
        function y(e, t) {
            const _ = {
                id: t,
                status: 2,
                value: e.then((e => {
                    _.status = 0;
                    const t = _._v;
                    return t.data = e,
                    t.err = null,
                    t.pending = !1,
                    t.staled = !1,
                    e
                }
                ), (e => {
                    _.status = 1;
                    const t = _._v;
                    throw t.err = e,
                    t.pending = !1,
                    t.staled = !1,
                    e
                }
                )),
                _v: {
                    pending: !0,
                    fromCache: !1,
                    staled: !1,
                    data: null,
                    uid: t,
                    err: null
                }
            };
            d().taskStack.push(_)
        }
        function v(e) {
            return d().taskStack.filter((t => t.id === e))[0]
        }
        function f() {
            return {
                stackSSRTask: y,
                getSSRTask: v
            }
        }
        h.stack = "";
        let b = 0;
        const w = () => {}
        ;
        async function k(e) {
            return new Promise((t => {
                setTimeout(( () => t(null)), e)
            }
            ))
        }
        const S = ["ssrTimeout", "query", "keyMaker"];
        function E(e, t) {
            const _ = (0,
            o.useContext)(n);
            return function(e, t=[]) {
                const _ = function() {
                    const e = (0,
                    o.useState)(0)[1];
                    return () => {
                        e((e => 255 & ++e))
                    }
                }()
                  , {task: i, cache: r, keyMaker: l, loop: d, onComplete: p, onError: m, onSSRTaskTimeout: g, ssrTimeout: h, retain: y, ssr: v, disabled: S=!1} = (0,
                o.useMemo)(e, t)
                  , E = (0,
                o.useContext)(n).taskMng
                  , C = (0,
                o.useContext)(s)
                  , {getSSRTask: R, stackSSRTask: P} = f()
                  , N = (0,
                o.useState)(( () => ({
                    unsub: w,
                    reset() {
                        this.unsub(),
                        this.unsub = w
                    }
                })))[0]
                  , J = (0,
                o.useRef)(!S)
                  , M = "function" == typeof l ? l() : l || String(255 & b++);
                (0,
                o.useMemo)(( () => {
                    if (v && c) {
                        let e = null;
                        if (C)
                            e = C[M];
                        else {
                            const t = R(M);
                            if (t && 0 === t.status && (e = t._v),
                            !t) {
                                const e = function(e, t) {
                                    return t ? () => new Promise(( (_, a) => {
                                        _(e()),
                                        setTimeout(( () => {
                                            a(u)
                                        }
                                        ), t)
                                    }
                                    )) : e
                                }(i, h)
                                  , t = e();
                                P(t.catch((e => {
                                    throw g && g(),
                                    m && m(e),
                                    e
                                }
                                )), M)
                            }
                        }
                        e ? (p && (e.pending || p(e)),
                        E.add({
                            task: null,
                            id: M,
                            cachePolicy: r,
                            currentValue: e,
                            inActive: S
                        })) : E.add({
                            task: null,
                            id: M,
                            inActive: S,
                            cachePolicy: r,
                            currentValue: {
                                fromCache: !1,
                                pending: !0,
                                data: null,
                                err: null,
                                staled: !1,
                                uid: M
                            }
                        })
                    } else
                        N.reset(),
                        E.add({
                            task: i,
                            id: M,
                            cachePolicy: r,
                            inActive: S
                        })
                }
                ), [M]),
                (0,
                o.useEffect)(( () => {
                    J.current || S || (E.add({
                        task: i,
                        id: M,
                        cachePolicy: r,
                        inActive: !1
                    }),
                    J.current = !0)
                }
                ), [S]);
                const x = (0,
                o.useMemo)(( () => {
                    if (!d)
                        return !1;
                    const e = {
                        count: 1 / 0,
                        interval: 1e3,
                        mode: "exhaust"
                    };
                    return "object" == typeof d && Object.assign(e, d),
                    e
                }
                ), [d]);
                (0,
                o.useEffect)(( () => {
                    if (!d || !x || S)
                        return;
                    let e = !1;
                    const {interval: t, mode: _, count: a} = x;
                    let o = 0;
                    const r = async () => {
                        switch (_) {
                        case "exhaust":
                            await E.add({
                                task: i,
                                id: M,
                                cachePolicy: "cache-first",
                                isLooping: !0,
                                inActive: !1
                            }),
                            await k(t);
                            break;
                        case "switch":
                            await Promise.race([E.add({
                                task: i,
                                id: M,
                                cachePolicy: "cache-first",
                                isLooping: !0,
                                inActive: !1
                            }), await k(t)])
                        }
                    }
                    ;
                    return (async () => {
                        for (; o++ <= a && !e; )
                            await r()
                    }
                    )(),
                    () => {
                        e = !0
                    }
                }
                ), [d, S, M]);
                const T = E.getTaskStateById(M)
                  , O = (0,
                o.useRef)(null);
                (0,
                o.useEffect)(( () => {
                    const e = E.getTaskStateById(M);
                    return (null == T ? void 0 : T.uid) === (null == e ? void 0 : e.uid) && ["data", "pending"].some((t => (null == T ? void 0 : T[t]) !== (null == e ? void 0 : e[t]))) && _(),
                    N.unsub = E.subscribeTaskById(M, _),
                    () => {
                        N.reset()
                    }
                }
                ), [M, S]),
                (0,
                o.useEffect)(( () => {
                    !y || !1 !== (null == T ? void 0 : T.pending) || T.staled || T.err || (O.current = null == T ? void 0 : T.data)
                }
                ), [T, y]),
                (0,
                o.useDebugValue)(T),
                (0,
                o.useEffect)(( () => {
                    p && !S && T && T.data && !T.pending && !T.staled && p(T)
                }
                ), [T, S, p]);
                const I = function(e) {
                    const t = (0,
                    o.useRef)(e);
                    return t.current = e,
                    (0,
                    o.useState)(( () => (...e) => t.current(...e)))[0]
                }(( () => {
                    S || E.add({
                        task: i,
                        id: M,
                        cachePolicy: r,
                        inActive: !1
                    })
                }
                ))
                  , L = e => E.mutate({
                    id: M,
                    data: e
                });
                return (0,
                o.useMemo)(( () => {
                    const e = (0,
                    a.Z)({}, T);
                    return y && e.pending && (e.data = O.current,
                    e.staled = !0),
                    (0,
                    a.Z)({}, e, {
                        refresh: I,
                        mutate: L
                    })
                }
                ), [T])
            }(( () => {
                const t = e()
                  , {ssrTimeout: o=1 / 0, query: r, keyMaker: n} = t
                  , s = (0,
                i.Z)(t, S)
                  , l = "function" == typeof n ? n() : n;
                return (0,
                a.Z)({
                    keyMaker: l,
                    task: () => {
                        const e = _.service;
                        return r(e)
                    }
                    ,
                    onSSRTaskTimeout: () => {
                        _.onSSRTaskTimeout && _.onSSRTaskTimeout({
                            type: "Query",
                            metadata: {
                                uid: l,
                                ssrTimeout: o
                            }
                        })
                    }
                    ,
                    ssrTimeout: o
                }, s)
            }
            ), t)
        }
        var C, R, P = _(50283);
        function N(e) {
            return (t, _) => e.indexOf(t) - e.indexOf(_)
        }
        function J(e) {
            const t = N(["shopid", "itemid", "offset", "limit", "filter", "flag", "type", "tag_filter", "exclude_filter", "request_source", "variation_filters", "relevant_reviews", "filter_size", "fold_filter"]);
            return E(( () => ({
                keyMaker: () => `[getRatings]:${(0,
                P.stringify)(e, {
                    sort: t,
                    skipNull: !0,
                    skipEmptyString: !0
                })}`,
                retain: !0,
                query: t => t.getRatings(e),
                cache: "cache-first"
            })), [e])
        }
        function M(e) {
            return E(( () => ({
                keyMaker: () => `[getUserRatingSummary]:${(0,
                P.stringify)(e, {
                    skipNull: !0,
                    skipEmptyString: !0
                })}`,
                query: async t => await t.getUserRatingSummary(e),
                cache: "cache-first",
                disabled: !(e.userid && e.userid > 0)
            })), [e])
        }
        function x(e) {
            return E(( () => ({
                keyMaker: () => `[getBuyerRatings]:${(0,
                P.stringify)(e, {
                    skipNull: !0,
                    skipEmptyString: !0
                })}`,
                retain: !0,
                query: t => t.getBuyerRatings(e),
                cache: "cache-first"
            })), [e])
        }
        new (_(83076).Subject),
        function(e) {
            e[e.NotSpecified = 0] = "NotSpecified",
            e[e.WithComment = 1] = "WithComment",
            e[e.WithPhoto = 2] = "WithPhoto",
            e[e.WithVideo = 3] = "WithVideo",
            e[e.LocalReview = 9] = "LocalReview",
            e[e.RepeatPurchase = 10] = "RepeatPurchase",
            e[e.OverallFitSmall = 11] = "OverallFitSmall",
            e[e.OverallFitFit = 12] = "OverallFitFit",
            e[e.OverallFitLarge = 13] = "OverallFitLarge"
        }(C || (C = {})),
        function(e) {
            e[e.All = 0] = "All",
            e[e.OneStar = 1] = "OneStar",
            e[e.TwoStar = 2] = "TwoStar",
            e[e.ThreeStar = 3] = "ThreeStar",
            e[e.FourStar = 4] = "FourStar",
            e[e.FiveStar = 5] = "FiveStar"
        }(R || (R = {}));
        const T = e => "function" == typeof e
          , O = Object.freeze({});
        class I {
            constructor(e={}) {
                this._updateQueue = new Set,
                this._cache = {},
                this.createCacheHelper = e => [ () => this._cache[e], t => {
                    var _;
                    this._cache[e] = (0,
                    a.Z)({}, t, {
                        t: Date.now()
                    }),
                    null === (_ = this._observerMap[e]) || void 0 === _ || _.forEach((e => {
                        e()
                    }
                    ))
                }
                , t => this.subscribeTaskById(e, t)],
                this._defaultTaskResult = (0,
                a.Z)({}, e.defaultTaskResult || {}),
                this._taskStateMap = {},
                this._observerMap = {},
                Object.keys(this._taskStateMap).forEach((e => {
                    this._observerMap[e] = []
                }
                ))
            }
            taskIsRunning(e) {
                const t = this.getTaskStateById(e);
                return !!t && (t.pending || t.staled)
            }
            exist(e) {
                return void 0 !== this._taskStateMap[e]
            }
            getTaskStateById(e) {
                return this._taskStateMap[e]
            }
            async add(e) {
                var t;
                const {task: _, id: i, cachePolicy: o, currentValue: r, inActive: n, isLooping: s=!1} = e
                  , l = this.getTaskStateById(i);
                if (this.taskIsRunning(i))
                    return null !== (t = null == l ? void 0 : l._p) && void 0 !== t ? t : g;
                const d = this._defaultTaskResult[i];
                if (null == d ? void 0 : d.data)
                    return d.fromCache = !0,
                    this._taskStateMap[i] = d,
                    "number" != typeof o && "cache" !== o && "cache-first" !== o || this._addCache(i, d.data),
                    s && this._commitUpdate(i),
                    g;
                if (r)
                    return this._taskStateMap[i] = r,
                    g;
                const p = {
                    err: null,
                    staled: !1,
                    pending: !n,
                    data: null,
                    fromCache: !1,
                    uid: i,
                    _p: g
                };
                this._taskStateMap[i] = p;
                const c = this._tryToGetCachedData(i, o);
                return c && "cache-first" === o && !n && (p.staled = !0),
                c && (p.data = c,
                p.pending = !1,
                p.fromCache = !0),
                this._commitUpdate(i),
                n || !p.staled && c ? g : (p._p = _().then((e => {
                    let t = this.getTaskStateById(i);
                    const _ = this._observerMap[i];
                    t && (t = (0,
                    a.Z)({}, t),
                    this._taskStateMap[i] = t,
                    t.data = e,
                    t.staled = t.pending = !1,
                    t.err = null,
                    t._t = Date.now(),
                    t.fromCache = !1),
                    _ && _.length && (this._commitUpdate(i),
                    o && this._addCache(i, e))
                }
                ), (e => {
                    null == e && (e = h);
                    let t = this.getTaskStateById(i);
                    const _ = this._observerMap[i];
                    t && (t = (0,
                    a.Z)({}, t),
                    this._taskStateMap[i] = t,
                    t.data = c,
                    t.staled = t.pending = !1,
                    t.err = e,
                    t._t = Date.now(),
                    e === u && m && (t.pending = !0,
                    t.err = null)),
                    _ && _.length && this._commitUpdate(i)
                }
                )),
                p._p)
            }
            async mutate(e) {
                var t;
                const {id: _, data: a} = e
                  , i = this.getTaskStateById(_);
                if (this.taskIsRunning(_))
                    return null !== (t = null == i ? void 0 : i._p) && void 0 !== t ? t : g;
                let o, r = a;
                const n = {
                    err: null,
                    staled: !1,
                    pending: !1,
                    data: null,
                    uid: _,
                    fromCache: !1
                };
                if (T(r))
                    try {
                        r = r(null == i ? void 0 : i.data)
                    } catch (s) {
                        o = s
                    }
                return r && T(r.then) && (r = await r.catch((e => {
                    o = e
                }
                ))),
                o ? (n.data = null == i ? void 0 : i.data,
                n.err = o) : n.data = r,
                this._taskStateMap[_] = n,
                this._commitUpdate(_),
                o ? g : r
            }
            del(e) {
                delete this._taskStateMap[e],
                delete this._observerMap[e],
                delete this._cache[e]
            }
            subscribeTaskById(e, t) {
                return this._observerMap[e] = this._observerMap[e] || [],
                this._observerMap[e].push(t),
                () => {
                    const _ = this._observerMap[e];
                    if (!_)
                        return;
                    const a = _.length;
                    for (let e = 0; e < a; e++)
                        if (_[e] === t)
                            return void _.splice(e, 1);
                    0 === this._observerMap[e].length && delete this._observerMap[e]
                }
            }
            destroy() {
                this._taskStateMap = this._observerMap = this._defaultTaskResult = this._cache = this._updateQueue = null
            }
            _commitUpdate(e) {
                const t = this.getTaskStateById(e);
                t && !this._updateQueue.has(e) && (this._updateQueue.add(e),
                this._taskStateMap[e] = (0,
                a.Z)({}, t),
                this._flushUpdateQueue())
            }
            _flushUpdateQueue() {
                c || setTimeout(( () => {
                    this._updateQueue.forEach((e => {
                        this._observerMap[e] && this._observerMap[e].forEach((e => {
                            e()
                        }
                        ))
                    }
                    )),
                    this._defaultTaskResult = O,
                    this._updateQueue.clear()
                }
                ), 4)
            }
            _existCache(e) {
                return !!this._cache[e]
            }
            _addCache(e, t) {
                t && (this._cache[e] = {
                    data: t,
                    t: Date.now()
                })
            }
            _tryToGetCachedData(e, t) {
                let _ = null;
                if (this._existCache(e)) {
                    const a = this._cache[e];
                    ("number" == typeof t && Date.now() - a.t < t || "cache" === t || "cache-first" === t) && (_ = a.data)
                }
                return _
            }
        }
        function L(e) {
            const t = (0,
            o.useContext)(s)
              , {children: _, service: i={}, task: l} = e
              , d = e.taskResult || t || {}
              , [p] = (0,
            o.useState)(( () => {
                const e = (0,
                a.Z)({}, i);
                return {
                    value: e,
                    add: function(t) {
                        const _ = Object.keys(t);
                        return _.forEach((_ => {
                            e[_],
                            e[_] = t[_]
                        }
                        )),
                        () => {
                            _.forEach((t => {
                                delete e[t]
                            }
                            ))
                        }
                    }
                }
            }
            ))
              , c = (0,
            o.useState)(( () => {
                const e = l || new I({
                    defaultTaskResult: d
                });
                return {
                    service: p.value,
                    addServices: p.add,
                    taskMng: e
                }
            }
            ))[0];
            return (0,
            o.useEffect)(( () => {
                window.axon_task_mng = c.taskMng
            }
            )),
            r().createElement(n.Provider, {
                value: c
            }, _)
        }
        var A = _(72148)
          , z = _(85625);
        function q(e) {
            const t = e.match(/(test|uat|staging)\.shopee\./i);
            return t ? t[1].toLowerCase() : "live"
        }
        const D = {
            PC: {
                antiFraudConfig: {
                    antiCrawler: {
                        appKey: "Rating.PC"
                    }
                }
            },
            RW: {
                antiFraudConfig: {
                    antiCrawler: {
                        appKey: "Rating.RW"
                    }
                }
            }
        }["mobile" === (0,
        z.UAParser)("user-agent").device.type ? "RW" : "PC"]
          , B = {
            getItemRating: e => F("/api/v2/item/get_rating", e),
            getRatingTagFilters: e => F("/api/v2/item/get_rating_tagfilters", e),
            getUserRatingSummary: e => F("/api/v2/user/get_rating_summary", e, !0),
            getVariationFilter: e => F("/api/v4/item/get_rating_variation_filters", e),
            getRatings: e => {
                const t = q(window.location.hostname);
                return F(`/api/${"test" === t || "uat" === t ? "v4" : "v2"}/item/get_ratings`, e)
            }
            ,
            getMyRatingList: e => F("/api/v4/item/get_my_rating_list", e),
            getMyRatableList: e => F("/api/v4/item/get_my_ratable_list", e),
            getRatingMeta: e => F("/api/v2/item/get_rating_meta", e),
            getBuyerRatings: e => F("/api/v2/buyer/get_ratings", e),
            getShopRatings: e => F("/api/v4/seller_operation/get_shop_ratings_new", e),
            getShopRatingsV2: e => F("/api/v2/shop/get_ratings", e),
            getShopRatingSummary: e => F("/api/v4/seller_operation/get_rating_summary_new", e),
            likeShopRating: e => W("/api/v4/seller_operation/like_item_rating_new", e),
            reportRating: e => W("/api/v2/report_item_rating", e),
            likeItemRating: e => W("/api/v2/like_item_rating", e),
            getOrderItemRatings: e => F("/api/v2/order/get_item_ratings", e),
            getOrderBuyerRatings: e => F("/api/v2/order/get_buyer_ratings", e),
            getRatingCoinRewardRuleList: e => F("api/v4/get_rating_coin_reward_rule_list", e),
            getRateOrderDetail: e => F("/api/v2/order/get_rate_order_detail", e),
            addFollowUp: e => W("/api/v4/item/edit_rating", e),
            addRating: e => W("/api/v2/item/add_rating", e),
            editRating: e => W("/api/v2/item/edit_rating", e),
            ratingCommentCheck: e => W("/api/v4/comment/text_quality_detection", e),
            postRatingAnonymous: e => W("/api/v2/item/set_rating_anonymous", e)
        };
        async function F(e, t, _=!1) {
            const i = (0,
            P.stringifyUrl)({
                url: e,
                query: t
            });
            return await A.e9.get(i, (0,
            a.Z)({}, _ ? D : {}))
        }
        async function W(e, t, _=!1) {
            return await A.e9.post(e, t, (0,
            a.Z)({}, _ ? D : {}))
        }
        function Z(e) {
            return r().createElement(L, {
                service: B
            }, e.children)
        }
        var U = _(15585);
        const V = {
            PC: {
                antiFraudConfig: {
                    antiCrawler: {
                        appKey: "Rating.PC"
                    }
                }
            },
            RW: {
                antiFraudConfig: {
                    antiCrawler: {
                        appKey: "Rating.RW"
                    }
                }
            }
        }["mobile" === (0,
        z.UAParser)("user-agent").device.type ? "RW" : "PC"]
          , H = {
            getItemRating: e => X("/api/v2/item/get_rating", e),
            getRatingTagFilters: e => X("/api/v2/item/get_rating_tagfilters", e),
            getUserRatingSummary: e => X("/api/v2/user/get_rating_summary", e, !0),
            getVariationFilter: e => X("/api/v4/item/get_rating_variation_filters", e),
            getRatings: e => {
                const t = q(window.location.hostname);
                return X(`/api/${"test" === t || "uat" === t ? "v4" : "v2"}/item/get_ratings`, e)
            }
            ,
            getMyRatingList: e => X("/api/v4/item/get_my_rating_list", e),
            getMyRatableList: e => X("/api/v4/item/get_my_ratable_list", e),
            getRatingMeta: e => X("/api/v2/item/get_rating_meta", e),
            getBuyerRatings: e => X("/api/v2/buyer/get_ratings", e),
            getShopRatings: e => X("/api/v4/seller_operation/get_shop_ratings_new", e),
            getShopRatingsV2: e => X("/api/v2/shop/get_ratings", e),
            getShopRatingSummary: e => X("/api/v4/seller_operation/get_rating_summary_new", e),
            likeShopRating: e => G("/api/v4/seller_operation/like_item_rating_new", e),
            reportRating: e => G("/api/v2/report_item_rating", e),
            likeItemRating: e => G("/api/v2/like_item_rating", e),
            getOrderItemRatings: e => X("/api/v2/order/get_item_ratings", e),
            getOrderBuyerRatings: e => X("/api/v2/order/get_buyer_ratings", e),
            getRatingCoinRewardRuleList: e => X("api/v4/get_rating_coin_reward_rule_list", e),
            getRateOrderDetail: e => X("/api/v2/order/get_rate_order_detail", e),
            addFollowUp: e => G("/api/v4/item/edit_rating", e),
            addRating: e => G("/api/v2/item/add_rating", e),
            editRating: e => G("/api/v2/item/edit_rating", e),
            ratingCommentCheck: e => G("/api/v4/comment/text_quality_detection", e),
            postRatingAnonymous: e => G("/api/v2/item/set_rating_anonymous", e)
        };
        async function X(e, t, _=!1) {
            const i = (0,
            P.stringifyUrl)({
                url: e,
                query: t
            });
            return await U.FetchUtils.get(i, (0,
            a.Z)({}, _ ? V : {}))
        }
        async function G(e, t, _=!1) {
            return await U.FetchUtils.post(e, t, (0,
            a.Z)({}, _ ? V : {}))
        }
        function j(e) {
            const t = N(["shopid", "userid", "offset", "limit", "type", "replied"]);
            return E(( () => ({
                keyMaker: () => `[getShopRatings]:${(0,
                P.stringify)(e, {
                    sort: t,
                    skipNull: !0,
                    skipEmptyString: !0
                })}`,
                retain: !0,
                query: t => t.getShopRatings(e),
                cache: "cache-first"
            })), [e])
        }
        function Q(e) {
            const t = N(["shop_id", "userid", "replied"]);
            return E(( () => ({
                keyMaker: () => `[getShopRatingSummary]:${(0,
                P.stringify)(e, {
                    sort: t,
                    skipNull: !0,
                    skipEmptyString: !0
                })}`,
                query: async t => await t.getShopRatingSummary(e),
                cache: "cache-first",
                disabled: !(e.userid && e.shop_id)
            })), [])
        }
        function $(e) {
            return E(( () => ({
                keyMaker: () => `[getMyRatableList]:${(0,
                P.stringify)(e, {
                    skipNull: !0,
                    skipEmptyString: !0
                })}`,
                retain: !0,
                query: t => t.getMyRatableList(e),
                cache: "cache-first"
            })), [e])
        }
        function Y(e) {
            return E(( () => ({
                keyMaker: () => `[getMyRatingList]:${(0,
                P.stringify)(e, {
                    skipNull: !0,
                    skipEmptyString: !0
                })}`,
                retain: !0,
                query: t => t.getMyRatingList(e),
                cache: "cache-first"
            })), [e])
        }
    }
    ,
    39081: (e, t, _) => {
        "use strict";
        _.d(t, {
            rN: () => y,
            Ke: () => u
        });
        var a = _(87363)
          , i = _.n(a)
          , o = _(83076);
        Object.freeze([]);
        const r = Object.freeze({})
          , n = () => {}
          , s = (0,
        a.createContext)(void 0)
          , l = (0,
        a.createContext)(null);
        function d(e) {
            const {type: t, extInfo: _, children: o} = e
              , r = u();
            return (0,
            a.useEffect)(( () => {
                r(String(t), _)
            }
            ), [_, r, t]),
            i().createElement(i().Fragment, null, o)
        }
        function p(e, t, _) {
            const i = (0,
            a.useContext)(s)
              , r = (0,
            a.useContext)(l);
            (0,
            a.useLayoutEffect)(( () => {
                if (null == r || !r._subject)
                    return;
                const a = r._subject.pipe((0,
                o.filter)((t => (!_ || t.identifier === i) && ("function" == typeof e ? e(t) : t.type === e)))).subscribe((e => {
                    try {
                        t(e)
                    } catch (_) {}
                }
                ));
                return () => {
                    a.unsubscribe()
                }
            }
            ), [i, _])
        }
        function c() {
            const e = (0,
            a.useContext)(l);
            if (!e)
                throw new Error("Tracking Context not found, please wrap with TrackingScope");
            return e.getData
        }
        function m(e, t) {
            const _ = (0,
            a.useContext)(l);
            (0,
            a.useMemo)(( () => {
                null == _ || _.patch(e)
            }
            ), t)
        }
        function u(e) {
            const t = (0,
            a.useContext)(l);
            return (null == t ? void 0 : t.trackingEvent) || n
        }
        function g(e) {
            const {field: t, data: _} = e;
            return m((e => (e[t] = _,
            e)), [t, _]),
            null
        }
        function h({children: e, identifier: t={}, context: _}) {
            return i().createElement(s.Provider, {
                value: t
            }, i().createElement(l.Provider, {
                value: _
            }, e))
        }
        function y() {
            const e = new o.Subject;
            return {
                TrackingScope: function({children: t, dataset: _, identifier: o={}}) {
                    const n = (0,
                    a.useContext)(l)
                      , s = (null == n ? void 0 : n.getData()) || r
                      , d = _ ? Object.keys(_) : []
                      , p = (0,
                    a.useMemo)(( () => Object.assign({}, s, _)), [s, ...d.map((e => _[e]))])
                      , c = (0,
                    a.useRef)();
                    c.current = p;
                    const m = function(e) {
                        const t = (0,
                        a.useRef)(e);
                        return t.current = e,
                        (0,
                        a.useState)(( () => (...e) => null == t.current ? void 0 : t.current(...e)))[0]
                    }(( () => c.current))
                      , u = (0,
                    a.useState)(( () => {
                        const t = (t, _) => {
                            e.next({
                                type: t,
                                dataset: m(),
                                extInfo: _,
                                identifier: o
                            })
                        }
                        ;
                        return {
                            getData: () => m(),
                            patch: e => {
                                c.current = e(m())
                            }
                            ,
                            trackingEvent: (...e) => {
                                const _ = e[0];
                                Array.isArray(_) ? _.forEach((e => t(e.evt, e.extInfo))) : t(...e)
                            }
                            ,
                            _subject: e
                        }
                    }
                    ))[0];
                    return i().createElement(h, {
                        context: u,
                        identifier: o
                    }, t)
                },
                TrackingScopeData: g,
                TrackingImpressionView: d,
                useTrackingPatch: m,
                useTrackEvent: () => {
                    const t = (0,
                    a.useContext)(l);
                    return (null == t ? void 0 : t._subject) === e && t.trackingEvent || n
                }
                ,
                useTrackRule: p,
                useGetTrackDataset: c
            }
        }
    }
    ,
    88216: (e, t, _) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Required = t.JsonProperty = void 0,
        t.Serializable = function(e) {
            Reflect.defineMetadata(i, !0, e)
        }
        ,
        t.checkIsSerializable = o,
        t.registerDecorator = function(e) {
            var t;
            const {target: _, property: a, transform: i, validator: o} = e;
            let r = new Map;
            if (Reflect.hasMetadata(_, _) && (r = Reflect.getMetadata(_, _)),
            null != (t = r.get(a)) && t.length) {
                var n, s;
                const e = null != (n = null == (s = r) ? void 0 : s.get(a)) ? n : [];
                r.set(a, e.concat({
                    transform: i,
                    validator: o
                }))
            } else
                r.set(a, [{
                    transform: i,
                    validator: o
                }]);
            Reflect.defineMetadata(_, r, _)
        }
        ,
        t.deserialize = function(e, t, _) {
            let a = new t;
            const i = Reflect.getMetadata(t.prototype, t.prototype);
            if (!o(t) || !i)
                return e;
            for (const o of i.keys()) {
                var r;
                const n = null != (r = null == i ? void 0 : i.get(o)) ? r : [];
                a[o] = null == e ? void 0 : e[o];
                const s = t.prototype.constructor.name
                  , l = Reflect.getMetadata("design:type", a, o);
                n.forEach(( ({transform: e, validator: t}) => {
                    null == t || t(s, o, a[o], l);
                    const i = e(a[o], l, _);
                    null != i ? a[o] = i : _ && delete a[o]
                }
                ))
            }
            return a = Object.assign(e || {}, a),
            a
        }
        ;
        var a = _(48500);
        Object.defineProperty(t, "JsonProperty", {
            enumerable: !0,
            get: function() {
                return a.JsonProperty
            }
        }),
        Object.defineProperty(t, "Required", {
            enumerable: !0,
            get: function() {
                return a.Required
            }
        });
        const i = "SERIALIZE_META_DATA_KEY";
        function o(e) {
            return Reflect.hasOwnMetadata(i, e)
        }
    }
    ,
    34154: (e, t, _) => {
        "use strict";
        var a = _(46544).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.JsonProperty = function(e) {
            return function(t, _) {
                (0,
                i.registerDecorator)({
                    target: t,
                    property: _,
                    transform(t, _, o) {
                        if (!e && _ && !(0,
                        i.checkIsSerializable)(_))
                            switch (_.name.toLowerCase()) {
                            case "number":
                                return isNaN(parseInt(t)) ? 0 : t;
                            case "string":
                                return "string" == typeof t ? t : "";
                            case "boolean":
                                return "boolean" == typeof t && t;
                            default:
                                return t
                            }
                        if (e && null != e && e.mapTo) {
                            const r = e.mapTo()
                              , n = "[object Array]" === Object.prototype.toString.call(t);
                            if (_ === Array && n) {
                                const e = [];
                                return t.forEach((t => {
                                    e.push((0,
                                    i.deserialize)(t, r))
                                }
                                )),
                                e
                            }
                            return e && _ === Array && !n ? [] : (null == r ? void 0 : r.name) === (null == _ ? void 0 : _.name) ? o ? void 0 : (0,
                            i.deserialize)(t, r, !0) : new r instanceof Map ? a({}, t) : (0,
                            i.deserialize)(t, r)
                        }
                    }
                })
            }
        }
        ;
        const i = _(88216)
    }
    ,
    95553: (e, t, _) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Required = function(e) {
            return function(t, _) {
                (0,
                a.registerDecorator)({
                    target: t,
                    property: _,
                    transform: (e, t) => e,
                    validator(t, _, a, i) {
                        let o;
                        if (o = i ? i.name : null == e ? void 0 : e.mapTo(),
                        !o)
                            return;
                        let r = !1;
                        switch (o) {
                        case "Number":
                            isNaN(a) && (r = !0);
                            break;
                        case "Boolean":
                            "boolean" != typeof a && (r = !0);
                            break;
                        case "String":
                            "string" != typeof a && (r = !0);
                            break;
                        case "Array":
                            "[object Array]" !== Object.prototype.toString.call(a) && (r = !0);
                            break;
                        default:
                            null == a && (r = !0)
                        }
                    }
                })
            }
        }
        ,
        _(99743).__importDefault(_(8839));
        const a = _(88216)
    }
    ,
    48500: (e, t, _) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Required = t.JsonProperty = void 0;
        const a = _(34154);
        Object.defineProperty(t, "JsonProperty", {
            enumerable: !0,
            get: function() {
                return a.JsonProperty
            }
        });
        const i = _(95553);
        Object.defineProperty(t, "Required", {
            enumerable: !0,
            get: function() {
                return i.Required
            }
        })
    }
    ,
    60553: () => {}
    ,
    65559: (e, t, _) => {
        "use strict";
        e.exports = _.microfeI(1)
    }
    ,
    66517: (e, t, _) => {
        "use strict";
        e.exports = _.microfeI(3)
    }
    ,
    96234: (e, t, _) => {
        "use strict";
        e.exports = _.microfeI(4)
    }
    ,
    471: (e, t, _) => {
        "use strict";
        e.exports = _.microfeI(0)
    }
    ,
    89044: (e, t, _) => {
        "use strict";
        e.exports = _.microfeI(2)
    }
}]);
//# sourceMappingURL=https://sourcemap.webfe.shopeemobile.com/pcmall-shoprating/_/692.86d0e61c55bd1ab5003a.js.map
