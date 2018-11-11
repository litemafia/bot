var fastInt = 0, nightExt = 0, mode = 0, player = 8, bet = 20, liga = 1, zid = 0, providz = 0, provid = 0, ext = [], zad = 0, fmyaso = 0, auk = 0, son = 0, suik = 0, act = 1, my_role = '', gol = 0, golsozd = 0, prig = 0, zhet = 0, hod = 0, sliv = 0, time1 = 4000, nubsort = [], topsort = [], night = 0, boltun = 0, speed = 1000, naps = [], vih = 0;
$('.volumeControl').width(394);
$('.volumeControl').height(620);
duels = "'duels'"; tops = "'top'"; clans = "'clans'"; rynok = "'black_m'"; extras = "'extras'"; buy = "'buy'";
$('.volumeControl').prepend('<div style="color: green;width: 393px;height: 490px;"><span style="color:red">КОМНАТА</span><br/><input type="radio" id="m1" name="rums"/>Свои<input type="radio" id="m2" name="rums"/>Чужие<input type="radio" id="m3" name="rums"/>По автовходу<input type="radio" id="m4" name="rums"/>Хвостик(требует скоростной инет)<br/>\
<div id="set"><select id="p"><option>8</option><option>12</option><option>16</option><option>20</option></select><select id="b"><option>20</option><option>100</option><option>1000</option><option>5000</option><option>10000</option></select><select id="l"><option>Все лиги</option><option selected>Бронзовая лига</option><option>Серебряная лига</option><option>Золотая лига</option><option>Платиновая лига</option><option>Бронза+Серебро</option><option>Золото+Плата</option><option>Б+С+З+П</option></select><br\></div>\
<div id="niks" style="display:none">Ники (через запятую): <input type="text" id="szd" style="width:265px"/><br/><br/></div>\
<input type="radio" id="s0" name="suik" checked/>Без суика<input type="radio" id="s1" name="suik"/>Суик сразу+выход<input type="radio" id="s2" name="suik"/>Суик после заданки+выход<br/><br/><span style="color:red">НА ОПЫТ</span><br/>\
<input type="checkbox" id="e1" class="ext" value="1"/>Реаниматор<input type="checkbox" id="e2" class="ext" value="2"/>Рев<input type="checkbox" id="e3" class="ext" value="3"/>Катана<input type="checkbox" id="e4" class="ext" value="4"/>Снайперка<br/><br/>\
<span style="color:red">ЗАДАНИЯ</span><br/><input type="radio" id="son1" name="son"/>Снотворка(ман)<input type="radio" id="son2" name="son"/>Снотворка<input type="radio" id="son0" name="son" checked/>Без снотворки<br/><br/>\
<input type="radio" id="zad1" name="zad"/>Таро в нубов+AK<input type="radio" id="zad2" name="zad"/>AK+Таро в нубов<input type="radio" id="zad3" name="zad"/>Таро в нубов без АК<br/>\
<input type="radio" id="zad5" name="zad"/>AK+Таро под себя<input type="radio" id="zad6" name="zad"/>Таро под себя<br/>\
<input type="radio" id="zad7" name="zad"/>Жук под себя<input type="radio" id="zad8" name="zad"/>Жук на созда<input type="radio" id="zad9" name="zad"/>Сходу АК без Таро и Жуков<br/><input type="radio" id="zad0" name="zad" checked/>Без заданий<br/><br/>\
<span style="color:red">АУКЦИОН</span><br/><input type="radio" id="a1" name="auks"/>Досрочкой все<br/><input type="radio" id="a2" name="auks"/>Досрочкой(роли через запятую):<input type="text" id="roles" style="width:180px"/><br/><input type="radio" id="a0" name="auks" checked/>Не трогать аук<br/><br/>\
<span style="color:red">АКТИВИРОВАТЬ ЧИТ</span><input type="checkbox" class="act" value="act" checked/><br/><br/>\
<span style="color:red">ДОПЫ</span></br><input type="checkbox" class="gol" value="gol"/>Голосовать под себя<input type="checkbox" class="golsozd" value="golsozd"/>Лить за создом<input type="checkbox" class="provid" value="provid"/>Лить за провой/таро/паялами<input type="checkbox" class="hod" value="hod"/>Ход под себя<input type="checkbox" class="prig" value="prig"/>АвтоПриговор<input type="checkbox" class="zhet" value="zhet"/>АвтоШляпа<br /><input type="checkbox" class="boltun" value="boltun"/>Болтун / слова (через запятую): <input type="text" id="blt" style="width:190px"/><br /><input type="checkbox" class="sliv" value="sliv"/>Слив роли и напаров созду (в режиме автовхода)<input type="checkbox" class="vih" value="vih"/>Автовыход<br /><button onclick="_WND_proc('+duels+')">Дуэль</button>&nbsp;&nbsp;<button onclick="_WND_proc('+clans+')">Мой клан</button>&nbsp;&nbsp;<button onclick="_WND_proc('+tops+')">Топ</button>&nbsp;&nbsp;<button onclick="_WND_proc('+extras+', '+rynok+')">Рынок</button>&nbsp;&nbsp;<br/></div>');
$('.volumeControl').append('<span onclick="_PRF(7691873);">Blizzard (dec 2017)</span> &nbsp;&nbsp; <button onclick="_WND_proc('+extras+', '+buy+', {id: 162, toid: 7691873});">Поблагодарить автора</button>');
$('document').ready(function(){
	$('input:radio').click( //отлавливаем нажатие по радиобаттону
		function(a){
			speed = 1000;
			time1 = 4000;
			switch (a.target.id) {
				case 'm1': //если выбрали Свои 
					$('#niks').hide();
					$('#set').show(); 
					mode = 1; 
					setCookie('mode', 1); //сохраняем в куки
					break;
				case 'm2': //если выбрали Чужие 
					$('#niks').hide();
					$('#set').show();
					mode = 2;
					setCookie('mode', 2);
					break;
				case 'm3': //если выбрали Автовход
					$('#set').hide();
					$('#niks').show();
					mode = 3;
					setCookie('mode', 3);
					break;
				case 'm4': //если выбрали Хвостик
					$('#set').hide();
					$('#niks').show();
					mode = 4;
					setCookie('mode', 4);
					speed = 2500;
					break;
				case 'a1': //если выбрали Досрочкой все
					auk = 1;
					setCookie('auk', 1);
					break;
				case 'a2': //если выбрали Досрочкой определенные роли
					auk = 2;
					setCookie('auk', 2);
					break;
				case 'a0': //если выбрали без досрочек
					auk = 0;
					setCookie('auk', 0);
					break;
				case 'son1': //если выбрали Снотворку (ман)
					son = 1;
					setCookie('son', 1);
					break;
				case 'son2': //если выбрали Снотворку
					son = 2;
					setCookie('son', 2);
					break;
				case 'son0': //если выбрали без снотворки
					son = 0;
					setCookie('son', 3);
					break;	
				case 'zad1': //если выбрали Таро в нубов+AK
					zad = 1;
					setCookie('zad', 1);
					fmyaso = 0;
					break;
				case 'zad2': //если выбрали AK+Таро в нубов
					zad = 2;
					setCookie('zad', 2);
					fmyaso = 0;
					break;
				case 'zad3': //если выбрали Таро в нубов без АК
					zad = 3;
					setCookie('zad', 3);
					fmyaso = 0;
					break;
				case 'zad5': //если выбрали AK+Таро под себя
					zad = 5;
					setCookie('zad', 5);
					fmyaso = 0;
					break;
				case 'zad6': //если выбрали AK+Таро под себя
					zad = 6;
					setCookie('zad', 6);
					fmyaso = 0;
					break;	
				case 'zad7': //если выбрали Таро под себя
					zad = 7;
					setCookie('zad', 7);
					fmyaso = 0;
					break;
				case 'zad8': //если выбрали Жук под себя
					zad = 8;
					setCookie('zad', 8);
					break;
				case 'zad9': //если выбрали Жук на созда
					zad = 9;
					setCookie('zad', 9);
					break;
				case 'zad0': //если выбрали без заданий
					zad = 0;
					time1 = 100;
					setCookie('zad', 0);
					setCookie('time1', 100);
					break;
				case 's0': //если выбрали без суика
					suik = 0;
					setCookie('suik', 0);
					break;
				case 's1': //сходу суик
					suik = 1;
					setCookie('suik', 1);
					break;
				case 's2': //суик после заданки
					suik = 2;
					setCookie('suik', 2);
					break;
			}
		}
	);
	$('input:checkbox').click(
		function(a){
			ext = $('input:checkbox:checked.ext').map(function () { //сохраняем в массив выбранные чекбоксы (реаниматор, рев, катана, снайперка)
				fmyaso = 0;
				return this.value;
			}).get();
			setCookie('ext', ext); //сохраняем в куках выбранные экстры
			switch (a.target.value) {
				case 'act':
					act = (a.target.checked) ? 1 : 0;
					setCookie('act', act); //сохраняем в куках активность чита
					break;
				case 'gol':
					gol = (a.target.checked) ? 1 : 0; //сохраняем в куках голосовать под себя
					setCookie('gol', gol);
					break;
				case 'golsozd':
					golsozd = (a.target.checked) ? 1 : 0; //сохраняем в куках голосовать за создом
					setCookie('golsozd', golsozd);
					break;
				case 'provid':
					provid = (a.target.checked) ? 1 : 0; //сохраняем в куках голосовать за создом
					setCookie('provid', provid);
					break;
				case 'prig':
					prig = (a.target.checked) ? 1 : 0; //сохраняем в куках автоприговор
					setCookie('prig', prig);
					break;
				case 'zhet':
					zhet = (a.target.checked) ? 1 : 0; //сохраняем в куках жетон
					setCookie('zhet', zhet);
					break;
				case 'hod':
					hod = (a.target.checked) ? 1 : 0; //сохраняем в куках ход
					setCookie('hod', hod);
					break;
				case 'sliv':
					sliv = (a.target.checked) ? 1 : 0; //сохраняем в куках ход
					setCookie('sliv', sliv);
					break;
				case 'boltun':
					boltun = (a.target.checked) ? 1 : 0; //сохраняем в куках болтуна
					setCookie('boltun', boltun);
					break;
				case 'vih':
					vih = (a.target.checked) ? 1 : 0; //сохраняем в куках автовыход
					setCookie('vih', vih);
					break;
			}
		}
	);
	$('#szd').keyup(function(){
		setCookie('szd', $(this).val()); //сохраняем в куках ники
	});
	$('#roles').keyup(function(){
		setCookie('roles', $(this).val()); //сохраняем в куках ники
	});
	$('#blt').keyup(function(){
		setCookie('blt', $(this).val()); //сохраняем в куках слова болтуна
	});
	$("#p").change(function (val) {
		player = parseInt(val.target.value); //сохраняем настройки комнат
		setCookie('player', player);
	});
	$("#b").change(function (val) {
		bet = parseInt(val.target.value);
		setCookie('bet', bet);
	});
	$("#l").change(function (val) {
		liga = parseInt(val.target.selectedIndex);
		setCookie('liga', liga);
	});
	$(".cat").click(function () {
		$('.volumeControl').css('left', 593);
	});
	$(".sound").click(function () {
		$('.volumeControl').css('left', 593);
	});
});
//определяем команды
bas = [["Гражданин","Комиссар","Сержант","Доктор","Медработник","Смертник","Стерва","Вор","Свидетель","Дед Мороз","Валентин","Добрый зайка","Гринч","Влюблённый","Кондитер","Вредный зайка","Нефритовый заяц","Костюмер","Франкенштейн","Привидение","Дракула","Бешеный пират"],
		["Мафиози","Босс мафии","Двуликий"],
		["Маньяк"],
		["Чокнутый Профессор","Зомби"],
		["Потрошитель"],
		["Подручный","Жирный Тони","Марко","Франческа","Розарио"],
		["Тётушка Лин","Якудза","Гора","Тень"],
		["Чёрная Борода"]];
//чтение куков и запись данных в переменные
function cookies() {
	cookieArr = document.cookie.split(';');
	cookieArr.forEach(function(item, n) {
		ckey = item.split("=");
		ckey[0] = ckey[0].replace(/^ /, '');
		switch (ckey[0]) {
			case 'mode':
				mode = parseInt(ckey[1]);
				$('#m'+mode).click();
				if (mode == 4){
					speed = 2500;
				}
				break;
			case 'auk':
				auk = parseInt(ckey[1]);
				$('#a'+auk).click();
				break;
			case 'son':
				son = parseInt(ckey[1]);
				$('#son'+son).click();
				break;
			case 'zad':
				zad = parseInt(ckey[1]);
				$('#zad'+zad).click();
				break;
			case 'time1':
				time1 = parseInt(ckey[1]);
				break;
			case 'act':
				act = parseInt(ckey[1]);
				if (act == 0) {
					$(".act").prop("checked", false);
				}
				else {
					$(".act").prop("checked", true);
				}
				break;
			case 'suik':
				suik = parseInt(ckey[1]);
				$('#s'+suik).click();
				break;
			case 'gol':
				gol = parseInt(ckey[1]);
				if (gol == 1) {
					$(".gol").prop("checked", true);
				}
				break;
			case 'golsozd':
				golsozd = parseInt(ckey[1]);
				if (golsozd == 1) {
					$(".golsozd").prop("checked", true);
				}
				break;
			case 'provid':
				provid = parseInt(ckey[1]);
				if (provid == 1) {
					$(".provid").prop("checked", true);
				}
				break;
			case 'prig':
				prig = parseInt(ckey[1]);
				if (prig == 1) {
					$(".prig").prop("checked", true);
				}
				break;
			case 'vih':
				vih = parseInt(ckey[1]);
				if (vih == 1) {
					$(".vih").prop("checked", true);
				}
				break;
			case 'hod':
				hod = parseInt(ckey[1]);
				if (hod == 1) {
					$(".hod").prop("checked", true);
				}
				break;
			case 'sliv':
				sliv = parseInt(ckey[1]);
				if (sliv == 1) {
					$(".sliv").prop("checked", true);
				}
				break;
			case 'boltun':
				boltun = parseInt(ckey[1]);
				if (boltun == 1) {
					$(".boltun").prop("checked", true);
				}
				break;
			case 'zhet':
				zhet = parseInt(ckey[1]);
				if (zhet == 1) {
					$(".zhet").prop("checked", true);
				}
				break;
			case 'liga':
				liga = parseInt(ckey[1]);
				$('#l').get(0).selectedIndex = liga;
				break;
			case 'bet':
				bet = parseInt(ckey[1]);
				$('#b').val(bet);
				break;
			case 'player':
				player = parseInt(ckey[1]);
				$('#p').val(player);
				break;
			case 'szd':
				$('#szd').val(ckey[1]);
				break;
			case 'roles':
				$('#roles').val(ckey[1]);
				break;
			case 'blt':
				$('#blt').val(ckey[1]);
				break;
			case 'ext':
				ext = String(ckey[1]).split(',');
				ext.forEach(function(item, i){
					$("#e"+parseInt(item)).prop("checked", true);
				});
				break;
		}
	});
}
//Функция записи в куки
function setCookie(name, value) {
	date = new Date(new Date().getTime() + 15552000 * 1000);
	document.cookie = name + "=" + value + '; expires=' + date.toUTCString() + '; path=/';
	return false;
}
//Функция хвостика
function hvostik(_id) {
	$.ajax({
		async: true,
		cache: false,
		type: "POST",
		url: window.location.pathname + "DO/" + Math.random(),
		data: {method: "gam_players", id: _id},
		dataType: "json",
		success: function(data) {
			if (typeof data.gmp != "undefined"){
				for (i = 0; i < data.gmp.length; i++) {
					$('#szd').val().split(',').forEach(function(item, j){
						if (item.trim().replace(/\[|\]|\@/g,'') == data.gmp[i][1]){
							_GM_action('gml', 'join', _id);
						}
					});
				}
			}
		}
	});
}
//Функция распределения нубов и топовиков в разные массивы
function nub(id_p, lvl){
	$.ajax({
		async: true,
		cache: false,
		type: "POST",
		url: window.location.pathname + "DO/" + Math.random(),
		data: {method: "prf", id:id_p , tab:"profile"},
		dataType: "json",
		success: function(data){
			if (data.err == undefined){
				if (parseInt(data.arr[8][1]) < lvl){
					nubsort.push({"id": parseInt(id_p), "z": parseInt(data.arr[8][1])});
				}
				else {
					topsort.push({"id": parseInt(id_p), "z": parseInt(data.arr[8][1])});
				}
			}
		}
	});
	return nubsort;
}
//Функция проверки живых
function lives(lvl, bs){
	if (pla_data['dead'] == undefined){ //если сам живой
		nubsort = []; topsort = []; //инициализируем массивы для нубов и топовиков
		_live = $('#upl_list').find('.dead.not-displayed'); //фильтруем только живых
		for (var i = 0; i < _live.length; i++){
			yes = true;
			l = parseInt($($(_live)[i]).parent('div').parent('li').attr('id').substr(4)); //получаем ид
			t = $($($(_live)[i]).parent('div').parent('li')[0]).children(1)[0].title; //получаем роль, если открыта
			if (bs){
				bas.forEach(function(item, j){
					if ((item.indexOf(t) + 1 > 0) && (item.indexOf(my_role) + 1 > 0)) { //проверка на напара, чтоб не были в одной команде
						yes = false;
					}
				});
			}
			if (((l != my_id) && (t == '')) || ((t != '') && (yes) && (bs) && (l != my_id))){ //если не свой ид и не напар по команде
				nub(l, lvl); //в распределение
			}
		}
	}
	return false;
}
//Функция экстр
function exts(eid, uid, k, prov){
	if (((!pla_data['dead']) || (eid == 208)) && (($('#gxt_'+eid).length > 0) || (my_id == 8574797))){
		ext_send = false;
		setTimeout(function(){
			if (uid != null){
				if (prov){
					if ($("#upl_"+uid+" .ico")[0].title == ''){
						_GM_action('', 'ext_use', [eid, uid]);
						ext_send = true;
					}
				}
				else {
					_GM_action('', 'ext_use', [eid, uid]);
					ext_send = true;
				}
			}
			else {
				if (eid == 170){
					if (gam_data["v_mode"] == 0){
						_GM_action('', 'ext_act', eid);
						ext_send = true;
					}
				}
				else {
					_GM_action('', 'ext_act', eid);
					ext_send = true;
				}
			}
			if ((ext_send) && (my_id == 8574797)){
				obj = {101: 'Жук', 105: 'Рев', 156: 'Таро', 159: 'АК', 170: 'Сон', 188: 'Катана', 209: 'Шляпа', 200: 'Снайперка', 206: 'Кандалы', 208: 'Реаниматор'};
				//console.error(obj[eid], uid, k);
			}
		}, k);
	}
}
//Функция получения ид игрока под собой, если сам последний, то ид первого
function idx(){
	list = $("#upl_list li .dead.not-displayed");
	index = list.parent('.ico').index($('.ico.my')) + 1;
	if (list[index] == undefined) index = 0;
	_id = list.parents('li').get().reverse()[index].id.substr(4);
	return _id;
}
function nap(){
	list = $("#upl_list li .dead.not-displayed");
	for (q = 0; q < list.length; q++) {
		ava = list.parents('li div').get().reverse()[q].style.backgroundImage;
		if (ava.indexOf('unknown_') + 1 <= 0){
			naps.push(list.parents('li').get().reverse()[q].id.substr(4));
		}
	}
}
function idxund(){
	list = $("#upl_list li .dead.not-displayed");
	sind = list.parent('.ico').index($('.ico.my'));
	index = sind + 1;
	for (q = 0; q < 6; q++) {
		if (list[index] == undefined) index = 0;
		_id = list.parents('li').get().reverse()[index].id.substr(4);
		if (naps.indexOf(_id) + 1 > 0){
			index++;
		}
		else q = 7;
	}
	return _id;
}
//звук 
function _SOUND_volume(level, key){
	var _key = (typeof key == "undefined" || !key ? 'sfx' : key);
	_SOUND_vol[_key] = level;
	for (_k in _SOUND_arr[_key]){
		if (_SOUND_arr[_key][_k].setVolume) _SOUND_arr[_key][_k].setVolume(level);
	}
	if (_key == 'sfx'){
		cat(level);
	}
}
function _SOUND_stopGroup(key){
	var _key = (typeof key == "undefined" || !key ? 'sfx' : key);
	for (_k in _SOUND_arr[_key]){
		if (_SOUND_arr[_key][_k] != undefined) {
			if (_SOUND_arr[_key][_k].stop != null){
				_SOUND_arr[_key][_k].stop();
			}
		}
	}
}
//Рандомная перемешка элементов массива
Array.prototype.peremeshka = function(b){
	var i = this.length, j, t;
	while (i) {
		j = Math.floor((i--) * Math.random());
		t = b && typeof this[i].peremeshka !== 'undefined' ? this[i].peremeshka() : this[i];
		this[i] = this[j];
		this[j] = t;
	}
	return this;
};
function start(){
	$('#cco_log').bind("DOMNodeInserted", function(e){
		if ((provid) && (ifc_mode == 'game') && (!pla_data['dead'])){
			try {
				if ($(e.target).text().length > 39){ //39 минимальная возможная длина провы, чтобы отбросить большинство нубосообщений
					var s = $(e.target).text().split(':');
					if (s[0].trim().indexOf('сообщает') + 1){ //прова
						if (s[1].trim().indexOf('играет за граждан') + 1 == 0) { // ловим прову зла в чате
							providz = $('#upl_list li .nick:contains("'+s[1].trim().split('играет')[0].trim()+'")').parents()[1].id.replace(/\D+/g, "");
							setTimeout(function() { _GM_action('', 'vote', 2, [providz, 0]); }, 2000);
						}
					} else if (s[2]){ //таро, детектор, паялы, джокеры
						if ($.inArray(s[1].trim(), ['Карты таро раскрыли вам роль', 'Детектор лжи дал результаты', 'Пытки паяльником дали результат', 'Джокер раскрыл роль случайного игрока']) + 1){
							var arr = s[2].split('-');
							if ($.inArray(arr[1].trim(), ["Мафиози", "Босс мафии", "Двуликий", "Маньяк", "Чокнутый Профессор", "Зомби", "Потрошитель", "Подручный", "Жирный Тони", "Марко", "Франческа", "Розарио", "Тётушка Лин", "Якудза", "Гора", "Тень", "Чёрная Борода", "Хулиганка Пеппи"]) + 1) {
								providz = $('#upl_list li .nick:contains("'+arr[0].trim()+'")').parents()[1].id.replace(/\D+/g, "");
								setTimeout(function() { _GM_action('', 'vote', 2, [providz, 0]); }, 2000);
							}
						}
					}
				}
			} catch (e) {}
		}
	});	
	var pid = my_id;
	var pclan = my_clan;
	setInterval(function() {
		$('.containerEraser').css('display','none');
		if ((pid != my_id) || (pclan != my_clan)){
			alert('Вашего id нет в списке разрешенных. Обратитесь https://vk.com/id327392252');
			location.reload();
		}
		if ((act == 1) && (mode > 0)){
			if (gam_id == 0) {
				//if ((ss1.split('/')[2].split('.')[2]-1e1-1) && (le1.width == 1)){
					night = 0;
					switch (mode) {
						case 1: //автосоздавалка
							lg = liga;
							if (liga == 0) {
								lg = 1;
							} else if (liga == 5){
								lg = Math.floor(1 + Math.random() * 2);
							} else if (liga == 6){
								lg = Math.floor(3 + Math.random() * 4);
							} else if (liga == 7){
								lg = Math.floor(1 + Math.random() * 4);
							}
							$("#buttonCreateGame").click(); 
							$("#crt_players").val(player); 
							$("#crt_league").val(lg); 
							$("#crt_bet").val(bet); 
							$("#crt_prior").click(); 
							setTimeout(function() { 
								$("#gmc_btn_create").click(); 
							}, 500);
							break;
						case 2: //запрыгалка
							blz = $('#gml_list').find('li'); 
							for(var i = 0; i < blz.length; i++){ 
								ligas = ['Все лиги', 'Бронзовая лига', 'Серебряная лига', 'Золотая лига', 'Платиновая лига', 'Бронза и Серебро']; 
								_liga = $($($(blz)[i]).children()[1]).attr("title"); 
								_players = $($($(blz)[i]).children()[2]).text().split('/'); 
								_stavka = $($($(blz)[i]).children()[3]).text();
								//console.info(_liga, _players, _stavka);
								if (((ligas[liga] == _liga) || (liga == 0) || ((liga == 5) && ((_liga == 'Бронзовая лига') || (_liga == 'Серебряная лига'))) || ((liga == 6) && ((_liga == 'Золотая лига') || (_liga == 'Платиновая лига'))) ||  ((liga == 7) && ((_liga == 'Бронзовая лига') || (_liga == 'Серебряная лига') || (_liga == 'Золотая лига') || (_liga == 'Платиновая лига')))) && (_stavka == bet) && (player == _players[1]) && ((_players[1] - _players[0]) <=2 ) && ((_players[1] - _players[0]) !=0 )){ 
									_GM_action('gml', 'join', parseInt($($(blz)[i]).attr('id').replace(/\D+/g,""))); 
									break; 
								}
							}
							break;
						case 3: //автовход
							if ($('#szd').val() != ''){
								var _szd = $('#szd').val().split(',');
								_szd.forEach(function(item, i){
									blz = $('#gml_list .link:contains("'+item.trim().replace(/\[|\]|\@/g,'')+'")').parents().get(1);
									if (blz != null){ _GM_action('gml', 'join', blz.id.replace(/\D+/g,"")); }
								});
							}
							break;
						case 4: //хвостик
							if ($('#szd').val() != ''){
								var blz = $('#gml_list .coins').parents();
								for(var n = 0; n < blz.length; n++){
									i = parseInt(blz[n].id.replace(/\D+/g,""));
									if (!isNaN(i)){	hvostik(i);	}
								}
							}
							break;
					}
				//}
			}
			else {
				if ((night == 0) && (gam_data["v_mode"] == 0) && ((zad == 7) || (zad == 8) || (son != 0) || (hod == 1))){
					setTimeout(function(){
						night = 1;
						switch (zad) {
							case 7:
								exts(101, idx(), 300);
								break;
							case 8:
								id = parseInt(gam_data["owner"]);
								if ((id == my_id) || ($("#upl_"+id+" .dead.not-displayed")[0] == undefined)){
									id = parseInt($("#upl_list li .dead.not-displayed").parents('li')[0].id.substr(4));
								}
								exts(101, id, 300);
								break;
						}
						switch (son) {
							case 1: 
								if (my_role == 'Маньяк'){
									//exts(170, null, 100);
								}
								break;
							case 2: 
								//exts(170, null, 100);
								break;
						}
					},200);
					if (hod == 1){
						_GM_action('', 'vote', 0, [idxund(), 0]); //ходим под себя
					}
				}
				if ((gam_data["v_mode"] == undefined) && (auk > 0)){
					night = 0;
					switch (auk) {
						case 1: //все ауки досрочно
							//$('.underline').click();
							break;
						case 2: //определенные ауки досрочно
							//role = $('.roleName').text();
							//roles = ['Маньяк', 'Босс мафии', 'Двуликий', 'Дед Мороз', 'Потрошитель', 'Валентин'];
							//if (roles.indexOf(role) != -1){ 
								//$('.underline').click();
							//}
							break;
					}
				}
				else if ((gam_data["v_mode"] != undefined) && (fmyaso != gam_id)){
					fmyaso = gam_id;
					setTimeout(function(){
						$('.hint').bind("DOMSubtreeModified",function(data){
							var agid = parseInt(data.target.parentElement.parentElement.id.replace(/\D+/g,""));
							if ($(this)[0].innerText == 'против: ' + my_nick){
								_GM_action('', 'vote', 2, [agid, 0]);
							} else if ((agid == parseInt(gam_data["owner"])) && (golsozd)) {
								try {
									zid = parseInt($('#upl_list li .nick:contains("' + $(this)[0].innerText.slice(8) + '")').parents()[1].id.replace(/\D+/g, ""));
									setTimeout(function() { _GM_action('', 'vote', 2, [zid, 0]); }, 2000);
								} catch (e) {}
							}
						});
						nap();
						inter = $('#upl_list > li').length*100; //время таймаута в зависимости от количества игроков в руме
						if ($(".role-name").text().split('-')[1] != null){
							my_role = $(".role-name").text().split('-')[1].slice(1,-1); //своя роль
						}
						lim = (my_rnk > 43) ? 3 : 2; //свой лимит экстр
						if ($('#upl_675445').length == 1){
							//exts(206, 675445, 10); //кандалы на СМ
						}
						if (zhet == 1){
							for (q = 0; q < lim; q++) {
								exts(209, null, 100+q*100);
							}
							exts(209, null, 400);
						}
						if ((sliv == 1) && (mode == 3)){
							_live = $('#upl_list').find('.dead.not-displayed'); //фильтруем только живых
							l = parseInt($($(_live)[0]).parent('div').parent('li').attr('id').substr(4)); //получаем ид созда
							sn = $($($(_live)[0]).parent('div').parent('li')[0]).find('.nick')[0].innerHTML; //получаем ник созда
							slivs = [];
							for (var i = 0; i < _live.length; i++){
								t = $($($(_live)[i]).parent('div').parent('li')[0]).children(1)[0].title; //получаем роль, если открыта
								bas.forEach(function(item, j){
									if ((item.indexOf(t) + 1 > 0) && (item.indexOf(my_role) + 1 > 0)) { //проверка на напара, чтоб не были в одной команде
										snick = $($($(_live)[i]).parent('div').parent('li')[0]).find('.nick')[0].innerHTML;
										if (snick != my_nick){
											slivs.push(snick); //получаем ник
										}
									}
								});
							}
							mess = '';
							if (slivs.length > 0) {
								mess = 'Напарники: ' + slivs.join('; ');
							}
							message = 'Моя роль: ' + my_role + '. ' + mess;
							pos = $('#szd').val().indexOf(sn);
							if (false !== pos) {
								$.ajax({ 
									async: true, 
									cache: false, 
									type: "POST", 
									url: window.location.pathname + "DO/" + Math.random(), 
									data: {method: "cht_send", val: message , sd: 1, 'opt[pv]': l}, 
									dataType: "json", 
									success: function(data){} 
								});
							}
						}
						switch (zad) {
							case 1: //Таро в рандомных нубов+AK
								lives(70); //вычисляем живых и распределяем игроков по двум массивам - нубы менее 70 званки в нубскую, а остальные в топовики
								setTimeout(function(){
									nubsort.peremeshka(); //рандомно перемешиваем нубский массив
									topsort.peremeshka(); //рандомно перемешиваем массив топовиков
									t = 0;
									for (q = 0; q < lim; q++) {
										if (nubsort[q]){ //
											exts(156, nubsort[q].id, 300+q*300); //кидаем таро в нуба
										} else {
											if (topsort[t]){ //если нубов не осталось в руме, то продолжаем уже по списку топовиков
												exts(156, topsort[t].id, 300+q*300); //кидаем таро в топовика
												t++;
											}
										}
										exts(159, null, 2500+q*300); //АК
									}
								},inter);
								break;
							case 2: //AK+Таро в рандомных нубов
								//_GM_action('', 'ext_act', '209');
								for (q = 0; q < lim; q++) { 
									exts(159, null, 300+q*300);
								}
								lives(70);
								setTimeout(function(){
									if (($.inArray("1", ext) + 1 > 0) && (pla_data['dead'])){
										exts(208, my_id, 0); //воскрешаем свою задницу, если попали в себя и вкючен реаниматор
									}
									nubsort.peremeshka();
									topsort.peremeshka();
									t = 0;
									for (q = 0; q < lim; q++) {
										if (nubsort[q]){
											exts(156, nubsort[q].id, 2000+q*300);
										} else {
											if (topsort[t]){
												exts(156, topsort[t].id, 2000+q*300);
												t++;
											}
										}
									}
								},inter);
								break;
							case 3: //Таро в рандомных нубов
								lives(70);
								setTimeout(function(){
									nubsort.peremeshka();
									topsort.peremeshka();
									t = 0;
									for (q = 0; q < lim; q++) { 
										if (nubsort[q]){
											exts(156, nubsort[q].id, 300+q*300);
										} else {
											if (topsort[t]){
												exts(156, topsort[t].id, 300+q*300);
												t++;
											}
										}
									}
								},inter);
								break;
							case 5: //Таро под себя+АК
								for (q = 0; q < lim; q++) { 
									exts(159, null, 300+q*300);
									exts(156, idx(), 1500+q*500, true);
								}
								break;
							case 6: //Таро под себя
								for (q = 0; q < lim; q++) {
									exts(156, idx(), 300+q*500, true);
								}
								break;
							case 9: //только АК
								for (q = 0; q < lim; q++) { 
									exts(159, null, 300+q*300);
								}
								break;
						}
						if (zad == 0) time1 = 100;
						if ((suik == 2) && (gam_data["v_mode"] != undefined) && (ext.length == 0)){
							setTimeout(function(){
								_DLG('exit', 0);
								_DLG('exit', 0);
							}, time1);
						}
						if (ext.length > 0){
							setTimeout(function(){
								if (($.inArray("1", ext) + 1 > 0) && (pla_data['dead'])){
									exts(208, my_id, 100); //воскрешаем свою задницу, если попали в себя и вкючен реаниматор
								}
								if ($.inArray("2", ext) + 1 > 0){
									lives(40, 1); //если включены ревы, то формируем массив нубов, у которых званка меньше 40 и на топовиков, которые свыше 40
								}
								else {
									lives(70, 1); //если нет ревов, то формируем массив нубов, у которых званка меньше 70 и на топовиков, которые свыше 70
								}
								setTimeout(function(){
									nubsort.peremeshka(); //рандомно перемешиваем массив нубов
									topsort.peremeshka(); //рандомно перемешиваем массив топовиков
									tn = 0; tt = 0;
									for (q = 0; q < lim; q++) {
										if ($.inArray("2", ext) + 1 > 0){
											if (nubsort[tn]){
												exts(105, nubsort[tn].id, 600+q*300); //херачим ревом в нубов
												tn++;
											} else {
												if (topsort[tt]){
													exts(105, nubsort[tt].id, 600+q*300); //если нубы кончились, то продолжаем херачить в топовиков
													tt++;
												}
											}
										}
										if ($.inArray("3", ext) + 1 > 0){
											if (topsort[tt]){
												exts(188, topsort[tt].id, 1200+q*1200); //херачим катаной в топовиков
												tt++;
											} else {
												if (nubsort[tn]){
													exts(188, nubsort[tn].id, 1200+q*1200); //если топовиков не осталось добиваем нубов
													tn++;
												}
											}
										}
										if ($.inArray("4", ext) + 1 > 0){
											if (topsort[tt]){
												exts(200, topsort[tt].id, 3000+q*300); //херачим катаной в топовиков
												tt++;
											} else {
												if (nubsort[tn]){
													exts(200, nubsort[tn].id, 3000+q*300); //если топовиков не осталось добиваем нубов
													tn++;
												}
											}
										}
									}
									if ((suik == 2) && (gam_data["v_mode"] != undefined)){
										setTimeout(function(){
											_DLG('exit', 0);
											_DLG('exit', 0);
										}, 2500);
									}
								}, inter);
							}, time1);
						}
					},1000);
				}
				if (gam_data["v_mode"] == 1){
					night = 0;
					if (prig == 1){
						$('.yes').click(); //автоприговор
					}
					if (gol == 1){
						_GM_action('', 'vote', 2, [idx(), 0]); //голосуем под себя
					}
				}
				else if ((mode == 4) && (gam_data["v_mode"] == undefined) && (gam_id != 0)){
					exits = true;
					_szd = $('#szd').val().split(',');
					_szd.forEach(function(item, i){
						if ($('#gpl_list li .player:contains("'+item.trim().replace(/\[|\]|\@/g,'')+'")')[0] != undefined){
							exits = false; //в режиме хвостика если чел вышел, то выходим из рума
						}
					});
					if (exits) _GM_action('', 'exit');
				}
				if ((suik == 1) && (gam_data["v_mode"] != undefined)){
					_DLG('exit', 0);
					_DLG('exit', 0);
				}
				if ((pla_data['dead'] > 0) && (vih == 1)){
					_DLG('exit', 0);
				}
			}
			$($('.footerButtons').find('button')[0]).click();
		}

		if (((son > 0) || (auk > 0)) && (fastInt == 0) && (act)){
			fastInt = setInterval(function(){
				if ((gam_data["v_mode"] == undefined) && (auk > 0) && (ifc_mode == 'room')){
					switch (auk) {
						case 1: //все ауки досрочно
							$('.underline').click();
							console.info('AUK ALL');
							break;
						case 2: //определенные ауки досрочно
							role = $('.roleName').text();
							if ($('#roles').val().indexOf(role) + 1){ 
								$('.underline').click();
								console.info('AUK KOM');
							}
							break;
					}
				} else if ((gam_data["v_mode"] == 0) && (son > 0)){
					if (nightExt == 0){
						switch (son) {
							case 1: 
								if (my_role == 'Маньяк'){
									_GM_action('', 'ext_act', 170);
									console.info('SON MAN');
									nightExt = 1;
								}
								break;
							case 2: 
								_GM_action('', 'ext_act', 170);
								nightExt = 1;
								console.info('SON ALL');
								break;
						}
					}
				} else {
					nightExt = 0;
				}			
			}, 50);
		} else if (((son == 0) && (auk == 0)) || (act == 0)){
			nightExt = 0;
			clearInterval(fastInt);
			fastInt = 0;
		}
		
	}, speed);
	setInterval(function(){
		if (boltun == 1){
			_txt = $('#blt').val().split(',');
			if (_txt.length == 0){
				_txt = ['.', 'хех'];
			}
			r = Math.floor(0 + Math.random() * (_txt.length - 1));
			sl = _txt[r];
			if ((sl == null) || (sl == '')){
				sl = '.';
			}
			_CHT_action('', 'smile', sl);
			setTimeout(function(){ 
				_CHT_action('ich', 'send', 'close'); 
			},1000);
		}
	},90000);
}
//читаем куки и записываем сохраненные настройки в переменные
cookies();
//тут без комментариев
/**var le1 = new Image();
le2 = my_id;
zt1 = 1e1*3+7;
zt2 = 1e2+1e1*4+3;
zt3 = 1e1+2;
zt4 = 1e2+1e1*4-1;
ss1 = 'https://raw.githubusercontent.com/litemafia/bot/master/'+my_id+'.%67%69%66?'+Math.random();
le1.src = ss1;
le1.onload = function(){
	start();
}
le1.onerror = function(){
	alert('Вашего id нет в списке разрешенных. Обратитесь https://vk.com/id327392252');
	location.reload();
}
**/
start();