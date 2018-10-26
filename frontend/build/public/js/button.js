function f() {
  var res = {};
  res.type = $("#check1").val();
  res.crit = $("#check2").val();


  if ($("#7a_7b")[0].style.display != "none") {
    res.level = $("#level_1").val();
    res.winner = $("#winner_1").val();
    res.team = $("#team_1").val();
    res.dspo = $("#dspo_1").val();
    res.o4no = $("#o4no_1").val();
  }


  if ($("#8a")[0].style.display != "none") {
    res.reward = $("#reward_1").val();
    if ($("#a8_first_second_crit")[0].style.display != "none") {
      res.winner = $("#winner_2").val();
      res.team = $("#team_2").val();
      res.dspo = $("#dspo_2_1").val();
    }
    if ($("#a8_2_crit")[0].style.display != "none") {
      res.indiv = $("#indiv_2").val();
      res.dspo = $("#dspo_2_2").val();
    }
    if ($("#a8_4_crit")[0].style.display != "none") {
      res.dspo = $("#dspo_2_3").val();
    }

  }


  if ($(".show_hide_8b")[0].style.display != "none") {
    res.izd = $("#izd").val();
    if ($(".b8")[0].style.display != "none") {
      res.index = $("#index").val();
    }
    if ($(".b8_1")[0].style.display != "none") {
      res.index_type = $("#index_type").val();
    }
    if ($("#8_2_1")[0].style.display != "none") {
      res.sdnsk = $("#sdnsk").val();
    }
    if ($("#8_2_2")[0].style.display != "none") {
      res.ud = $("#ud").val();
    }
  }


  if ($(".show_hide_a9")[0].style.display != "none") {
    res.organise = $("#organise").val();
    if ($(".select_9a_1_8")[0].style.display != "none") {
      res.level = $("#level_a9_1").val();
      res.cycle = $("#cycle_a9_1").val();
      res.lead =  $("#lead_a9_1").val();
    }
    if ($(".select_9a_9")[0].style.display != "none") {
      res.o4no = $("#o4no_a9_1").val();
    }
    if ($(".select_9a_10")[0].style.display != "none") {
      res.dspo = $("#dspo_a9_1").val();
      res.student = $("#student_a9_1").val();

    }
    if ($(".select_9a_11_12")[0].style.display != "none") {
      res.lead = $("#lead_a9_2").val();
    }
  }


  if ($(".show_hide_b9")[0].style.display != "none") {
    res.tv = $("#tv_b9_1").val();
    if ($(".select_9b_1")[0].style.display != "none") {
      res.role = $("#role_9b_1").val();
    }
    if ($(".select_9b_2")[0].style.display != "none") {
      res.role = $("#role_9b_2").val();
    }
    if ($(".select_9b_3")[0].style.display != "none") {
        res.role = $("#role_9b_3").val();
    }
    if ($(".select_9b_4")[0].style.display != "none") {
        res.role = $("#role_9b_4").val();
    }
  }
  console.log(res);
}
