let windowScrollTop = 0;
let windowHeight = 0;

// 収支棒グラフ
let sectionDetailInEx = {};
let isRenderDetailInEx = false;

// Google Analytics 12ヶ月PV/UU
let sectionDetailGa_PVUU = {};
let isRenderDetailGa_PVUU = false;

// Google Analytics 12ヶ月チャネル
let sectionDetailGa_Channel = {};
let isRenderDetailGa_Channel = false;

$(function () {
  $(window).on('load scroll', function () {
    windowHeight = $(window).height();
    windowScrollTop = $(window).scrollTop();

    if ($("section#detail_in_ex")[0]) {
      let sectionDetailInEx = $("section#detail_in_ex");
      let sectionDetailInExTopPos = sectionDetailInEx.offset().top - windowHeight;
      if (windowScrollTop > sectionDetailInExTopPos && isRenderDetailInEx == false) {
        if (0 < $("#detail_in_ex_content_graph").length) {
          renderInExChart();
        }
        isRenderDetailInEx = true;
      }
    }

    if ($("section#detail_ga div#detail_ga_month")[0]) {
      let sectionDetailGa_PVUU = $("section#detail_ga div#detail_ga_month");
      let sectionDetailGA_PVUUTopPos = sectionDetailGa_PVUU.offset().top - windowHeight;
      if (windowScrollTop > sectionDetailGA_PVUUTopPos && isRenderDetailGa_PVUU == false) {
        renderDetailGAPvUu();
        isRenderDetailGa_PVUU = true;
      }
    }

    if ($("section#detail_ga div#detail_ga_month")[0]) {
      let sectionDetailGa_Channel = $("section#detail_ga div#detail_ga_month");
      let sectionDetailGA_ChannelTopPos = sectionDetailGa_Channel.offset().top - windowHeight;
      let detailGAMoctx2 = document.getElementsByClassName("detail_ga_month_graph2");
      if (windowScrollTop > sectionDetailGA_ChannelTopPos && isRenderDetailGa_Channel == false && detailGAMoctx2.length > 0) {
        renderDetailGAChannel();
        isRenderDetailGa_Channel = true;
      }
    }
  });
});
