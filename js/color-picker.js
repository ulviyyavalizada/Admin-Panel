

// **Color picker**

let colorPickerComp1 = new Object;
function ColorPicker1(t, e) {
    this.element = t,
        t.colorPickerObj = this,
        t.setAttribute("data-color", e),
        t.style.background = e,
        t.addEventListener("click", (function (t) {
            colorPickerComp1.instance = t.target.colorPickerObj,
                document.getElementById("color_picker_1").style.display = "block",
                colorPickerComp1.updateColorDisplays1(t.target.getAttribute("data-color"));
        }))
}

let colorPickerComp2 = new Object;
function ColorPicker2(t, e) {
    this.element = t,
        t.colorPickerObj = this,
        t.setAttribute("data-color", e),
        t.style.background = e,
        t.addEventListener("click", (function (t) {
                colorPickerComp2.instance = t.target.colorPickerObj,
                document.getElementById("color_picker_2").style.display = "block",
                document.getElementById("color_picker_bg2").style.display = "block",
                colorPickerComp2.updateColorDisplays2(t.target.getAttribute("data-color"))
        }))
}

!function () {
    colorPickerComp1.instance = null,
    colorPickerComp1.boxStatus = !1,
    colorPickerComp1.boxStatusTouch = !1,
    colorPickerComp1.sliderStatus = !1,
    colorPickerComp1.sliderStatusTouch = !1,
    colorPickerComp1.opacityStatus = !1,
    colorPickerComp1.opacityStatusTouch = !1,
    colorPickerComp1.colorTypeStatus = "HEXA",
    colorPickerComp1.hue = 0, colorPickerComp1.saturation = 100,
    colorPickerComp1.lightness = 50,
    colorPickerComp1.alpha = 1,
    colorPickerComp1.contextMenuElem = null,
    colorPickerComp1.doubleTapTime = 0,
    colorPickerComp1.LSCustomColors1 = { 0: [] };

    let t1 = document.createElement("ASIDE");
    t1.id = "color_picker_1",
    t1.innerHTML = '\n\t\t<svg id="color_box1" width="100%" height="150">\n\t\t\t<defs>\n\t\t\t\t<linearGradient id="saturation1" x1="0%" y1="0%" x2="100%" y2="0%">\n\t\t\t\t\t<stop offset="0%" stop-color="#fff"></stop>\n\t\t\t\t\t<stop offset="100%" stop-color="hsl(0,100%,50%)"></stop>\n\t\t\t\t</linearGradient>\n\t\t\t\t<linearGradient id="brightness1" x1="0%" y1="0%" x2="0%" y2="100%">\n\t\t\t\t\t<stop offset="0%" stop-color="rgba(0,0,0,0)"></stop>\n\t\t\t\t\t<stop offset="100%" stop-color="#000"></stop>\n\t\t\t\t</linearGradient>\n\t\t\t\t<pattern id="pattern_config1" width="100%" height="100%">\n\t\t\t\t\t<rect x="0" y="0" width="100%" height="100%" fill="url(#saturation1)"></rect> }\n\t\t\t\t\t<rect x="0" y="0" width="100%" height="100%" fill="url(#brightness1)"></rect>\n\t\t\t\t</pattern>\n\t\t\t</defs>\n\t\t\t<rect width="100%" height="100%" stroke="url(#pattern_config1)" stroke-width="0" fill="url(#pattern_config1)"></rect>\n\t\t\t<svg id="box_dragger1" x="6" y="6" style="overflow: visible;">\n\t\t\t\t<circle r="5" fill="none" stroke="#878787" stroke-width="1"></circle>\n\t\t\t\t<circle r="4" fill="none" stroke="#ffff" stroke-width="1"></circle>\n\t\t\t</svg>\n\t\t</svg>\n\t\t<div class="color-picker-background">\n\t\t<svg id="color_picked_preview1" width="40" height="50">\n\t\t\t<circle cx="20" cy="29" r="18" stroke="#7094A780" fill="#ffffff" stroke-width="1"></circle>\n\t\t</svg>\n\t\t<div id="sliders1">\n\t\t\t<svg id="color_slider1" width="100%" height="20">\n\t\t\t\t<defs>\n\t\t\t\t\t<linearGradient id="hue1" x1="100%" y1="0%" x2="0%" y2="0%">\n\t\t\t\t\t\t<stop offset="0%" stop-color="#f00"></stop>\n\t\t\t\t\t\t<stop offset="16.666%" stop-color="#ff0"></stop>\n\t\t\t\t\t\t<stop offset="33.333%" stop-color="#0f0"></stop>\n\t\t\t\t\t\t<stop offset="50%" stop-color="#0ff"></stop>\n\t\t\t\t\t\t<stop offset="66.666%" stop-color="#00f"></stop>\n\t\t\t\t\t\t<stop offset="83.333%" stop-color="#f0f"></stop>\n\t\t\t\t\t\t<stop offset="100%" stop-color="#f00"></stop>\n\t\t\t\t\t</linearGradient>\n\t\t\t\t</defs>\n\t\t\t\t<rect rx="5" ry="5" width="100%" height="20" stroke="url(#hue1)" stroke-width="2" fill="url(#hue1)"></rect>\n\t\t\t\t<svg id="color_slider_dragger1" x="135" y="10" style="overflow: visible;">\n\t\t\t\t\t<circle r="7" fill="#ffff"></circle>\n\t\t\t\t</svg>\n\t\t\t</svg>\n\t\t\t<svg id="opacity_slider1" width="100%" height="20">\n\t\t\t\t<defs>\n\t\t\t\t\t<linearGradient id="opacity1" x1="100%" y1="0%" x2="0%" y2="0%">\n\t\t\t\t\t\t<stop offset="0%" stop-color="#000"></stop>\n\t\t\t\t\t\t<stop offset="100%" stop-color="#fff"></stop>\n\t\t\t\t\t</linearGradient>\n\t\t\t\t</defs>\n\t\t\t\t<rect rx="5" ry="5" x="1" y="6" width="100%" height="10.5" stroke="url(#opacity1)" stroke-width="2" fill="url(#opacity1)"></rect>\n\t\t\t\t<svg id="opacity_slider_dragger1" x="135" y="11" style="overflow: visible;">\n\t\t\t\t\t<circle r="4.5" fill="#ffff"></circle>\n\t\t\t\t</svg>\n\t\t\t</svg>\n\t\t</div>\n\t\t<div id="color_text_values1">\n\t\t\t<button id="switch_color_type1" name="switch_color_type1">\n\t\t\t\<i class="fas fa-exchange-alt"></i>\n\t\t\t</button>\n\t\t\t<div id="hexa1">\n\t\t\t\t<input id="hex_input1" name="hex_input1" type="text" value="#ffffff" disabled maxlength="9" spellcheck="false" />\n\t\t\t</div>\n\t\t\t<div id="rgba1" style="display: none;">\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="rgba_input1" name="r1" disabled type="number" min="0" max="255" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="r1" class="label_text">R</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="rgba_input1" disabled name="g1" type="number" min="0" max="255" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="g1" class="label_text">G</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="rgba_input1" disabled name="b1" type="number" min="0" max="255" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="b1" class="label_text">B</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="rgba_input1" disabled name="a1" type="number" step="0.1" min="0" max="1" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="a1" class="label_text">A</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id="hsla1" style="display: none;">\n\t\t\t\t<div class="hsla_divider">\n\t\t\t\t\t<input class="hsla_input1" disabled name="h1" type="number" min="0" max="359" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="h1" class="label_text">H</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="hsla_divider">\n\t\t\t\t\t<input class="hsla_input1" disabled name="s1" type="number" min="0" max="100" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="s1" class="label_text">S%</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="hsla_divider">\n\t\t\t\t\t<input class="hsla_input1" disabled name="l1" type="number" min="0" max="100" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="l1" class="label_text">L%</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="hsla_input1" disabled name="a1" type="number" step="0.1" min="0" max="1" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="a1" class="label_text">A</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="custom_colors1">\n\t\t\t<h6 id="custom_colors_title1">User colors</h6>\n\t\t\t<div id="custom_colors_box1">\n\t\t\t\t<button id="custom_colors_add1" name="add-a-custom-color1">\n\t\t\t\t<i class="fas fa-plus"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t\t<div id="color-apply-cancel1">\n\t\t\t\t<button id="color-apply1" name="color-apply1">\n\t\t\t\tApply\n\t\t\t\t</button>\n\t\t\t\t<button id="color-cancel1" name="color-cancel1">\n\t\t\t\Cancel\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t<div id="color_context_menu1" class="color_ctx_menu">\n\t\t\t<button id="select_color1" class="color_ctx_menu" name="select_color1">Select</button>\n\t\t\t<button id="color_clear_single1" class="color_ctx_menu" name="remove-single-color1">Remove Color</button>\n\t\t\t<button id="color_clear_all1" class="color_ctx_menu" name="remove-all-colors1">Remove All</button>\n\t\t</div>\n\t',
    document.querySelector(".total-page-dark").appendChild(t1);

    const e1 = document.createElement("DIV");
    if (e1.id = "color_picker_bg1", document.getElementsByTagName("BODY")[0].appendChild(e1), null === localStorage.getItem("custom_colors1")) localStorage.setItem("custom_colors1", '{"0": []}');
    else {
        colorPickerComp1.LSCustomColors1 = JSON.parse(localStorage.getItem("custom_colors1"));
        for (let t1 = colorPickerComp1.LSCustomColors1[0].length - 1; t1 >= 0; t1--) {
            let e1 = document.createElement("BUTTON");
            e1.className = "custom_colors_preview1",
            e1.style.background = colorPickerComp1.LSCustomColors1[0][t1],
            e1.setAttribute("data-custom-color1", colorPickerComp1.LSCustomColors1[0][t1]),
            document.getElementById("custom_colors_box1").appendChild(e1);
        }

        6 == colorPickerComp1.LSCustomColors1[0].length && (document.getElementById("custom_colors_add1").style.display = "none")
    }
}(),

!function () {
    colorPickerComp2.instance = null,
    colorPickerComp2.boxStatus = !1,
    colorPickerComp2.boxStatusTouch = !1,
    colorPickerComp2.sliderStatus = !1,
    colorPickerComp2.sliderStatusTouch = !1,
    colorPickerComp2.opacityStatus = !1,
    colorPickerComp2.opacityStatusTouch = !1,
    colorPickerComp2.colorTypeStatus = "HEXA",
    colorPickerComp2.hue = 0, colorPickerComp2.saturation = 100,
    colorPickerComp2.lightness = 50,
    colorPickerComp2.alpha = 1,
    colorPickerComp2.contextMenuElem = null,
    colorPickerComp2.doubleTapTime = 0,
    colorPickerComp2.LSCustomColors2 = { 0: [] };

    let t2 = document.createElement("ASIDE");
    t2.id = "color_picker_2",
    t2.innerHTML = '\n\t\t<svg id="color_box2" width="100%" height="150">\n\t\t\t<defs>\n\t\t\t\t<linearGradient id="saturation2" x1="0%" y1="0%" x2="100%" y2="0%">\n\t\t\t\t\t<stop offset="0%" stop-color="#fff"></stop>\n\t\t\t\t\t<stop offset="100%" stop-color="hsl(0,100%,50%)"></stop>\n\t\t\t\t</linearGradient>\n\t\t\t\t<linearGradient id="brightness2" x1="0%" y1="0%" x2="0%" y2="100%">\n\t\t\t\t\t<stop offset="0%" stop-color="rgba(0,0,0,0)"></stop>\n\t\t\t\t\t<stop offset="100%" stop-color="#000"></stop>\n\t\t\t\t</linearGradient>\n\t\t\t\t<pattern id="pattern_config2" width="100%" height="100%">\n\t\t\t\t\t<rect x="0" y="0" width="100%" height="100%" fill="url(#saturation2)"></rect> }\n\t\t\t\t\t<rect x="0" y="0" width="100%" height="100%" fill="url(#brightness2)"></rect>\n\t\t\t\t</pattern>\n\t\t\t</defs>\n\t\t\t<rect width="100%" height="100%" stroke="url(#pattern_config2)" stroke-width="0" fill="url(#pattern_config2)"></rect>\n\t\t\t<svg id="box_dragger2" x="6" y="6" style="overflow: visible;">\n\t\t\t\t<circle r="5" fill="none" stroke="#878787" stroke-width="1"></circle>\n\t\t\t\t<circle r="4" fill="none" stroke="#ffff" stroke-width="1"></circle>\n\t\t\t</svg>\n\t\t</svg>\n\t\t<div class="color-picker-background">\n\t\t<svg id="color_picked_preview2" width="40" height="50">\n\t\t\t<circle cx="20" cy="29" r="18" stroke="#7094A780" fill="#ffffff" stroke-width="1"></circle>\n\t\t</svg>\n\t\t<div id="sliders2">\n\t\t\t<svg id="color_slider2" width="100%" height="20">\n\t\t\t\t<defs>\n\t\t\t\t\t<linearGradient id="hue2" x1="100%" y1="0%" x2="0%" y2="0%">\n\t\t\t\t\t\t<stop offset="0%" stop-color="#f00"></stop>\n\t\t\t\t\t\t<stop offset="16.666%" stop-color="#ff0"></stop>\n\t\t\t\t\t\t<stop offset="33.333%" stop-color="#0f0"></stop>\n\t\t\t\t\t\t<stop offset="50%" stop-color="#0ff"></stop>\n\t\t\t\t\t\t<stop offset="66.666%" stop-color="#00f"></stop>\n\t\t\t\t\t\t<stop offset="83.333%" stop-color="#f0f"></stop>\n\t\t\t\t\t\t<stop offset="100%" stop-color="#f00"></stop>\n\t\t\t\t\t</linearGradient>\n\t\t\t\t</defs>\n\t\t\t\t<rect rx="5" ry="5" width="100%" height="20" stroke="url(#hue2)" stroke-width="2" fill="url(#hue2)"></rect>\n\t\t\t\t<svg id="color_slider_dragger2" x="135" y="10" style="overflow: visible;">\n\t\t\t\t\t<circle r="7" fill="#ffff"></circle>\n\t\t\t\t</svg>\n\t\t\t</svg>\n\t\t\t<svg id="opacity_slider2" width="100%" height="20">\n\t\t\t\t<defs>\n\t\t\t\t\t<linearGradient id="opacity2" x1="100%" y1="0%" x2="0%" y2="0%">\n\t\t\t\t\t\t<stop offset="0%" stop-color="#000"></stop>\n\t\t\t\t\t\t<stop offset="100%" stop-color="#fff"></stop>\n\t\t\t\t\t</linearGradient>\n\t\t\t\t</defs>\n\t\t\t\t<rect rx="5" ry="5" x="1" y="6" width="100%" height="10.5" stroke="url(#opacity2)" stroke-width="2" fill="url(#opacity2)"></rect>\n\t\t\t\t<svg id="opacity_slider_dragger2" x="135" y="11" style="overflow: visible;">\n\t\t\t\t\t<circle r="4.5" fill="#ffff"></circle>\n\t\t\t\t</svg>\n\t\t\t</svg>\n\t\t</div>\n\t\t<div id="color_text_values2">\n\t\t\t<button id="switch_color_type2" name="switch_color_type2">\n\t\t\t\<i class="fas fa-exchange-alt"></i>\n\t\t\t</button>\n\t\t\t<div id="hexa2">\n\t\t\t\t<input id="hex_input2" name="hex_input2" type="text" value="#ffffff" disabled maxlength="9" spellcheck="false" />\n\t\t\t</div>\n\t\t\t<div id="rgba2" style="display: none;">\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="rgba_input2" name="r2" disabled type="number" min="0" max="255" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="r2" class="label_text">R</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="rgba_input2" disabled name="g2" type="number" min="0" max="255" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="g2" class="label_text">G</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="rgba_input2" disabled name="b2" type="number" min="0" max="255" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="b2" class="label_text">B</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="rgba_input2" disabled name="a2" type="number" step="0.1" min="0" max="1" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="a2" class="label_text">A</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id="hsla2" style="display: none;">\n\t\t\t\t<div class="hsla_divider">\n\t\t\t\t\t<input class="hsla_input2" disabled name="h2" type="number" min="0" max="359" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="h2" class="label_text">H</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="hsla_divider">\n\t\t\t\t\t<input class="hsla_input2" disabled name="s2" type="number" min="0" max="100" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="s2" class="label_text">S%</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="hsla_divider">\n\t\t\t\t\t<input class="hsla_input2" disabled name="l2" type="number" min="0" max="100" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="l2" class="label_text">L%</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="rgba_divider">\n\t\t\t\t\t<input class="hsla_input2" disabled name="a2" type="number" step="0.1" min="0" max="1" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<label for="a2" class="label_text">A</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="custom_colors2">\n\t\t\t<h6 id="custom_colors_title2">User colors</h6>\n\t\t\t<div id="custom_colors_box2">\n\t\t\t\t<button id="custom_colors_add2" name="add-a-custom-color2">\n\t\t\t\t<i class="fas fa-plus"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t\t<div id="color-apply-cancel2">\n\t\t\t\t<button id="color-apply2" name="color-apply2">\n\t\t\t\tApply\n\t\t\t\t</button>\n\t\t\t\t<button id="color-cancel2" name="color-cancel2">\n\t\t\t\Cancel\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="color_context_menu2" class="color_ctx_menu">\n\t\t\t<button id="select_color2" class="color_ctx_menu" name="select_color2">Select</button>\n\t\t\t<button id="color_clear_single2" class="color_ctx_menu" name="remove-single-color2">Remove Color</button>\n\t\t\t<button id="color_clear_all2" class="color_ctx_menu" name="remove-all-colors2">Remove All</button>\n\t\t</div>\n\t',
    document.querySelector(".total-page-dark").appendChild(t2);

    const e2 = document.createElement("DIV");
    if (e2.id = "color_picker_bg2", document.getElementsByTagName("BODY")[0].appendChild(e2), null === localStorage.getItem("custom_colors2")) localStorage.setItem("custom_colors2", '{"0": []}');
    else {
        colorPickerComp2.LSCustomColors2 = JSON.parse(localStorage.getItem("custom_colors2"));
        for (let t2 = colorPickerComp2.LSCustomColors2[0].length - 1; t2 >= 0; t2--) {
            let e2 = document.createElement("BUTTON");
            e2.className = "custom_colors_preview2",
            e2.style.background = colorPickerComp2.LSCustomColors2[0][t2],
            e2.setAttribute("data-custom-color2", colorPickerComp2.LSCustomColors2[0][t2]),
            document.getElementById("custom_colors_box2").appendChild(e2);
        }

        6 == colorPickerComp2.LSCustomColors2[0].length && (document.getElementById("custom_colors_add2").style.display = "none")
    }
}(),

document.addEventListener("mousedown", (function (event) {
        "color_context_menu1" != event.target.id && (document.getElementById("color_context_menu1").style.display = "none");

})),

document.addEventListener("mousedown", (function (event) {
    "color_context_menu2" != event.target.id && (document.getElementById("color_context_menu2").style.display = "none");
})),


colorPickerComp1.colorChange1 = function (t, e) {
        const o = colorPickerComp1.HSLAToRGBA1(t.h, t.s, t.l, t.a),
            l = colorPickerComp1.HSLAToRGBA1(t.h, t.s, t.l, t.a, !0),
            r = new CustomEvent("colorChange",
                {
                    detail: {
                        color: {
                            hsl: `hsla(${t.h}, ${t.s}%, ${t.l}%)`,
                            rgb: `rgba(${o.r}, ${o.g}, ${o.b})`,
                            hex: l,
                            hsla: `hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`,
                            rgba: `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})`,
                            hexa: l
                        }
                    }
                }),
            c = void 0 === e ? colorPickerComp1.instance.element : e;
        c.setAttribute("data-color", l),
        c.style.background = l, c.dispatchEvent(r)
},

colorPickerComp2.colorChange2 = function (t, e) {
    const o = colorPickerComp2.HSLAToRGBA2(t.h, t.s, t.l, t.a),
        l = colorPickerComp2.HSLAToRGBA2(t.h, t.s, t.l, t.a, !0),
        r = new CustomEvent("colorChange",
            {
                detail: {
                    color: {
                        hsl: `hsla(${t.h}, ${t.s}%, ${t.l}%)`,
                        rgb: `rgba(${o.r}, ${o.g}, ${o.b})`,
                        hex: l,
                        hsla: `hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`,
                        rgba: `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})`,
                        hexa: l
                    }
                }
            }),
        c = void 0 === e ? colorPickerComp2.instance.element : e;
    c.setAttribute("data-color", l),
    c.style.background = l, c.dispatchEvent(r)
},

colorPickerComp1.HSLAToRGBA1 = function (t, e, o, l, r) {
        e /= 100,
            o /= 100;
        let c = (1 - Math.abs(2 * o - 1)) * e,
            n = c * (1 - Math.abs(t / 60 % 2 - 1)),
            i = o - c / 2, s = 0, a = 0, u = 0;
        return 0 <= t && t < 60 ? (s = c, a = n, u = 0) : 60 <= t && t < 120 ? (s = n, a = c, u = 0) : 120 <= t && t < 180 ? (s = 0, a = c, u = n) : 180 <= t && t < 240 ? (s = 0, a = n, u = c) : 240 <= t && t < 300 ? (s = n, a = 0, u = c) : 300 <= t && t < 360 && (s = c, a = 0, u = n),
            s = Math.round(255 * (s + i)),
            a = Math.round(255 * (a + i)),
            u = Math.round(255 * (u + i)),
            !0 === r ? colorPickerComp1.RGBAToHexA1(s, a, u, l) : { r: s, g: a, b: u, a: l }
},

colorPickerComp1.RGBAToHSLA1 = function (t, e, o, l) {
        t /= 255,
            e /= 255,
            o /= 255,
            l = null == l ? 1 : l;
        let r = Math.min(t, e, o),
            c = Math.max(t, e, o),
            n = c - r,
            i = 0,
            s = 0,
            a = 0;
        return i = 0 == n ? 0 : c == t ? (e - o) / n % 6 : c == e ? (o - t) / n + 2 : (t - e) / n + 4,
            i = Math.round(60 * i),
            i < 0 && (i += 360),
            a = (c + r) / 2,
            s = 0 == n ? 0 : n / (1 - Math.abs(2 * a - 1)),
            s = +(100 * s).toFixed(1),
            a = +(100 * a).toFixed(1),
        {
            h: i, s: s, l: a, a: l
        }
},

colorPickerComp1.RGBAToHexA1 = function (t, e, o, l) {
        return t = t.toString(16),
            e = e.toString(16),
            o = o.toString(16),
            l = Math.round(255 * l).toString(16),
            1 == t.length && (t = "0" + t),
            1 == e.length && (e = "0" + e),
            1 == o.length && (o = "0" + o),
            1 == l.length && (l = "0" + l),
            "ff" == l ? "#" + t + e + o : "#" + t + e + o + l
},

colorPickerComp1.hexAToRGBA1 = function (t, e) {
        7 == t.length ? t += "ff" : 4 == t.length && (t += t.substring(1, 4) + "ff");
        let o = 0, l = 0, r = 0, c = 1;
        return 5 == t.length ? (o = "0x" + t[1] + t[1],
            l = "0x" + t[2] + t[2],
            r = "0x" + t[3] + t[3],
            c = "0x" + t[4] + t[4]) : 9 == t.length && (o = "0x" + t[1] + t[2],
                l = "0x" + t[3] + t[4], r = "0x" + t[5] + t[6],
                c = "0x" + t[7] + t[8]),
            c = +(c / 255).toFixed(3),
            !0 === e ? colorPickerComp1.RGBAToHSLA1(+o, +l, +r, c) : "rgba(" + +o + "," + +l + "," + +r + "," + c + ")"
},

colorPickerComp2.HSLAToRGBA2 = function (t, e, o, l, r) {
    e /= 100,
        o /= 100;
    let c = (1 - Math.abs(2 * o - 1)) * e,
        n = c * (1 - Math.abs(t / 60 % 2 - 1)),
        i = o - c / 2, s = 0, a = 0, u = 0;
    return 0 <= t && t < 60 ? (s = c, a = n, u = 0) : 60 <= t && t < 120 ? (s = n, a = c, u = 0) : 120 <= t && t < 180 ? (s = 0, a = c, u = n) : 180 <= t && t < 240 ? (s = 0, a = n, u = c) : 240 <= t && t < 300 ? (s = n, a = 0, u = c) : 300 <= t && t < 360 && (s = c, a = 0, u = n),
        s = Math.round(255 * (s + i)),
        a = Math.round(255 * (a + i)),
        u = Math.round(255 * (u + i)),
        !0 === r ? colorPickerComp2.RGBAToHexA2(s, a, u, l) : { r: s, g: a, b: u, a: l }
},

colorPickerComp2.RGBAToHSLA2 = function (t, e, o, l) {
    t /= 255,
        e /= 255,
        o /= 255,
        l = null == l ? 1 : l;
    let r = Math.min(t, e, o),
        c = Math.max(t, e, o),
        n = c - r,
        i = 0,
        s = 0,
        a = 0;
    return i = 0 == n ? 0 : c == t ? (e - o) / n % 6 : c == e ? (o - t) / n + 2 : (t - e) / n + 4,
        i = Math.round(60 * i),
        i < 0 && (i += 360),
        a = (c + r) / 2,
        s = 0 == n ? 0 : n / (1 - Math.abs(2 * a - 1)),
        s = +(100 * s).toFixed(1),
        a = +(100 * a).toFixed(1),
    {
        h: i, s: s, l: a, a: l
    }
},

colorPickerComp2.RGBAToHexA2 = function (t, e, o, l) {
    return t = t.toString(16),
        e = e.toString(16),
        o = o.toString(16),
        l = Math.round(255 * l).toString(16),
        1 == t.length && (t = "0" + t),
        1 == e.length && (e = "0" + e),
        1 == o.length && (o = "0" + o),
        1 == l.length && (l = "0" + l),
        "ff" == l ? "#" + t + e + o : "#" + t + e + o + l
},

colorPickerComp2.hexAToRGBA2 = function (t, e) {
    7 == t.length ? t += "ff" : 4 == t.length && (t += t.substring(1, 4) + "ff");
    let o = 0, l = 0, r = 0, c = 1;
    return 5 == t.length ? (o = "0x" + t[1] + t[1],
        l = "0x" + t[2] + t[2],
        r = "0x" + t[3] + t[3],
        c = "0x" + t[4] + t[4]) : 9 == t.length && (o = "0x" + t[1] + t[2],
            l = "0x" + t[3] + t[4], r = "0x" + t[5] + t[6],
            c = "0x" + t[7] + t[8]),
        c = +(c / 255).toFixed(3),
        !0 === e ? colorPickerComp2.RGBAToHSLA2(+o, +l, +r, c) : "rgba(" + +o + "," + +l + "," + +r + "," + c + ")"
},

colorPickerComp1.switchColorType1 = function () {
        if ("HEXA" == colorPickerComp1.colorTypeStatus) {
            colorPickerComp1.colorTypeStatus = "RGBA",
                document.getElementById("hexa1").style.display = "none",
                document.getElementById("rgba1").style.display = "block";

            const t = colorPickerComp1.HSLAToRGBA1(colorPickerComp1.hue, colorPickerComp1.saturation, colorPickerComp1.lightness, colorPickerComp1.alpha);
            document.getElementsByClassName("rgba_input1")[0].value = t.r,
                document.getElementsByClassName("rgba_input1")[1].value = t.g,
                document.getElementsByClassName("rgba_input1")[2].value = t.b,
                document.getElementsByClassName("rgba_input1")[3].value = t.a
        }
        else if ("RGBA" == colorPickerComp1.colorTypeStatus)
                colorPickerComp1.colorTypeStatus = "HSLA",
                document.getElementById("rgba1").style.display = "none",
                document.getElementById("hsla1").style.display = "block",

                document.getElementsByClassName("hsla_input1")[0].value = colorPickerComp1.hue,
                document.getElementsByClassName("hsla_input1")[1].value = colorPickerComp1.saturation,
                document.getElementsByClassName("hsla_input1")[2].value = colorPickerComp1.lightness,
                document.getElementsByClassName("hsla_input1")[3].value = colorPickerComp1.alpha;
        else if ("HSLA" == colorPickerComp1.colorTypeStatus) {
            colorPickerComp1.colorTypeStatus = "HEXA",
            document.getElementById("hsla1").style.display = "none",
            document.getElementById("hexa1").style.display = "block";

            const t1 = colorPickerComp1.HSLAToRGBA1(colorPickerComp1.hue, colorPickerComp1.saturation, colorPickerComp1.lightness, colorPickerComp1.alpha, !0);
            document.getElementById("hex_input1").value = t1;
        }
},

colorPickerComp2.switchColorType2 = function () {
    if ("HEXA" == colorPickerComp2.colorTypeStatus) {
        colorPickerComp2.colorTypeStatus = "RGBA",

            document.getElementById("hexa2").style.display = "none",
            document.getElementById("rgba2").style.display = "block";
        const t = colorPickerComp2.HSLAToRGBA2(colorPickerComp2.hue, colorPickerComp2.saturation, colorPickerComp2.lightness, colorPickerComp2.alpha);
        document.getElementsByClassName("rgba_input2")[0].value = t.r,
            document.getElementsByClassName("rgba_input2")[1].value = t.g,
            document.getElementsByClassName("rgba_input2")[2].value = t.b,
            document.getElementsByClassName("rgba_input2")[3].value = t.a
    }
    else if ("RGBA" == colorPickerComp2.colorTypeStatus)
            colorPickerComp2.colorTypeStatus = "HSLA",

            document.getElementById("rgba2").style.display = "none",
            document.getElementById("hsla2").style.display = "block",
            document.getElementsByClassName("hsla_input2")[0].value = colorPickerComp2.hue,
            document.getElementsByClassName("hsla_input2")[1].value = colorPickerComp2.saturation,
            document.getElementsByClassName("hsla_input2")[2].value = colorPickerComp2.lightness,
            document.getElementsByClassName("hsla_input2")[3].value = colorPickerComp2.alpha;
    else if ("HSLA" == colorPickerComp2.colorTypeStatus) {
        colorPickerComp2.colorTypeStatus = "HEXA",

        document.getElementById("hsla2").style.display = "none",
        document.getElementById("hexa2").style.display = "block";

        const t2 = colorPickerComp2.HSLAToRGBA2(colorPickerComp2.hue, colorPickerComp2.saturation, colorPickerComp2.lightness, colorPickerComp2.alpha, !0);
        document.getElementById("hex_input2").value = t2
    }
},

document.getElementById("switch_color_type1").addEventListener("click", (function () {
        colorPickerComp1.switchColorType1()
})),

document.getElementById("switch_color_type2").addEventListener("click", (function () {
    colorPickerComp2.switchColorType2()
})),

document.getElementById("hex_input1").addEventListener("blur", (function () {
        const t = this.value;
        t.match(/^#[0-9a-f]{3}([0-9a-f]{3})?([0-9a-f]{2})?$/) && colorPickerComp1.updateColorDisplays1(t)
})),

document.getElementById("hex_input2").addEventListener("blur", (function () {
    const t = this.value;
    t.match(/^#[0-9a-f]{3}([0-9a-f]{3})?([0-9a-f]{2})?$/) && colorPickerComp2.updateColorDisplays2(t)
})),

document.querySelectorAll(".rgba_input1").forEach(t => {
    t.addEventListener("change", (function () {
        const t = document.querySelectorAll(".rgba_input1");
        if (t[0].value > 255) throw "Value must be below 256";
        if (t[1].value > 255) throw "Value must be below 256";
        if (t[2].value > 255) throw "Value must be below 256";
        if (t[3].value > 1) throw "Value must be equal to or below 1";
        colorPickerComp1.updateColorDisplays1(`rgba(${t[0].value}, ${t[1].value}, ${t[2].value}, ${t[3].value})`)
    }))
}),

document.querySelectorAll(".rgba_input2").forEach(t => {
        t.addEventListener("change", (function () {
            const t = document.querySelectorAll(".rgba_input2");
            if (t[0].value > 255) throw "Value must be below 256";
            if (t[1].value > 255) throw "Value must be below 256";
            if (t[2].value > 255) throw "Value must be below 256";
            if (t[3].value > 1) throw "Value must be equal to or below 1";
            colorPickerComp2.updateColorDisplays2(`rgba(${t[0].value}, ${t[1].value}, ${t[2].value}, ${t[3].value})`)
        }))
}),

document.querySelectorAll(".hsla_input1").forEach(t => {
    t.addEventListener("change", (function () {
        const t = document.querySelectorAll(".hsla_input1");
        if (t[0].value > 359) throw "Value must be below 360";
        if (t[1].value > 100) throw "Value must be below 100";
        if (t[2].value > 100) throw "Value must be below 100";
        if (t[3].value > 1) throw "Value must be equal to or below 1";
        colorPickerComp1.updateColorDisplays1(`hsla(${t[0].value}, ${t[1].value}%, ${t[2].value}%, ${t[3].value})`)
    }))
}),

document.querySelectorAll(".hsla_input2").forEach(t => {
        t.addEventListener("change", (function () {
            const t = document.querySelectorAll(".hsla_input2");
            if (t[0].value > 359) throw "Value must be below 360";
            if (t[1].value > 100) throw "Value must be below 100";
            if (t[2].value > 100) throw "Value must be below 100";
            if (t[3].value > 1) throw "Value must be equal to or below 1";
            colorPickerComp2.updateColorDisplays2(`hsla(${t[0].value}, ${t[1].value}%, ${t[2].value}%, ${t[3].value})`)
        }))
}),

colorPickerComp1.getCustomColors1 = function () {
        return colorPickerComp1.LSCustomColors1()
},

colorPickerComp2.getCustomColors2 = function () {
    return colorPickerComp2.LSCustomColors2()
};

colorPickerComp1.selectColor1 = function (t) {
    const e = void 0 === t ? colorPickerComp1.contextMenuElem : t;
    const updateColor = e.getAttribute('data-custom-color1');
    colorPickerComp1.updateColorDisplays1(updateColor);
},

document.getElementById("select_color1").addEventListener("mousedown", (function () {
            colorPickerComp1.selectColor1()
})),

colorPickerComp1.selectColor2 = function (t) {
    const e = void 0 === t ? colorPickerComp2.contextMenuElem : t;
    const updateColor = e.getAttribute('data-custom-color2');
    colorPickerComp2.updateColorDisplays2(updateColor);
},

document.getElementById("select_color2").addEventListener("mousedown", (function () {
            colorPickerComp1.selectColor2()
})),

colorPickerComp1.addCustomColor1 = function () {
        6 == colorPickerComp1.LSCustomColors1[0].length && (document.getElementById("custom_colors_add1").style.display = "none");
        if(document.getElementById("color_picked_preview1").children[0].getAttribute("fill")!= '#ffffff'){
            var t = `hsla(${colorPickerComp1.hue},
                ${colorPickerComp1.saturation}%,
                ${colorPickerComp1.lightness}%,
                ${colorPickerComp1.alpha})`
        }else{
            var t = '#ffffff'
        }

            let e = document.createElement("BUTTON");
            e.className = "custom_colors_preview1";
            e.style.background = t,
            e.setAttribute("data-custom-color1", t),
            document.getElementById("custom_colors_box1").appendChild(e),
            colorPickerComp1.LSCustomColors1[0].unshift(t),
            localStorage.setItem("custom_colors1", JSON.stringify(colorPickerComp1.LSCustomColors1))
},

colorPickerComp2.addCustomColor2 = function () {
    6 == colorPickerComp2.LSCustomColors2[0].length && (document.getElementById("custom_colors_add2").style.display = "none");
    if(document.getElementById("color_picked_preview2").children[0].getAttribute("fill")!= '#ffffff'){
        var t = `hsla(${colorPickerComp2.hue},
            ${colorPickerComp2.saturation}%,
            ${colorPickerComp2.lightness}%,
            ${colorPickerComp2.alpha})`
    }else{
        var t = '#ffffff';
    }
        let e = document.createElement("BUTTON");
        e.className = "custom_colors_preview2",
        e.style.background = t,
        e.setAttribute("data-custom-color2", t),
        document.getElementById("custom_colors_box2").appendChild(e),
        colorPickerComp2.LSCustomColors2[0].unshift(t),
        localStorage.setItem("custom_colors2", JSON.stringify(colorPickerComp2.LSCustomColors2))
},

document.getElementById("custom_colors_add1").addEventListener("mouseup", (function () {
        colorPickerComp1.addCustomColor1()

})),

document.getElementById("custom_colors_add2").addEventListener("mouseup", (function () {
    colorPickerComp2.addCustomColor2()

})),

document.getElementById("custom_colors_box1").addEventListener("click", (function (t) {
        if ("custom_colors_preview1" == t.target.className) {
            t.preventDefault();
            const e = document.getElementById("color_context_menu1");
            e.style.display = "block",
            e.style.left = t.target.getBoundingClientRect().left + "px",
            colorPickerComp1.contextMenuElem = t.target
        }
})),

document.getElementById("custom_colors_box2").addEventListener("click", (function (t) {
    if ("custom_colors_preview2" == t.target.className) {
        t.preventDefault();
        const e = document.getElementById("color_context_menu2");
        e.style.display = "block",
        e.style.left = t.target.getBoundingClientRect().left + "px",
        colorPickerComp2.contextMenuElem = t.target
    }
})),

colorPickerComp1.clearSingleCustomColor1 = function (t) {
        const e = void 0 === t ? colorPickerComp1.contextMenuElem : t;
        document.getElementById("custom_colors_box1").removeChild(e), colorPickerComp1.LSCustomColors1 = {
            0: []
        };
        for (let t in document.getElementsByClassName("custom_colors_preview1")) !0 !== isNaN(t) && colorPickerComp1.LSCustomColors1[0].push(document.getElementsByClassName("custom_colors_preview1")[t].getAttribute("data-custom-color1"));
        localStorage.setItem("custom_colors1", JSON.stringify(colorPickerComp1.LSCustomColors1)),
        document.getElementById("custom_colors_add1").style.display = "inline-block"
},

colorPickerComp2.clearSingleCustomColor2 = function (t) {
    const e = void 0 === t ? colorPickerComp2.contextMenuElem : t;
    document.getElementById("custom_colors_box2").removeChild(e), colorPickerComp2.LSCustomColors2 = {
        0: []
    };
    for (let t in document.getElementsByClassName("custom_colors_preview2")) !0 !== isNaN(t) && colorPickerComp2.LSCustomColors2[0].push(document.getElementsByClassName("custom_colors_preview2")[t].getAttribute("data-custom-color2"));
    localStorage.setItem("custom_colors2", JSON.stringify(colorPickerComp2.LSCustomColors2)),
    document.getElementById("custom_colors_add2").style.display = "inline-block"
},

document.getElementById("color_clear_single1").addEventListener("mousedown", (function () {
            colorPickerComp1.clearSingleCustomColor1()
})),

document.getElementById("color_clear_single2").addEventListener("mousedown", (function () {
    colorPickerComp2.clearSingleCustomColor2()
})),

colorPickerComp1.clearSingleCustomColorTouch1 = function (t1) {
            if ("custom_colors_preview1" == t1.target.className) {
                const e1 = (new Date).getTime() - colorPickerComp1.doubleTapTime;
                e1 < 200 && e1 > 0 ? colorPickerComp1.clearSingleCustomColor1(t1.target) : colorPickerComp1.doubleTapTime = (new Date).getTime()
            }

},

colorPickerComp2.clearSingleCustomColorTouch2 = function (t2) {
    if ("custom_colors_preview2" == t2.target.className) {
        const e2 = (new Date).getTime() - colorPickerComp2.doubleTapTime;
        e2 < 200 && e2 > 0 ? colorPickerComp2.clearSingleCustomColor2(t2.target) : colorPickerComp2.doubleTapTime = (new Date).getTime()
    }

},

document.getElementById("custom_colors_box1").addEventListener("touchstart", (function (event) {
            colorPickerComp1.clearSingleCustomColorTouch1(event)
}), { passive: !0 }),

document.getElementById("custom_colors_box2").addEventListener("touchstart", (function (event) {
    colorPickerComp2.clearSingleCustomColorTouch2(event)
}), { passive: !0 }),

colorPickerComp1.clearAllCustomColors1 = function () {
            for (colorPickerComp1.LSCustomColors1 = { 0: [] }; document.getElementsByClassName("custom_colors_preview1").length > 0;)

            document.getElementById("custom_colors_box1").removeChild(document.getElementsByClassName("custom_colors_preview1")[0]);
            localStorage.setItem("custom_colors1", JSON.stringify(colorPickerComp1.LSCustomColors1)),
            document.getElementById("custom_colors_add1").style.display = "inline-block";

},

colorPickerComp2.clearAllCustomColors2 = function () {

    for (colorPickerComp2.LSCustomColors2 = { 0: [] }; document.getElementsByClassName("custom_colors_preview2").length > 0;)

    document.getElementById("custom_colors_box2").removeChild(document.getElementsByClassName("custom_colors_preview2")[0]);
    localStorage.setItem("custom_colors2", JSON.stringify(colorPickerComp2.LSCustomColors2)),
    document.getElementById("custom_colors_add2").style.display = "inline-block"
},

document.getElementById("color_clear_all1").addEventListener("mousedown", (function () {
            colorPickerComp1.clearAllCustomColors1()
})),

document.getElementById("color_clear_all2").addEventListener("mousedown", (function () {
    colorPickerComp2.clearAllCustomColors2()
})),

colorPickerComp1.colorSliderHandler1 = function (t) {
            const e = document.getElementById("color_slider1"),
            o = document.getElementById("color_slider_dragger1");
            let l = t - e.getBoundingClientRect().left;
            l < 10 && (l = 10), l > 135 && (l = 135),
            o.attributes.x.nodeValue = l;
            const r = (l - 10) / 125 * 100,
            c = Math.round(359 - 3.59 * r);
            colorPickerComp1.hue = c;
            const n = `hsla(${c}, ${colorPickerComp1.saturation}%, ${colorPickerComp1.lightness}%, ${colorPickerComp1.alpha})`;
            if(document.getElementById("color_picked_preview1").children[0].getAttribute("fill")!= '#ffffff'){
                document.getElementById("color_picked_preview1").children[0].setAttribute("fill", n)
            }

            document.getElementById("saturation1").children[1].setAttribute("stop-color", `hsl(${c}, 100%, 50%)`),
            colorPickerComp1.updateColorValueInput1()
            //colorPickerComp1.instance.element.setAttribute("data-color", "color")
},

colorPickerComp2.colorSliderHandler2 = function (t2) {
    const e2 = document.getElementById("color_slider2"),
    o = document.getElementById("color_slider_dragger2");
    let l = t2 - e2.getBoundingClientRect().left;
    l < 10 && (l = 10), l > 135 && (l = 135),
    o.attributes.x.nodeValue = l;
    const r2 = (l - 10) / 125 * 100,
    c = Math.round(359 - 3.59 * r2);
    colorPickerComp2.hue = c;
    const n = `hsla(${c}, ${colorPickerComp2.saturation}%, ${colorPickerComp2.lightness}%, ${colorPickerComp2.alpha})`;

    if(document.getElementById("color_picked_preview2").children[0].getAttribute("fill")!= '#ffffff'){
        document.getElementById("color_picked_preview2").children[0].setAttribute("fill", n)
    }
    document.getElementById("saturation2").children[1].setAttribute("stop-color", `hsl(${c}, 100%, 50%)`),
    colorPickerComp2.updateColorValueInput2()
    //colorPickerComp2.instance.element.setAttribute("data-color", "color")
},

document.getElementById("color_slider1").addEventListener("mousedown", (function (t) {
            colorPickerComp1.sliderStatus = !0,
            colorPickerComp1.colorSliderHandler1(t.pageX)
})),

document.getElementById("color_slider2").addEventListener("mousedown", (function (t) {
    colorPickerComp2.sliderStatus = !0,
    colorPickerComp2.colorSliderHandler2(t.pageX)
})),

document.addEventListener("mousemove", (function (t) {
            !0 === colorPickerComp1.sliderStatus && colorPickerComp1.colorSliderHandler1(t.pageX)
})),

document.addEventListener("mousemove", (function (t) {
    !0 === colorPickerComp2.sliderStatus && colorPickerComp2.colorSliderHandler2(t.pageX)
})),

document.addEventListener("mouseup", (function () {
            !0 === colorPickerComp1.sliderStatus && (colorPickerComp1.sliderStatus = !1)
})),

document.addEventListener("mouseup", (function () {
    !0 === colorPickerComp2.sliderStatus && (colorPickerComp2.sliderStatus = !1)
})),

document.getElementById("color_slider1").addEventListener("touchstart", (function (t) {
            colorPickerComp1.sliderStatusTouch = !0, colorPickerComp1.colorSliderHandler1(t.changedTouches[0].clientX)
}), { passive: !0 }),

document.getElementById("color_slider2").addEventListener("touchstart", (function (t) {
    colorPickerComp2.sliderStatusTouch = !0, colorPickerComp2.colorSliderHandler2(t.changedTouches[0].clientX)
}), { passive: !0 }),

document.addEventListener("touchmove", (function (event) {
            !0 === colorPickerComp1.sliderStatusTouch && (event.preventDefault(), colorPickerComp1.colorSliderHandler1(event.changedTouches[0].clientX))
}), { passive: !1 }),

document.addEventListener("touchmove", (function (event) {
    !0 === colorPickerComp2.sliderStatusTouch && (event.preventDefault(), colorPickerComp2.colorSliderHandler2(event.changedTouches[0].clientX))
}), { passive: !1 }),

document.addEventListener("touchend", (function () {
            !0 === colorPickerComp1.sliderStatusTouch && (colorPickerComp1.sliderStatusTouch = !1)
})),

document.addEventListener("touchend", (function () {
    !0 === colorPickerComp2.sliderStatusTouch && (colorPickerComp2.sliderStatusTouch = !1)
})),

colorPickerComp1.opacitySliderHandler1 = function (t1) {
            const e1 = document.getElementById("opacity_slider1"),
            o = document.getElementById("opacity_slider_dragger1");
            let l = t1 - e1.getBoundingClientRect().left;
            l < 11 && (l = 11), l > 135 && (l = 135),
            o.attributes.x.nodeValue = l;
            let r1 = .01 * ((l - 11) / 124 * 100);
            r1 = Number(Math.round(r1 + "e2") + "e-2"),
            colorPickerComp1.alpha = r1;
            const c1 = `hsla(${colorPickerComp1.hue}, ${colorPickerComp1.saturation}%, ${colorPickerComp1.lightness}%, ${r1})`;
            if(document.getElementById("color_picked_preview1").children[0].getAttribute("fill")!= '#ffffff'){
                document.getElementById("color_picked_preview1").children[0].setAttribute("fill", c1)
            }

            colorPickerComp1.updateColorValueInput1()
            //colorPickerComp1.instance.element.setAttribute("data-color", "color")
},

colorPickerComp2.opacitySliderHandler2 = function (t2) {
    const e2 = document.getElementById("opacity_slider2"),
    o = document.getElementById("opacity_slider_dragger2");
    let l = t2 - e2.getBoundingClientRect().left;
    l < 11 && (l = 11), l > 135 && (l = 135),
    o.attributes.x.nodeValue = l;
    let r2 = .01 * ((l - 11) / 124 * 100); //136 * 100
    r = Number(Math.round(r2 + "e2") + "e-2"),
    colorPickerComp2.alpha = r2;
    const c2 = `hsla(${colorPickerComp2.hue}, ${colorPickerComp2.saturation}%, ${colorPickerComp2.lightness}%, ${r2})`;
    if(document.getElementById("color_picked_preview2").children[0].getAttribute("fill")!= '#ffffff'){
        document.getElementById("color_picked_preview2").children[0].setAttribute("fill", c2)
    }
    colorPickerComp2.updateColorValueInput2()
    //colorPickerComp2.instance.element.setAttribute("data-color", "color")
},

document.getElementById("opacity_slider1").addEventListener("mousedown", (function (t1) {
    colorPickerComp1.opacityStatus = !0,
    colorPickerComp1.opacitySliderHandler1(t1.pageX)
})),

document.getElementById("opacity_slider2").addEventListener("mousedown", (function (t2) {
    colorPickerComp2.opacityStatus = !0,
    colorPickerComp2.opacitySliderHandler2(t2.pageX)
})),

document.addEventListener("mousemove", (function (t) {
    !0 === colorPickerComp1.opacityStatus && colorPickerComp1.opacitySliderHandler1(t.pageX)
})),

document.addEventListener("mousemove", (function (t) {
    !0 === colorPickerComp2.opacityStatus && colorPickerComp2.opacitySliderHandler2(t.pageX)
})),

document.addEventListener("mouseup", (function () {
    !0 === colorPickerComp1.opacityStatus && (colorPickerComp1.opacityStatus = !1)
})),

document.addEventListener("mouseup", (function () {
    !0 === colorPickerComp2.opacityStatus && (colorPickerComp2.opacityStatus = !1)
})),

document.getElementById("opacity_slider1").addEventListener("touchstart", (function (t) {
    colorPickerComp1.opacityStatusTouch = !0, colorPickerComp1.opacitySliderHandler1(t.changedTouches[0].clientX)
}), { passive: !0 }),

document.getElementById("opacity_slider2").addEventListener("touchstart", (function (t) {
    colorPickerComp2.opacityStatusTouch = !0, colorPickerComp2.opacitySliderHandler2(t.changedTouches[0].clientX)
}), { passive: !0 }),

document.addEventListener("touchmove", (function (event) {
    !0 === colorPickerComp1.opacityStatusTouch && (event.preventDefault(), colorPickerComp1.opacitySliderHandler1(event.changedTouches[0].clientX))
}), { passive: !1 }),

document.addEventListener("touchmove", (function (event) {
    !0 === colorPickerComp2.opacityStatusTouch && (event.preventDefault(), colorPickerComp2.opacitySliderHandler2(event.changedTouches[0].clientX))
}), { passive: !1 }),

document.addEventListener("touchend", (function () {
    !0 === colorPickerComp1.opacityStatusTouch && (colorPickerComp1.opacityStatusTouch = !1)
})),

document.addEventListener("touchend", (function () {
    !0 === colorPickerComp2.opacityStatusTouch && (colorPickerComp2.opacityStatusTouch = !1)
})),

colorPickerComp1.colorBoxHandler1 = function (t1, e1, o1) {
    const l1 = document.getElementById("color_box1"),
    r1 = document.getElementById("box_dragger1");
    let c = t1 - l1.getBoundingClientRect().left,
    n = !0 === o1 ? e1 - l1.getBoundingClientRect().top : e1 - l1.getBoundingClientRect().top - document.getElementsByTagName("HTML")[0].scrollTop;
    c < 6 && (c = 6),
    c > 222 && (c = 222),
    n < 6 && (n = 6),
    n > 143 && (n = 143),
    r1.attributes.y.nodeValue = n,
    r1.attributes.x.nodeValue = c;
    const i = Math.round((c - 7) / 216 * 100),
    s = 100 - i / 2,
    a = 100 - (n - 7) / 137 * 100;
    let u = Math.floor(a / 100 * s);
    colorPickerComp1.saturation = i,
    colorPickerComp1.lightness = u;
    const m1 = `hsla(${colorPickerComp1.hue}, ${i}%, ${u}%, ${colorPickerComp1.alpha})`;

    document.getElementById("color_picked_preview1").children[0].setAttribute("fill", m1),
    colorPickerComp1.updateColorValueInput1()
    //colorPickerComp1.instance.element.setAttribute("data-color", "color")
},


colorPickerComp2.colorBoxHandler2 = function (t2, e2, o2) {
    const l2 = document.getElementById("color_box2"),
    r2 = document.getElementById("box_dragger2");
    let c = t2 - l2.getBoundingClientRect().left,
    n = !0 === o2 ? e2 - l2.getBoundingClientRect().top : e2 - l2.getBoundingClientRect().top - document.getElementsByTagName("HTML")[0].scrollTop;
    c < 6 && (c = 6),
    c > 222 && (c = 222),
    n < 6 && (n = 6),
    n > 143 && (n = 143),
    r2.attributes.y.nodeValue = n,
    r2.attributes.x.nodeValue = c;
    const i = Math.round((c - 7) / 216 * 100),
    s = 100 - i / 2,
    a = 100 - (n - 7) / 137 * 100;
    let u = Math.floor(a / 100 * s);
    colorPickerComp2.saturation = i,
    colorPickerComp2.lightness = u;
    const m2 = `hsla(${colorPickerComp2.hue}, ${i}%, ${u}%, ${colorPickerComp2.alpha})`;

    document.getElementById("color_picked_preview2").children[0].setAttribute("fill", m2),
    colorPickerComp2.updateColorValueInput2()
    //colorPickerComp2.instance.e2.setAttribute("data-color", "color")
},

document.getElementById("color_box1").addEventListener("mousedown", (function (t1) {
    colorPickerComp1.boxStatus = !0,
    colorPickerComp1.colorBoxHandler1(t1.pageX, t1.pageY)
})),

document.getElementById("color_box2").addEventListener("mousedown", (function (t2) {
    colorPickerComp2.boxStatus = !0,
    colorPickerComp2.colorBoxHandler2(t2.pageX, t2.pageY)
})),

document.addEventListener("mousemove", (function (t1) {
    !0 === colorPickerComp1.boxStatus && colorPickerComp1.colorBoxHandler1(t1.pageX, t1.pageY)
})),

document.addEventListener("mousemove", (function (t2) {
    !0 === colorPickerComp2.boxStatus && colorPickerComp2.colorBoxHandler2(t2.pageX, t2.pageY)
})),

document.addEventListener("mouseup", (function (t1) {
    !0 === colorPickerComp1.boxStatus && (colorPickerComp1.boxStatus = !1)
})),

document.addEventListener("mouseup", (function (t1) {
    !0 === colorPickerComp2.boxStatus && (colorPickerComp2.boxStatus = !1)
})),

document.getElementById("color_box1").addEventListener("touchstart", (function (t1) {
    colorPickerComp1.boxStatusTouch = !0,
    colorPickerComp1.colorBoxHandler1(t1.changedTouches[0].clientX, t1.changedTouches[0].clientY, !0)
}), { passive: !0 }),

document.getElementById("color_box2").addEventListener("touchstart", (function (t2) {
    colorPickerComp2.boxStatusTouch = !0,
    colorPickerComp2.colorBoxHandler2(t2.changedTouches[0].clientX, t2.changedTouches[0].clientY, !0)
}), { passive: !0 }),

document.addEventListener("touchmove", (function (event) {
    !0 === colorPickerComp1.boxStatusTouch && (event.preventDefault(), colorPickerComp1.colorBoxHandler1(event.changedTouches[0].clientX, event.changedTouches[0].clientY, !0))
}), { passive: !1 }),

document.addEventListener("touchmove", (function (event) {
    !0 === colorPickerComp2.boxStatusTouch && (event.preventDefault(), colorPickerComp2.colorBoxHandler2(event.changedTouches[0].clientX, event.changedTouches[0].clientY, !0))
}), { passive: !1 }),

document.addEventListener("touchend", (function () {
    !0 === colorPickerComp1.boxStatusTouch && (colorPickerComp1.boxStatusTouch = !1)
})),

document.addEventListener("touchend", (function () {
    !0 === colorPickerComp2.boxStatusTouch && (colorPickerComp2.boxStatusTouch = !1)
})),

colorPickerComp1.updateColorDisplays1 = function (t) {
    if ("undefined" == t) t = {
        h: 0, s: 100, l: 50, a: 1
    };
    else if ("#" == t.substring(0, 1)) t = colorPickerComp1.hexAToRGBA1(t, !0);
    else if ("r" == t.substring(0, 1)) {
        const e = t.match(/[.?\d]+/g); e[3] = null == e[3] ? 1 : e[3], t = colorPickerComp1.RGBAToHSLA1(e[0], e[1], e[2], e[3])
    } else {
        const e = t.match(/[.?\d]+/g);
        e[3] = null == e[3] ? 1 : e[3], t = { h: e[0], s: e[1], l: e[2], a: e[3]
        }
    }

    colorPickerComp1.hue = t.h,
    colorPickerComp1.saturation = t.s,
    colorPickerComp1.lightness = t.l,
    colorPickerComp1.alpha = t.a,
    colorPickerComp1.updateColorValueInput1(),
    document.getElementById("color_picked_preview1").children[0].setAttribute("fill", `hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a}`), document.getElementById("saturation1").children[1].setAttribute("stop-color", `hsl(${t.h}, 100%, 50%)`);
    const e = document.getElementById("box_dragger1");
    let o, l;
    l = 1.43 * (100 - t.l / (100 - t.s / 2) * 100) + 6,
    o = 2.16 * t.s + 6,
    e.attributes.x.nodeValue = o,
    e.attributes.y.nodeValue = l;
    const r = document.getElementById("color_slider_dragger1");
    let c = 1.25 * (100 - t.h / 359 * 100) + 10;
    r.attributes.x.nodeValue = c;
    const n = document.getElementById("opacity_slider_dragger1");
    let i = 100 * t.a * 1.24 + 11;
    n.attributes.x.nodeValue = i
},

colorPickerComp2.updateColorDisplays2 = function (t) {
    if ("undefined" == t) t = {
        h: 0, s: 100, l: 50, a: 1
    };
    else if ("#" == t.substring(0, 1)) t = colorPickerComp2.hexAToRGBA2(t, !0);
    else if ("r" == t.substring(0, 1)) {
        const e = t.match(/[.?\d]+/g); e[3] = null == e[3] ? 1 : e[3], t = colorPickerComp2.RGBAToHSLA2(e[0], e[1], e[2], e[3])
    } else {
        const e = t.match(/[.?\d]+/g);
        e[3] = null == e[3] ? 1 : e[3], t = { h: e[0], s: e[1], l: e[2], a: e[3]
        }
    }

    colorPickerComp2.hue = t.h,
    colorPickerComp2.saturation = t.s,
    colorPickerComp2.lightness = t.l,
    colorPickerComp2.alpha = t.a,
    colorPickerComp2.updateColorValueInput2(),
    document.getElementById("color_picked_preview2").children[0].setAttribute("fill", `hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a}`), document.getElementById("saturation2").children[1].setAttribute("stop-color", `hsl(${t.h}, 100%, 50%)`);
    const e = document.getElementById("box_dragger2");
    let o, l;
    l = 1.43 * (100 - t.l / (100 - t.s / 2) * 100) + 6,
    o = 2.16 * t.s + 6,
    e.attributes.x.nodeValue = o,
    e.attributes.y.nodeValue = l;
    const r = document.getElementById("color_slider_dragger2");
    let c = 1.25 * (100 - t.h / 359 * 100) + 10;
    r.attributes.x.nodeValue = c;
    const n = document.getElementById("opacity_slider_dragger2");
    let i = 100 * t.a * 1.24 + 11;
    n.attributes.x.nodeValue = i
},

colorPickerComp1.updateColorValueInput1 = function () {
    if ("HEXA" == colorPickerComp1.colorTypeStatus) {
        const t = colorPickerComp1.HSLAToRGBA1(colorPickerComp1.hue, colorPickerComp1.saturation, colorPickerComp1.lightness, colorPickerComp1.alpha, !0);
        document.getElementById("hex_input1").value = t
    } else if ("RGBA" == colorPickerComp1.colorTypeStatus) {
        const t = colorPickerComp1.HSLAToRGBA1(colorPickerComp1.hue, colorPickerComp1.saturation, colorPickerComp1.lightness, colorPickerComp1.alpha);
        document.getElementsByClassName("rgba_input1")[0].value = t.r,
        document.getElementsByClassName("rgba_input1")[1].value = t.g,
        document.getElementsByClassName("rgba_input1")[2].value = t.b,
        document.getElementsByClassName("rgba_input1")[3].value = t.a
    } else {document.getElementsByClassName("hsla_input1")[0].value = colorPickerComp1.hue,
        document.getElementsByClassName("hsla_input1")[1].value = colorPickerComp1.saturation,
        document.getElementsByClassName("hsla_input1")[2].value = colorPickerComp1.lightness,
        document.getElementsByClassName("hsla_input1")[3].value = colorPickerComp1.alpha }
};

colorPickerComp2.updateColorValueInput2 = function () {
    if ("HEXA" == colorPickerComp2.colorTypeStatus) {
        const t = colorPickerComp2.HSLAToRGBA2(colorPickerComp2.hue, colorPickerComp2.saturation, colorPickerComp2.lightness, colorPickerComp2.alpha, !0);
        document.getElementById("hex_input2").value = t
    } else if ("RGBA" == colorPickerComp2.colorTypeStatus) {
        const t = colorPickerComp2.HSLAToRGBA2(colorPickerComp2.hue, colorPickerComp2.saturation, colorPickerComp2.lightness, colorPickerComp2.alpha);
        document.getElementsByClassName("rgba_input2")[0].value = t.r,
        document.getElementsByClassName("rgba_input2")[1].value = t.g,
        document.getElementsByClassName("rgba_input2")[2].value = t.b,
        document.getElementsByClassName("rgba_input2")[3].value = t.a
    } else {document.getElementsByClassName("hsla_input2")[0].value = colorPickerComp2.hue,
        document.getElementsByClassName("hsla_input2")[1].value = colorPickerComp2.saturation,
        document.getElementsByClassName("hsla_input2")[2].value = colorPickerComp2.lightness,
        document.getElementsByClassName("hsla_input2")[3].value = colorPickerComp2.alpha }
};



window.addEventListener('DOMContentLoaded', (function (event) {

    if(colorPickerComp1.LSCustomColors1[0].length>5){
        document.getElementById("custom_colors_add1").style.display = "none";
    }

    if(colorPickerComp2.LSCustomColors2[0].length>5){
        document.getElementById("custom_colors_add2").style.display = "none";
    }
}));