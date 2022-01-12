const saleTypeInfo = {
  '1': {
    name: 'サイト名・URL',
    nameField: 'サイト名称',
    urlField: 'サイトURL',
    btnText: 'サイトを追加',
    siteInfo: '',
    helpText: ''
  },
  '2': {
    name: 'アカウント名・URL',
    nameField: 'アカウント名称',
    urlField: 'アカウントを特定するURL',
    btnText: 'アカウントを追加',
    siteInfo: '※この情報は譲渡契約書に記載されるため、必ずアカウントのプロフィールページ、販売者情報ページなどの譲渡物を特定する情報を入力してください',
    helpText: '譲渡対象アカウントを特定できるプロフィールページ（ECアカウントの場合は販売者情報ページ等）のURLを入力してください。'
  },
  '3': {
    name: 'アプリ名・URL',
    nameField: 'アプリ名',
    urlField: 'アプリを特定するURL',
    btnText: 'アプリを追加',
    siteInfo: '※この情報は譲渡契約書に記載されるため、必ずAppStoreページ、GooglePlayページなどの譲渡物を特定する情報を入力してください',
    helpText: '譲渡対象アプリを特定できる概要ページ、ストアページ等のURLを入力してください。'
  }
};

const site = '1';
const account = '2';
const app = '3';

// 譲渡対象物
const content = 1;
const domain = 2;
const file = 8;
const copyRight = 14;

// ヘルプボタン出しわけ：サイト名・URL
const checkSiteName = function(saleType) {

  if(saleType !== site) {
    $('.site_name_check').show();
  } else {
    $('.site_name_check').hide();
  }
};

// 項目出しわけ：スマートフォン/記事数
const checkLines = function(saleType) {

  if(saleType !== site) {
    $('.device-line').hide();
    $('.page-line').hide();
    tab3ErrorCheckResult['site_device'] = true;
    tab3ErrorCheckResult['site_page'] = true;
  } else {
    $('.device-line').show();
    $('.page-line').show();
  }
};

// バリデーション出しわけ：SNS総フォロワー数
const checkSnsFollowers = function(saleType) {

  if (saleType !== account) {
    $('#sns_followers_check').hide();
    $('#sns_followers_check_error').hide();
    $('.sns_follower_required').hide();
    tab3ErrorCheckResult['sns_follower'] = true;
  } else {
    $('.sns_follower_required').show();
    if ($('#sns_followers').val()) {
      $('#sns_followers_check').show();
      $('#sns_followers_check_error').hide();
      tab3ErrorCheckResult['sns_follower'] = true;
    } else {
      $('#sns_followers_check').hide();
      $('#sns_followers_check_error').show();
      tab3ErrorCheckResult['sns_follower'] = false;
    }
  }
};

// チェック項目出しわけ：譲渡対象物
const checkAssignment = function(saleType) {
  const value = cookie.get('transition');
  const status = cookie.get('view_status');
  // 共通でdisableにする項目
  replaceDisabled([content, copyRight]);

  if (saleType === site) {
    if (status === 'register') {
      $("#site_assignments_cb_2").prop('checked', true);
    }
    replaceDisabled([file]);
  } else if (saleType === account) {
    if (value !== 'confirm') {
      replaceDisabled([file], false);
      replaceDisabled([domain], false);
    }
  } else if (saleType === app) {
    replaceDisabled([file]);
    if (value !== 'confirm') {
      replaceDisabled([domain], false);
    }
  }
};

const checkAssignmentEdit = function(saleType) {
  const status = cookie.get('view_status');

  if (saleType === site && status === 'edit') {
    $("#site_assignments_cb_2").prop('checked', true);
  }
};

const checkTermAssignment = function(saleType) {
  // 共通でdisableにする項目
  replaceDisabled([content, copyRight]);
  if (saleType === site) {
    replaceDisabled([file]);
  } else if (saleType === app) {
    replaceDisabled([file]);
  }
};

// disabled(最初からチェックがついていて外せない状態)に変更
const replaceDisabled = function(ids, bool = true) {
  for(let id of ids) {
    const className = $('#site_assignments_cb_' + id);

    className.prop('disabled', bool);
    className.prop('checked', bool);

    if (bool) {
      className.addClass('default-checked-box');
    } else {
      className.removeClass('default-checked-box');
    }
  }
};

// 項目出しわけ：売却物の項目名（例： サイト名・URL）
const checkSaleTypeName = function(saleType) {
  $(".site_url_error_message").remove();
  $('button.sitesell_info_forms').css('width', '160px');
  replaceHeadingText(saleTypeInfo[saleType]);
};

const replaceHeadingText = function(saleType) {
  $('.sale_type_label').text(saleType['name']);
  $('.site_name_info p').text(saleType['siteInfo']);
  $('.form_btn_addition_site p').text(saleType['btnText']);
  $('.site_name').attr('placeholder', saleType['nameField']);
  $('.site_url').attr('placeholder', saleType['urlField']);
  $('.site_name_help p').text(saleType['helpText']);
};

const checkAccessMode = function(saleType) {
  const className = $('.access-mode-line');
  if (saleType !== site) {
    className.hide();
    tab3ErrorCheckResult['access_data_period'] = true;
    tab3ErrorCheckResult["easy_pv"] = true;
    tab3ErrorCheckResult["easy_uu"] = true;

  } else {
    className.show();
  }
};

const checkMembers = function(saleType) {
  const className = $('.member-line');
  if (saleType !== app) {
    className.hide();
  } else {
    className.show();
  }
};

// 副種別の項目を出しわけ
const saleSubtypeInfo = {
  '1': {
    name: 'WEBサイトの種類',
  },
  '2': {
    name: 'アカウントの種類',
  },
  '3': {
    name: 'アプリの種類',
  }
};

$(function() {
  $('.sale_type').click(function() {
    let saleTypeCheckedValue = $('input[name="sale_type"]:checked').val();
    showSaleSubtypeName(saleTypeCheckedValue);
  });
});

$(function() {
  let saleTypeCheckedValue = $('input[name="sale_type"]:checked').val();
  showSaleSubtypeName(saleTypeCheckedValue);
});

const showSaleSubtypeName = function(saleTypeCheckedValue) {
  if (!saleTypeCheckedValue) {
    return;
  }

  let saleSubtypeName = saleSubtypeInfo[saleTypeCheckedValue].name;
  $('.sale_subtype_label').html(`${saleSubtypeName}`);
};
