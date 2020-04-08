/**
	퍼블 사용 js
**/

$(function () {
  Size_pc()
  tab()

  // 스크롤 박스 안에 목록 클릭 event
  $('.scroll_box li > a').on('click', function (e) {
    e.preventDefault()
    if ($(this).is('.active')) {
      $(this).removeClass('active')
    } else {
      $(this).parent().parent().find('a').removeClass('active')
      $(this).addClass('active')
    }
  })

  // 고객구분(개인/기업)에 따라 입력정보 change
  $('.sel_cust_ty').change(function () {
    // 값이 '개인', '외국개인' 일경우
    if ($(this).val() == 'individual') {
      if ($('.cust_ty_list > .busi_ty').is('.active')) {
        $('.cust_ty_list > li').removeClass('active')
        $('.cust_ty_list > .indivi_ty').addClass('active')
      }
      $('.busi_sec').removeClass('active')
    } else {
      // 값이 '개인사업자', '법인', '외국법인', '공공기관' 일경우
      if ($('.cust_ty_list > .indivi_ty').is('.active')) {
        $('.cust_ty_list > li').removeClass('active')
        $('.cust_ty_list > .busi_ty').addClass('active')
      }
      $('.busi_sec').addClass('active')
    }
  })

  // 납부방법(카드이체/자동이체)에 따라 입력정보 change
  $('.sel_transfer').change(function () {
    // 값이 '카드일체' 일경우
    if ($(this).val() == 'card') {
      if ($('.transfer_ty_list > .auto_ty').is('.active')) {
        $('.transfer_ty_list > li').removeClass('active')
        $('.transfer_ty_list > .card_ty').addClass('active')
      }
    } else {
      // 값이 '자동일체' 일경우
      if ($('.transfer_ty_list > .card_ty').is('.active')) {
        $('.transfer_ty_list > li').removeClass('active')
        $('.transfer_ty_list > .auto_ty').addClass('active')
      }
    }
  })

  // 0406 : 수정
  // 아코디언
  $('.arco_list > dt > a').on('click', function (e) {
    e.preventDefault()
    if ($(this).parent().is('.close')) {
      $(this).parent().removeClass('close')
      $(this).parent().next().stop().slideDown('500')
    } else {
      $(this).parent().addClass('close')
      $(this).parent().next().stop().slideUp('500')
    }
  })
})

function tab() {
  var tabindex
  var tab_cnt_index

  tabEvent('#info_tab')
  tabEvent('#status_tab')

  function tabEvent(index) {
    var subj = index + '.tab > li > a'
    $(subj).on('click', function () {
      if (!$(this).parent().is('.tab_more')) {
        $(subj).removeClass('active')
        $(this).addClass('active')
        tabindex = $(this).parent().index()
        tab_cnt_index = $(this)
          .parent()
          .parent()
          .siblings('.box_cnts')
          .find('.tab_cnt_list > li.active')
          .index()

        if (tabindex != tab_cnt_index) {
          $(this)
            .parent()
            .parent()
            .siblings('.box_cnts')
            .find('.tab_cnt_list > li')
            .removeClass('active')
            .eq(tabindex)
            .addClass('active')
        }
      }
    })
  }
}

function Size_pc() {
  // PC용
  $('.dep2_bg').height($('aside').height())

  $('aside > ul > li > a').on('click', function () {
    $('.dep3').stop().slideUp('500')

    if (!$(this).is('.active')) {
      $('aside > ul > li > a, .dep2 > ul > li > a').removeClass('active')
      $(this).addClass('active')
      $('.dep2_bg, .dep2').hide()
      if ($(this).siblings('.dep2').length > 0) {
        $('.dep2_bg').show('slide', { direction: 'left' }, 500)
        $(this).siblings('.dep2').show('slide', { direction: 'left' }, 500)
      }
    } else {
      $('aside > ul > li > a, .dep2 > ul > li > a').removeClass('active')
      $('.dep2_bg, .dep2').hide('slide', { direction: 'left' }, 500)
    }
  })

  $('.dep2 > ul > li > a').on('click', function () {
    $('.dep3').stop().slideUp('500')
    if (!$(this).is('.active')) {
      $('.dep2 > ul > li > a').removeClass('active')
      if ($(this).siblings('.dep3').length > 0) {
        $(this).addClass('active')
        $(this).siblings('.dep3').stop().slideDown('500')
      }
    } else {
      $('.dep2 > ul > li > a').removeClass('active')
      $('.dep3').stop().slideUp('500')
    }
  })
}

function Size_mo() {
  // 모바일용
}

$(window).load(function () {
  // 처음 페이지 호출 시
  var screen_size = $(window).width()
})

$(window).resize(function () {
  // 페이지 리사이즈 시
  var screen_size = $(window).width()
})
