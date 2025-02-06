ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([99.271667, 11.408196, 99.925337, 11.729684]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'รวมอ.ทับสะแก',
                interactive: true,
    title: 'รวมอ.ทับสะแก<br />\
    <img src="styles/legend/_1_0.png" /> 265 Cafe & Restaurant<br />\
    <img src="styles/legend/_1_1.png" /> กลุ่มทอผ้ากี่กระตุก เขาล้าน<br />\
    <img src="styles/legend/_1_2.png" /> กลุ่มวิสาหกิจชุมชนท่องเที่ยวชุมชนบ้านทุ่งประดู่ <br />\
    <img src="styles/legend/_1_3.png" /> กลุ่มวิสาหกิจบ้านห้วยเจริญ<br />\
    <img src="styles/legend/_1_4.png" /> การะเกด Coffee & Tea<br />\
    <img src="styles/legend/_1_5.png" /> แก้วกาแฟ เบเกอร์รี่ แอนด์ คอฟฟี่ บาร์<br />\
    <img src="styles/legend/_1_6.png" /> ขนมจีนทุ่งประดู่<br />\
    <img src="styles/legend/_1_7.png" /> ครัวคุณใหญ่ ปั้มปตท ณรงค์95<br />\
    <img src="styles/legend/_1_8.png" /> ครัวชมคลื่น<br />\
    <img src="styles/legend/_1_9.png" /> ครัวชาวประมง <br />\
    <img src="styles/legend/_1_10.png" /> ครัวป้ามา<br />\
    <img src="styles/legend/_1_11.png" /> ครัวมะปรางเปรี้ยว<br />\
    <img src="styles/legend/_1_12.png" /> ครัวรุ่งตะวัน<br />\
    <img src="styles/legend/_1_13.png" /> เจ๊ติ๋มครัวใต้ ห้วยยาง<br />\
    <img src="styles/legend/_1_14.png" /> ชุมชนท่องเที่ยวบ้านหินเทิน<br />\
    <img src="styles/legend/_1_15.png" /> ชุลมุน Coffee Chaos coffee<br />\
    <img src="styles/legend/_1_16.png" /> เตี๋ยวมั้ยว๊ะ<br />\
    <img src="styles/legend/_1_17.png" /> ทุ่งยาวคาเฟ่<br />\
    <img src="styles/legend/_1_18.png" /> นมหน้าฟาร์ม-ลานนมเนินดินแดง<br />\
    <img src="styles/legend/_1_19.png" /> บังแป๊ะ ฟาร์ม<br />\
    <img src="styles/legend/_1_20.png" /> โบสถ์ไม้ตาล<br />\
    <img src="styles/legend/_1_21.png" /> ป่าสนเหมืองแร่<br />\
    <img src="styles/legend/_1_22.png" /> เมมโมรี่ คาเฟ่แคมป์ (memory cafe camp)<br />\
    <img src="styles/legend/_1_23.png" /> ร้าน "นังออ" coffee @ดอนทราย<br />\
    <img src="styles/legend/_1_24.png" /> ร้านก๋วยเตี๋ยวเจ้เป็ด<br />\
    <img src="styles/legend/_1_25.png" /> ร้านก๋วยเตี๋ยวดู๋ดี๋ บ้านแสงอรุณ<br />\
    <img src="styles/legend/_1_26.png" /> ร้านกาแฟ อินทนิล (Inthanin Coffee)<br />\
    <img src="styles/legend/_1_27.png" /> ร้านเก๋กลางซอย<br />\
    <img src="styles/legend/_1_28.png" /> ร้านครัวกันเอง @ทับสะแก<br />\
    <img src="styles/legend/_1_29.png" /> ร้านครัวหัวคันนา<br />\
    <img src="styles/legend/_1_30.png" /> ร้านเจ๊รวย อร่อยเลิศ (ฝั่งขาลงใต้)<br />\
    <img src="styles/legend/_1_31.png" /> ร้านเจ๊เล็ก อาหารตามสั่ง (หน้าวัดเขาปอ)<br />\
    <img src="styles/legend/_1_32.png" /> ร้านเจ้อรเป็ดพะโล้<br />\
    <img src="styles/legend/_1_33.png" /> ร้านไต๋วีซีฟู้ด <br />\
    <img src="styles/legend/_1_34.png" /> ร้านป้ารุณ? อาหาร?และเครื่องดื่ม<br />\
    <img src="styles/legend/_1_35.png" /> ร้านลับทุ่งพุฒิ<br />\
    <img src="styles/legend/_1_36.png" /> ร้านลาบก้อยสารคาม/อาหารตามสั่ง<br />\
    <img src="styles/legend/_1_37.png" /> ร้านสองพี่น้อง Rose Garben 1 Coffee & Drink Breakfast<br />\
    <img src="styles/legend/_1_38.png" /> ร้านอาหาร จ. จาน<br />\
    <img src="styles/legend/_1_39.png" /> ร้านอาหารกบซีฟู้ด<br />\
    <img src="styles/legend/_1_40.png" /> ร้านอาหารคุณต้น<br />\
    <img src="styles/legend/_1_41.png" /> ร้านอาหารซ้งทับสะแก<br />\
    <img src="styles/legend/_1_42.png" /> ร้านอาหารเดอะบีช ทับสะแก<br />\
    <img src="styles/legend/_1_43.png" /> ร้านอาหารนกเล็ก<br />\
    <img src="styles/legend/_1_44.png" /> ร้านอาหารบ้านกฤษณา<br />\
    <img src="styles/legend/_1_45.png" /> ร้านอาหารบ้านประจวบเหมาะ<br />\
    <img src="styles/legend/_1_46.png" /> ร้านอาหารยายเมียง<br />\
    <img src="styles/legend/_1_47.png" /> ลองดู คอฟฟี่<br />\
    <img src="styles/legend/_1_48.png" /> วัดถ้ำจันทร์<br />\
    <img src="styles/legend/_1_49.png" /> วัดทับสะแก<br />\
    <img src="styles/legend/_1_50.png" /> วัดทุ่งประดู่<br />\
    <img src="styles/legend/_1_51.png" /> วัดนันทาวราราม ประจวบคีรีขันธ์<br />\
    <img src="styles/legend/_1_52.png" /> วัดนาหูกวาง<br />\
    <img src="styles/legend/_1_53.png" /> วัดบ้านทุ่งเคล็ด<br />\
    <img src="styles/legend/_1_54.png" /> วัดประชาสนธิ<br />\
    <img src="styles/legend/_1_55.png" /> วัดป่าธรรมธารา<br />\
    <img src="styles/legend/_1_56.png" /> วัดแม่พระฟาติมา <br />\
    <img src="styles/legend/_1_57.png" /> วัดไร่ใน<br />\
    <img src="styles/legend/_1_58.png" /> วัดวังยาง<br />\
    <img src="styles/legend/_1_59.png" /> วัดห้วยยาง<br />\
    <img src="styles/legend/_1_60.png" /> วัดห้วยลึก<br />\
    <img src="styles/legend/_1_61.png" /> วัดอ่างทอง<br />\
    <img src="styles/legend/_1_62.png" /> วัดอ่างสุวรรณ (วัดหนองหอย)<br />\
    <img src="styles/legend/_1_63.png" /> วิสาหกิจชุมชน บ้านสวนอินทรีย์อยู่อย่างพอเพียง<br />\
    <img src="styles/legend/_1_64.png" /> วิสาหกิจชุมชน ผลิตภัณฑ์จากมะพร้าวทับสะแก พีซีพีโคโค่นัท<br />\
    <img src="styles/legend/_1_65.png" /> วิสาหกิจชุมชนกลุ่มแม่บ้านเกษตรกรพิกุลทอง<br />\
    <img src="styles/legend/_1_66.png" /> วิสาหกิจชุมชนจั่นมะพร้าวทับสะแก<br />\
    <img src="styles/legend/_1_67.png" /> วิสาหกิจชุมชนท่องเที่ยวเชิงเกษตรและโฮมสเตย์ โดย ชุมชนบ้านห้วยยาง<br />\
    <img src="styles/legend/_1_68.png" /> วิสาหกิจชุมชนน้ำมันมะพร้าวประดู่ลาย ทับสะแก ประจวบคีรีขันธ์<br />\
    <img src="styles/legend/_1_69.png" /> ศาลเจ้าพ่อซังเขาขวาง<br />\
    <img src="styles/legend/_1_70.png" /> สวนเกษตรอินทรีออแกนิคมะพร้าว<br />\
    <img src="styles/legend/_1_71.png" /> สะพานปลาทับสะแก<br />\
    <img src="styles/legend/_1_72.png" /> หน่วยพิทักษ์อุทยานแห่งชาติ<br />\
    <img src="styles/legend/_1_73.png" /> หยอดใจยามว่าง<br />\
    <img src="styles/legend/_1_74.png" /> หลวงน้อยแกงใต้<br />\
    <img src="styles/legend/_1_75.png" /> หาดทับสะแก<br />\
    <img src="styles/legend/_1_76.png" /> หาดลับ โคกตาหอม<br />\
    <img src="styles/legend/_1_77.png" /> หาดแสงอรุณ<br />\
    <img src="styles/legend/_1_78.png" /> หาดแหลมกุ่ม<br />\
    <img src="styles/legend/_1_79.png" /> อ่างเก็บน้ำคลองจะกระ<br />\
    <img src="styles/legend/_1_80.png" /> อ่างเก็บน้ำคลองช่องจม<br />\
    <img src="styles/legend/_1_81.png" /> อุทยานแห่งชาติน้ำตกห้วยยาง<br />\
    <img src="styles/legend/_1_82.png" /> อุทยานแห่งชาติหาดวนกร<br />\
    <img src="styles/legend/_1_83.png" /> All‘s day cafe & restaurant<br />\
    <img src="styles/legend/_1_84.png" /> Berry Coffee<br />\
    <img src="styles/legend/_1_85.png" /> BOBAHOLIC<br />\
    <img src="styles/legend/_1_86.png" /> Cafe\' De Field<br />\
    <img src="styles/legend/_1_87.png" /> Chaichane restaurant<br />\
    <img src="styles/legend/_1_88.png" /> Chill Cafe’ Haus<br />\
    <img src="styles/legend/_1_89.png" /> Chong-cha cafe\' by nabtang<br />\
    <img src="styles/legend/_1_90.png" /> Cozy Gafe’ (ร้านกาแฟ โคซี่ กาฟี่)<br />\
    <img src="styles/legend/_1_91.png" /> Crazy Beach Camping (CBC by CCD)<br />\
    <img src="styles/legend/_1_92.png" /> Dib cafe and eatery<br />\
    <img src="styles/legend/_1_93.png" /> Exactly Coffee Thabsakae<br />\
    <img src="styles/legend/_1_94.png" /> FARMNISTA? FARM? CAF?<br />\
    <img src="styles/legend/_1_95.png" /> Hashtag21<br />\
    <img src="styles/legend/_1_96.png" /> Hello mango caf?<br />\
    <img src="styles/legend/_1_97.png" /> Ka-Num Home Cafe<br />\
    <img src="styles/legend/_1_98.png" /> Koh Jan Coffee (เกาะจาน คอฟฟี่)<br />\
    <img src="styles/legend/_1_99.png" /> Mai\'Cafe<br />\
    <img src="styles/legend/_1_100.png" /> MmBar 489<br />\
    <img src="styles/legend/_1_101.png" /> N\'PLOY<br />\
    <img src="styles/legend/_1_102.png" /> OCTORY CAFE & RESTAURANT<br />\
    <img src="styles/legend/_1_103.png" /> Pisces caf?<br />\
    <img src="styles/legend/_1_104.png" /> Port 44/5 Caf?<br />\
    <img src="styles/legend/_1_105.png" /> Station666 ตำเมืองเลย ข้าวแกง กาแฟสด<br />\
    <img src="styles/legend/_1_106.png" /> Sugarplum By Joy Thap Sakae<br />\
    <img src="styles/legend/_1_107.png" /> Sunlight Dining Room<br />\
    <img src="styles/legend/_1_108.png" /> Surin Beach Resort & Restaurant HuayYang<br />\
    <img src="styles/legend/_1_109.png" /> ThankYou Cafe<br />\
    <img src="styles/legend/_1_110.png" /> The Tree cafe & Camp<br />\
    <img src="styles/legend/_1_111.png" /> ZMO COCOA    <br />\
    <img src="styles/legend/_1_112.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1];
lyr__1.set('fieldAliases', {'ลำดับ': 'ลำดับ', 'ชื่อสถานที่': 'ชื่อสถานที่', 'ละติจูด': 'ละติจูด', 'ลองจิจูด': 'ลองจิจูด', 'ประเภทสถานที่': 'ประเภทสถานที่', 'ที่อยู่': 'ที่อยู่', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'Facebook': 'Facebook', 'ภาพสถานที่': 'ภาพสถานที่', });
lyr__1.set('fieldImages', {'ลำดับ': 'Range', 'ชื่อสถานที่': 'TextEdit', 'ละติจูด': 'TextEdit', 'ลองจิจูด': 'TextEdit', 'ประเภทสถานที่': 'TextEdit', 'ที่อยู่': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'Facebook': 'TextEdit', 'ภาพสถานที่': 'TextEdit', });
lyr__1.set('fieldLabels', {'ลำดับ': 'hidden field', 'ชื่อสถานที่': 'header label - always visible', 'ละติจูด': 'hidden field', 'ลองจิจูด': 'hidden field', 'ประเภทสถานที่': 'header label - always visible', 'ที่อยู่': 'header label - always visible', 'ตำบล': 'header label - always visible', 'อำเภอ': 'header label - always visible', 'จังหวัด': 'header label - always visible', 'Facebook': 'header label - always visible', 'ภาพสถานที่': 'header label - always visible', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});