$(document).ready( function() {
var b7 = {
    desc:'Получение студентом в течение года, непосредственно предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты проектной деятельности и (или) опытно-конструкторской работы  <br /> <span class="font_width_desc_selectors"> Примечание:</span> В рамках настоящего критерия действует следующее правило оценки нескольких достижений, оцениваемых настоящим критерием: первое достижение оценивается первым числом баллов, указанным в соответствующей достижению ячейке с баллами, второе – вторым числом, третье – третьим, и так далее, шестое и каждое последующее достижение оценивается последним числом баллов, указанным в соответствующей достижению ячейке с баллами. Очередность оценки достижений выбирается таким образом, чтобы она обеспечивала наибольшее возможное количество баллов.'
}
var a7 = {
    desc:'Получение студентом в течение не менее двух следующих друг за другом промежуточных аттестаций, непосредственно предшествующих назначению повышенной государственной академической стипендии, только оценок «отлично». <br /> <span class="font_width_desc_selectors"> Примечание:</span>  В случае наличия в течение года, непосредственно предшествующего назначению повышенной государственной академической стипендии, пересдачи экзамена (зачета) по неуважительной причине повышенная государственная академическая стипендия за достижение студента, соответствующее настоящему критерию, не назначается в соответствии с абз. 2 п. 7 Порядка, утвержденного Приказом Министерства образования и науки Российской Федерации от 27.12.2016 № 1663.'
}
var c7 = {
    desc:'Признание студента победителем или призером международной, всероссийской, ведомственной и (или) региональной олимпиады, конкурса, соревнования, состязания и (или) иного мероприятия, направленных на выявление учебных достижений студентов, проведенных в течение года , непосредственно предшествующего назначению повышенной государственной академической стипендии. <br> <span class="font_width_desc_selectors"> Примечание 1:</span>Настоящим критерием оцениваются только те достижения, которые были получены в период обучения студента в высшем учебном заведении.<br> <span class="font_width_desc_selectors"> Примечание 2:</span> В рамках настоящего критерия действует следующее правило оценки нескольких достижений, оцениваемых настоящим критерием: первое достижение оценивается первым числом баллов, указанным в соответствующей достижению ячейке с баллами, второе – вторым числом, третье – третьим, и так далее, шестое и каждое последующее достижение оценивается последним числом баллов, указанным в соответствующей достижению ячейке с баллами. Очередность оценки достижений выбирается таким образом, чтобы она обеспечивала наибольшее возможное количество баллов. '
}
var a8= {
    desc:"Получение студентом в течение года непосредственно предшествующего назначению повышенной государственной академической стипендии:<br>   • награды (приза) за результаты научно-исследовательской работы, проводимой студентом;<br>  • документа, удостоверяющего исключительное Право студента, на достигнутый им научный (научно-методический, научно-технический, научно- творческий) результат интеллектуальной деятельности (патент, свидетельство);<br> • гранта на выполнение научно-исследовательской работы."
}
var b8= {
    desc:"Наличие у студента публикации в научном (учебно-научном, учебно-методическом) международном, всероссийском, ведомственном, региональном издании и (или) в издании федеральной государственной образовательной организации высшего образования и (или) иной организации в течение года , непосредственно предшествующего назначению повышенной государственной академической стипендии"
}
var a9 = {
    desc:"Систематическое участие ( два и более раза ) студента в течение года , непосредственно предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) общественно значимой деятельности социального, культурного, правозащитного и (или) общественно полезного характера, организуемой федеральной государственной образовательной организацией высшего образования или с ее участием, подтверждаемое документально"
}

var b9 = {
    desc:"Систематическое участие(три и более раза) студента в течение года, непосредственно предшествующего назначению повышенной государственной академической стипендии,в деятельности по информационному обеспечению общественнозначимых мероприятий и (или) общественной жизни федеральной государственной образовательной организации высшего образования, подтверждаемое документально"
}
var a10 = {
    desc :"Получение студентом в течение года , непосредственно предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты культурно-творческой деятельности, осуществленной им в рамках деятельности, проводимой федеральной государственной образовательной организацией высшего образования и (или) иной организацией, в том числе в рамках конкурса, смотра и (или) иного аналогичного международного, всероссийского, ведомственного и (или) регионального мероприятия, подтверждаемое документа"
}
var b10 = {
    desc : "Публичное представление студентом в течение года , непосредственно предшествующего назначению повышенной государственной академической стипендии, созданного им произведения литературы и (или) искусства (литературного произведения, драматического, музыкально-драматического произведения, сценарного произведения, хореографического произведения, пантомимы, музыкального произведения с текстом или без текста, аудиовизуального произведения, произведения живописи, скульптуры, графики, дизайна, графического рассказа, комикса, другого произведения изобразительного искусства, произведения декоративно-прикладного, сценографического искусства, произведения архитектуры, градостроительства, садово-паркового искусства, в том числе в виде проекта, чертежа, изображения, макета, фотографического произведения, произведения, полученного способом, аналогичным фотографии, географической, геологической, другой карты, плана, эскиза, пластического произведения, относящегося к географии, топографии и (или) другим наукам, а также другого произведения), подтверждаемое документально."
}
var  c10 = {
    desc : "Систематическое участие ( два и более раза ) студента в течение года , непосредственно предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) публичной культурно-творческой деятельности воспитательного, пропагандистского характера и (или) иной общественно значимой публичной культурно-творческой деятельности, подтверждаемое документально"
}
var a11 = {
    desc: "Получение студентом в течение года , непосредственно предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты спортивной деятельности, осуществленной им в рамках спортивных международных, всероссийских, ведомственных и (или) региональных мероприятий, проводимых федеральной государственной образовательной организацией высшего образования и (или) иной организации"
}
var b11 = {
    desc: "Систематическое участие ( два и более раза ) студента в течение года , непосредственно предшествующего назначению повышенной государственной академической стипендии, в спортивных мероприятиях воспитательного, пропагандистского характера и (или) иных общественно значимых спортивных мероприятиях, подтверждаемое документально"
}
var c11 = {
    desc : "Выполнение нормативов и требований золотого знака отличия «Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне» (ГТО) соответствующей возрастной группы  на дату назначения повышенной государственной академической стипендии "
}
$(document).on('change', '.btn-file :file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });
  
 
      $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        //   console.log("teste");
          var input_label = $(this).closest('.input-group').find('.file-input-label'),
              log = numFiles > 1 ? numFiles + ' файла выбрано' : label;
  
          if( input_label.length ) {
              input_label.text(log);
          } else {
              if( log ) alert(log);
          }
      });
      $( ".check_a8" ).change(function() {
        if($(this).val() == 0) return false;

        var check_a8 = $(this).val();
        
        if(check_a8 == "Награда (приз) за результаты научно-исследовательской работы, проводимой студентом") 
        {
         $("#a8_first_second_crit").show(); 
         $("#a8_2_crit").hide(); 
         $("#a8_4_crit").hide(); 
         
        }
        if(check_a8 == "Документ, удостоверяющий исключительное право студента на достигнутый им научный результат") 
        {
         $("#a8_first_second_crit").hide(); 
         $("#a8_2_crit").show(); 
         $("#a8_4_crit").hide(); 
        }
        if(check_a8 == "Собственный грант на выполнение научно-исследовательской работы") 
        {
         $("#a8_first_second_crit").hide(); 
         $("#a8_2_crit").hide(); 
         $("#a8_4_crit").show(); 
        }
        if(check_a8 == "Грант на выполнение научно-исследовательской работы в роли исполнителя") 
        {
         $("#a8_first_second_crit").hide(); 
         $("#a8_2_crit").hide();
         $("#a8_4_crit").show(); 
        }

       });
       $(".check_b8_1").change(function(){
     if($(this).val() == 0) return false;
       var check_b8_1 = $(this).val();
        if(check_b8_1 == "Индексируемое Scopus и (или) WoS") 
        {
        $(".b8_1").show(); 
        
        }
        if(check_b8_1 == "Включенное в перечень ВАК") 
        {
         $(".b8_1").hide(); 
  
         
         
        }
        if(check_b8_1 == "Индексируемое РИНЦ") 
        {
         $(".b8_1").hide(); 
       
         
        }
        if(check_b8_1 == "Не индексируемое") 
        {
         $(".b8_1").hide(); 
            
         
        }
    });
    
    $(".check_b8_2").change(function(){
        if($(this).val() == 0) return false;
        var check_b8_2 = $(this).val();
        if(check_b8_2 == "СДнСК") 
        {
            $(".select_8_2_2").show(); 
        }
        else{
            $(".select_8_2_2").hide();
        }
    });
    $(".select_8_2").change(function(){
        if($(this).val() == 0) return false;
        var select_8_2 = $(this).val();
        if(select_8_2 == "ММК") 
        {
            $(".select_8_2_1").show(); 
            $(".select_8_2_2").show();
        }
        else{
            $(".select_8_2_2").hide();
            
            $(".select_8_2_1").hide();
        }
    });
    $(".check_a9").change(function(){
        if($(this).val() == 0) return false;
        var check_a9 = $(this).val();
        if(check_a9 == "Членство в жюри предметной олимпиады") 
        {   $(".select_9a_1_8").hide();
            $(".select_9a_9").show();
            $(".select_9a_10").hide();
            $(".select_9a_11_12").hide();
        }
        else if( check_a9 == "Безвозмездная педагогическая деятельность"){
            $(".select_9a_1_8").hide();
            $(".select_9a_9").hide();
            $(".select_9a_10").show();
            $(".select_9a_11_12").hide();
            
       
        }
        else if(check_a9 == "Проведение (обеспечение проведения) деятельности, направленной на помощь людям"){
            $(".select_9a_1_8").hide();
            $(".select_9a_9").hide();
            $(".select_9a_10").hide();
            $(".select_9a_11_12").show();
            

        }
        else if (check_a9 == "Проведение (обеспечение проведения) деятельности природоохранного характера"){
            $(".select_9a_1_8").hide();
            $(".select_9a_9").hide();
            $(".select_9a_10").hide();
            $(".select_9a_11_12").show();
        }
       
        else {
            $(".select_9a_1_8").show();
            $(".select_9a_9").hide();
            $(".select_9a_10").hide();
            $(".select_9a_11_12").hide();
        }
    });
    
    $(".check_9b").change(function(){
        if($(this).val() == 0) return false;
        var check_9b = $(this).val();
        if(check_9b == "Теле- и (или) радиопрограммы") 
        {   
            $(".select_9b_1").show();
            $(".select_9b_2").hide();
            $(".select_9b_3").hide();
            $(".select_9b_4").hide();
        }
        if(check_9b == "Периодика (печать)") 
        {   $(".select_9b_1").hide();
            $(".select_9b_2").show();
            $(".select_9b_3").hide();
            $(".select_9b_4").hide();
        }
        if(check_9b == "SMM") 
        {   $(".select_9b_1").hide();
            $(".select_9b_2").hide();
            $(".select_9b_3").show();
            $(".select_9b_4").hide();
        }
        if(check_9b == "Сайт") 
        {   $(".select_9b_1").hide();
            $(".select_9b_2").hide();
            $(".select_9b_3").hide();
            $(".select_9b_4").show();
        }
        if(check_9b == "Секретарь научной конференции") {
            $(".select_9b_1").hide();
            $(".select_9b_2").hide();
            $(".select_9b_3").hide();
            $(".select_9b_4").hide();
        }

       

    });
    
    $(".check_b11").change(function(){
        if($(this).val() == 0) return false;
        var check_b11 = $(this).val();
        if(check_b11 == "Соревнования уровня СПбГУ (при условии наличия систематики участия)") 
        {  
            $(".select_b11_1").show();
            $(".select_b11_2").hide();
            $(".select_b11_3").hide();
         }
         if(check_b11 == "Членство в сборной СПбГУ (при условии наличия систематики участия)") 
        {  
            $(".select_b11_1").hide();
            $(".select_b11_2").show();
            $(".select_b11_3").hide();
            
         }
         if(check_b11 == "Любое систематическое участие") 
        {  
            
            $(".select_b11_1").hide();
            $(".select_b11_2").hide();
            $(".select_b11_3").show();
         }
         
         
    });
    //    $( ".check_b8" ).change(function() {
    //     if($(this).val() == 0) return false;
    //     var check_b8 = $(this).val();
    //     if(check_a8 == "Зарубежное изд") 
    //     {


    //     }
    //    });
       
$("#check2").change(function(){
    if($(this).val() == 0) return false;

    var NameObj = $(this).val();

    switch (NameObj) {
        case "a7":
             $("#desc_criterion_first").html(a7.desc);
              
              $(".show_hide_7a_7b").show();
              $(".show_hide_8a").hide();
              $(".show_hide_8b").hide();
              $(".show_hide_a9").hide();
              $(".show_hide_b9").hide();
              $(".show_hide_a10").hide();
              $(".show_hide_b10").hide();
              $(".show_hide_c10").hide();
              $(".show_hide_a11").hide();
              $(".show_hide_b11").hide();
              $(".show_hide_c11").hide();
              break;
        case "b7":
            $("#desc_criterion_first").html(b7.desc);
            $(".show_hide_7a_7b").show();
            $(".show_hide_8a").hide();
            $(".show_hide_8b").hide();
            $(".show_hide_a9").hide();
            $(".show_hide_b9").hide();
            $(".show_hide_a10").hide();
            $(".show_hide_b10").hide();
            $(".show_hide_c10").hide();
            $(".show_hide_a11").hide();
            $(".show_hide_b11").hide();
            $(".show_hide_c11").hide();
            break;
         case "c7":
            $("#desc_criterion_first").html(c7.desc);
            $(".show_hide_7a_7b").show();
            $(".show_hide_8a").hide();
            $(".show_hide_8b").hide();
            $(".show_hide_a9").hide();
            $(".show_hide_b9").hide();
            $(".show_hide_a10").hide();
            $(".show_hide_b10").hide();
            $(".show_hide_c10").hide();
            $(".show_hide_a11").hide();
            $(".show_hide_b11").hide();
            $(".show_hide_c11").hide();
            break;
         case "a8":
            $("#desc_criterion_first").html(a8.desc);
            $(".show_hide_7a_7b").hide();
            $(".show_hide_8a").show();
            $(".show_hide_8b").hide();
            $(".show_hide_a9").hide();
            $(".show_hide_b9").hide();
            $(".show_hide_a10").hide();
            $(".show_hide_b10").hide();
            $(".show_hide_c10").hide();
            $(".show_hide_a11").hide();
            $(".show_hide_b11").hide();
            $(".show_hide_c11").hide();
            break;
        case "b8":
        $("#desc_criterion_first").html(b8.desc);
        $(".show_hide_7a_7b").hide();
        $(".show_hide_8a").hide();
        $(".show_hide_8b").show();
        $(".show_hide_a9").hide();
        $(".show_hide_b9").hide();
        $(".show_hide_a10").hide();
        $(".show_hide_b10").hide();
        $(".show_hide_c10").hide();
        $(".show_hide_a11").hide();
        $(".show_hide_b11").hide();
        $(".show_hide_c11").hide();
        break;
        case "a9":
        $("#desc_criterion_first").html(a9.desc);
        $(".show_hide_7a_7b").hide();
        $(".show_hide_8a").hide();
        $(".show_hide_8b").hide();
        $(".show_hide_a9").show();
        $(".show_hide_b9").hide();
        $(".show_hide_a10").hide();
        $(".show_hide_b10").hide();
        $(".show_hide_c10").hide();
        $(".show_hide_a11").hide();
        $(".show_hide_b11").hide();
        $(".show_hide_c11").hide();
        break;
        case "b9":
        $("#desc_criterion_first").html(b9.desc);
        $(".show_hide_7a_7b").hide();
        $(".show_hide_8a").hide();
        $(".show_hide_8b").hide();
        $(".show_hide_a9").hide();
        $(".show_hide_b9").show();
        $(".show_hide_a10").hide();
        $(".show_hide_b10").hide();
        $(".show_hide_c10").hide();
        $(".show_hide_a11").hide();
        $(".show_hide_b11").hide();
        $(".show_hide_c11").hide();
        break;
        case "a10":
        $("#desc_criterion_first").html(a10.desc);
        $(".show_hide_7a_7b").hide();
        $(".show_hide_8a").hide();
        $(".show_hide_8b").hide();
        $(".show_hide_a9").hide();
        $(".show_hide_b9").hide();
        $(".show_hide_a10").show();
        $(".show_hide_b10").hide();
        $(".show_hide_c10").hide();
        $(".show_hide_a11").hide();
        $(".show_hide_b11").hide();
        $(".show_hide_c11").hide();
        break;
        case "b10":
        $("#desc_criterion_first").html(b10.desc);
        $(".show_hide_7a_7b").hide();
        $(".show_hide_8a").hide();
        $(".show_hide_8b").hide();
        $(".show_hide_a9").hide();
        $(".show_hide_b9").hide();
        $(".show_hide_a10").hide();
        $(".show_hide_b10").show();
        $(".show_hide_c10").hide();
        $(".show_hide_a11").hide();
        $(".show_hide_b11").hide();
        $(".show_hide_c11").hide();
        break;
        case "c10":
        $("#desc_criterion_first").html(c10.desc);
        $(".show_hide_7a_7b").hide();
        $(".show_hide_8a").hide();
        $(".show_hide_8b").hide();
        $(".show_hide_a9").hide();
        $(".show_hide_b9").hide();
        $(".show_hide_a10").hide();
        $(".show_hide_b10").hide();
        $(".show_hide_c10").show();
        $(".show_hide_a11").hide();
        $(".show_hide_b11").hide();
        $(".show_hide_c11").hide();
        break;
        case "a11":
        $("#desc_criterion_first").html(a11.desc);
        $(".show_hide_7a_7b").hide();
        $(".show_hide_8a").hide();
        $(".show_hide_8b").hide();
        $(".show_hide_a9").hide();
        $(".show_hide_b9").hide();
        $(".show_hide_a10").hide();
        $(".show_hide_b10").hide();
        $(".show_hide_c10").hide();
        $(".show_hide_a11").show();
        $(".show_hide_b11").hide();
        $(".show_hide_c11").hide();
        break;
        case "b11":
        $("#desc_criterion_first").html(b11.desc);
        $(".show_hide_7a_7b").hide();
        $(".show_hide_8a").hide();
        $(".show_hide_8b").hide();
        $(".show_hide_a9").hide();
        $(".show_hide_b9").hide();
        $(".show_hide_a10").hide();
        $(".show_hide_b10").hide();
        $(".show_hide_c10").hide();
        $(".show_hide_a11").hide();
        $(".show_hide_b11").show();
        $(".show_hide_c11").hide();
        break;
        case "c11":
        $("#desc_criterion_first").html(c11.desc);
        $(".show_hide_7a_7b").hide();
        $(".show_hide_8a").hide();
        $(".show_hide_8b").hide();
        $(".show_hide_a9").hide();
        $(".show_hide_b9").hide();
        $(".show_hide_a10").hide();
        $(".show_hide_b10").hide();
        $(".show_hide_c10").hide();
        $(".show_hide_a11").hide();
        $(".show_hide_b11").hide();
        $(".show_hide_c11").show();
        break;
        
}





});
// $(".info_dspo").change(function(){
//     if($(this).val() == 0) return false;
//     if($(this).val() == "ДСПО") $(".desc_criterion_dspo").html("ДСПО - достижения, соответствующие профилю обучения ");
//     if($(this).val() == "ДнСПО") $(".desc_criterion_dspo").html("ДнСПО - достижения, не соответствующие профилю обучения ");

// });
});

