<template>
  <div>
    <div
      class="sweet-overlay"
      tabindex="-1"
      style=" display: block;opacity: 0.4;"
    ></div>
    <div
      class="sweet-alert showSweetAlert visible"
      data-custom-class=""
      data-has-cancel-button="false"
      data-has-confirm-button="true"
      data-allow-outside-click="false"
      data-has-done-function="false"
      data-animation="pop"
      data-timer="null"
      style="display: block; margin-top: -128px;"
    >
      <div class="sa-icon sa-error" style="display: none;">
        <span class="sa-x-mark">
          <span class="sa-line sa-left"></span>
          <span class="sa-line sa-right"></span>
        </span>
      </div>
      <div class="sa-icon sa-warning" style="display: none;">
        <span class="sa-body"></span>
        <span class="sa-dot"></span>
      </div>
      <div class="sa-icon sa-info" style="display: none;"></div>
      <div class="sa-icon sa-success" style="display: none;">
        <span class="sa-line sa-tip"></span>
        <span class="sa-line sa-long"></span>

        <div class="sa-placeholder"></div>
        <div class="sa-fix"></div>
      </div>
      <div class="sa-icon sa-custom" style="display: none;"></div>
      <h2>{{ title }}</h2>
      <p style="display: block;white-space: pre;content: '\A';">{{
        content
      }}</p>
      <fieldset>
        <input type="text" tabindex="3" placeholder="" />
        <div class="sa-input-error"></div>
      </fieldset>
      <div class="sa-error-container">
        <div class="icon">!</div>
        <p>Not valid!</p>
      </div>
      <div class="sa-button-container">
        <button :class="this.type" tabindex="1" @click="$close(true)"
          >확인</button
        >
        <button
          v-if="this.type === 'confirm'"
          class="cancel"
          tabindex="1"
          @click="$close(false)"
          >취소</button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      type: 'success',
    }
  },
  created() {
    const propsData = this.$options.propsData
    if (propsData && propsData.arguments.length) {
      this.title = propsData.arguments[0]
      this.content = propsData.arguments[1]
      this.type = propsData.arguments[2]
    }
  },
}
</script>

<style>
body.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

.sweet-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: none;
  background-color: black;

  /* IE8 */
  background-color: rgba(0, 0, 0, 0.4);

  /* IE8 */
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
}

.sweet-alert {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99999;
  display: none;
  width: 478px;
  padding: 17px;
  margin-top: -200px;
  margin-left: -256px;
  overflow: hidden;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: white;
  border-radius: 5px;
}
@media all and (max-width: 540px) {
  .sweet-alert {
    right: 15px;
    left: 15px;
    width: auto;
    margin-right: 0;
    margin-left: 0;
  }
}
.sweet-alert h2 {
  position: relative;
  display: block;
  padding: 0;
  margin: 25px 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
  color: #575757;
  text-align: center;
  text-transform: none;
}
.sweet-alert p {
  position: relative;
  float: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  color: #797979;
  text-align: center;
  text-align: inherit;
}
.sweet-alert fieldset {
  position: relative;
  border: none;
}
.sweet-alert .sa-error-container {
  max-height: 0;
  padding: 0 10px;
  margin-right: -17px;
  margin-left: -17px;
  overflow: hidden;
  background-color: #f1f1f1;
  transition: padding 0.15s, max-height 0.15s;
  webkit-transition: padding 0.15s, max-height 0.15s;
}
.sweet-alert .sa-error-container.show {
  max-height: 100px;
  padding: 10px 0;
  transition: padding 0.25s, max-height 0.25s;
  webkit-transition: padding 0.2s, max-height 0.2s;
}
.sweet-alert .sa-error-container .icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 3px;
  line-height: 24px;
  color: white;
  text-align: center;
  background-color: #ea7d7d;
  border-radius: 50%;
}
.sweet-alert .sa-error-container p {
  display: inline-block;
}
.sweet-alert .sa-input-error {
  position: absolute;
  top: 29px;
  right: 26px;
  width: 20px;
  height: 20px;
  opacity: 0;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
.sweet-alert .sa-input-error::before,
.sweet-alert .sa-input-error::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 6px;
  margin-top: -4px;
  margin-left: -9px;
  content: '';
  background-color: #f06e57;
  border-radius: 3px;
}
.sweet-alert .sa-input-error::before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.sweet-alert .sa-input-error::after {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.sweet-alert .sa-input-error.show {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.sweet-alert input {
  box-sizing: border-box;
  display: none;
  width: 100%;
  height: 43px;
  padding: 0 12px;
  margin-top: 10px;
  margin-bottom: 17px;
  font-size: 18px;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.sweet-alert input:focus {
  border: 1px solid #b4dbed;
  outline: none;
  box-shadow: 0 0 3px #c4e6f5;
}
.sweet-alert input:focus::-moz-placeholder {
  opacity: 0.5;
  transition: opacity 0.3s 0.03s ease;
}
.sweet-alert input:focus:-ms-input-placeholder {
  opacity: 0.5;
  transition: opacity 0.3s 0.03s ease;
}
.sweet-alert input:focus::-webkit-input-placeholder {
  opacity: 0.5;
  transition: opacity 0.3s 0.03s ease;
}
.sweet-alert input::-moz-placeholder {
  color: #bdbdbd;
}
.sweet-alert input:-ms-input-placeholder {
  color: #bdbdbd;
}
.sweet-alert input::-webkit-input-placeholder {
  color: #bdbdbd;
}
.sweet-alert.show-input input {
  display: block;
}
.sweet-alert button {
  padding: 10px 32px;
  margin: 26px 5px 0 5px;
  font-size: 17px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  background-color: #aedef4;
  border: none;
  -webkit-border-radius: 4px;
  border-radius: 5px;
  box-shadow: none;
}
.sweet-alert button:focus {
  outline: none;
  box-shadow: 0 0 2px rgba(128, 179, 235, 0.5),
    inset 0 0 0 1px rgba(0, 0, 0, 0.05);
}
.sweet-alert button:hover {
  background-color: #a1d9f2;
}
.sweet-alert button:active {
  background-color: #81ccee;
}
.sweet-alert button.cancel {
  background-color: #d0d0d0;
}
.sweet-alert button.cancel:hover {
  background-color: #c8c8c8;
}
.sweet-alert button.cancel:active {
  background-color: #b6b6b6;
}
.sweet-alert button.cancel:focus {
  box-shadow: rgba(197, 205, 211, 0.8) 0 0 2px,
    rgba(0, 0, 0, 0.0470588) 0 0 0 1px inset !important;
}
.sweet-alert button::-moz-focus-inner {
  border: 0;
}
.sweet-alert[data-has-cancel-button='false'] button {
  box-shadow: none !important;
}
.sweet-alert[data-has-confirm-button='false'][data-has-cancel-button='false'] {
  padding-bottom: 40px;
}
.sweet-alert .sa-icon {
  position: relative;
  box-sizing: content-box;
  width: 80px;
  height: 80px;
  padding: 0;
  margin: 20px auto;
  border: 4px solid gray;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  border-radius: 50%;
}
.sweet-alert .sa-icon.sa-error {
  border-color: #f27474;
}
.sweet-alert .sa-icon.sa-error .sa-x-mark {
  position: relative;
  display: block;
}
.sweet-alert .sa-icon.sa-error .sa-line {
  position: absolute;
  top: 37px;
  display: block;
  width: 47px;
  height: 5px;
  background-color: #f27474;
  border-radius: 2px;
}
.sweet-alert .sa-icon.sa-error .sa-line.sa-left {
  left: 17px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.sweet-alert .sa-icon.sa-error .sa-line.sa-right {
  right: 16px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.sweet-alert .sa-icon.sa-warning {
  border-color: #f8bb86;
}
.sweet-alert .sa-icon.sa-warning .sa-body {
  position: absolute;
  top: 10px;
  left: 50%;
  width: 5px;
  height: 47px;
  margin-left: -2px;
  background-color: #f8bb86;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
.sweet-alert .sa-icon.sa-warning .sa-dot {
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 7px;
  height: 7px;
  margin-left: -3px;
  background-color: #f8bb86;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.sweet-alert .sa-icon.sa-info {
  border-color: #c9dae1;
}
.sweet-alert .sa-icon.sa-info::before {
  position: absolute;
  bottom: 17px;
  left: 50%;
  width: 5px;
  height: 29px;
  margin-left: -2px;
  content: '';
  background-color: #c9dae1;
  border-radius: 2px;
}
.sweet-alert .sa-icon.sa-info::after {
  position: absolute;
  top: 19px;
  width: 7px;
  height: 7px;
  margin-left: -3px;
  content: '';
  background-color: #c9dae1;
  border-radius: 50%;
}
.sweet-alert .sa-icon.sa-success {
  border-color: #a5dc86;
}
.sweet-alert .sa-icon.sa-success::before,
.sweet-alert .sa-icon.sa-success::after {
  position: absolute;
  width: 60px;
  height: 120px;
  content: '';
  background: white;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  border-radius: 50%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.sweet-alert .sa-icon.sa-success::before {
  top: -7px;
  left: -33px;
  -webkit-border-radius: 120px 0 0 120px;
  border-radius: 120px 0 0 120px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 60px 60px;
  transform-origin: 60px 60px;
}
.sweet-alert .sa-icon.sa-success::after {
  top: -11px;
  left: 30px;
  -webkit-border-radius: 0 120px 120px 0;
  border-radius: 0 120px 120px 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 0 60px;
  transform-origin: 0 60px;
}
.sweet-alert .sa-icon.sa-success .sa-placeholder {
  position: absolute;
  top: -4px;
  left: -4px;
  z-index: 2;
  box-sizing: content-box;
  width: 80px;
  height: 80px;
  border: 4px solid rgba(165, 220, 134, 0.2);
  -webkit-border-radius: 40px;
  border-radius: 40px;
  border-radius: 50%;
}
.sweet-alert .sa-icon.sa-success .sa-fix {
  position: absolute;
  top: 8px;
  left: 28px;
  z-index: 1;
  width: 5px;
  height: 90px;
  background-color: white;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.sweet-alert .sa-icon.sa-success .sa-line {
  position: absolute;
  z-index: 2;
  display: block;
  height: 5px;
  background-color: #a5dc86;
  border-radius: 2px;
}
.sweet-alert .sa-icon.sa-success .sa-line.sa-tip {
  top: 46px;
  left: 14px;
  width: 25px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.sweet-alert .sa-icon.sa-success .sa-line.sa-long {
  top: 38px;
  right: 8px;
  width: 47px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.sweet-alert .sa-icon.sa-custom {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: none;
  border-radius: 0;
}

/*
 * Animations
 */
@-webkit-keyframes showSweetAlert {
  0% {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  45% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  80% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes showSweetAlert {
  0% {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  45% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  80% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes hideSweetAlert {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}

@keyframes hideSweetAlert {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}

@-webkit-keyframes slideFromTop {
  0% {
    top: 0%;
  }
  100% {
    top: 50%;
  }
}

@keyframes slideFromTop {
  0% {
    top: 0%;
  }
  100% {
    top: 50%;
  }
}

@-webkit-keyframes slideToTop {
  0% {
    top: 50%;
  }
  100% {
    top: 0%;
  }
}

@keyframes slideToTop {
  0% {
    top: 50%;
  }
  100% {
    top: 0%;
  }
}

@-webkit-keyframes slideFromBottom {
  0% {
    top: 70%;
  }
  100% {
    top: 50%;
  }
}

@keyframes slideFromBottom {
  0% {
    top: 70%;
  }
  100% {
    top: 50%;
  }
}

@-webkit-keyframes slideToBottom {
  0% {
    top: 50%;
  }
  100% {
    top: 70%;
  }
}

@keyframes slideToBottom {
  0% {
    top: 50%;
  }
  100% {
    top: 70%;
  }
}

.showSweetAlert[data-animation='pop'] {
  -webkit-animation: showsweetalert 0.3s;
  animation: showSweetAlert 0.3s;
}

.showSweetAlert[data-animation='none'] {
  -webkit-animation: none;
  animation: none;
}

.showSweetAlert[data-animation='slide-from-top'] {
  -webkit-animation: slidefromtop 0.3s;
  animation: slideFromTop 0.3s;
}

.showSweetAlert[data-animation='slide-from-bottom'] {
  -webkit-animation: slidefrombottom 0.3s;
  animation: slideFromBottom 0.3s;
}

.hideSweetAlert[data-animation='pop'] {
  -webkit-animation: hidesweetalert 0.2s;
  animation: hideSweetAlert 0.2s;
}

.hideSweetAlert[data-animation='none'] {
  -webkit-animation: none;
  animation: none;
}

.hideSweetAlert[data-animation='slide-from-top'] {
  -webkit-animation: slidetotop 0.4s;
  animation: slideToTop 0.4s;
}

.hideSweetAlert[data-animation='slide-from-bottom'] {
  -webkit-animation: slidetobottom 0.3s;
  animation: slideToBottom 0.3s;
}

@-webkit-keyframes animateSuccessTip {
  0% {
    top: 19px;
    left: 1px;
    width: 0;
  }
  54% {
    top: 19px;
    left: 1px;
    width: 0;
  }
  70% {
    top: 37px;
    left: -8px;
    width: 50px;
  }
  84% {
    top: 48px;
    left: 21px;
    width: 17px;
  }
  100% {
    top: 45px;
    left: 14px;
    width: 25px;
  }
}

@keyframes animateSuccessTip {
  0% {
    top: 19px;
    left: 1px;
    width: 0;
  }
  54% {
    top: 19px;
    left: 1px;
    width: 0;
  }
  70% {
    top: 37px;
    left: -8px;
    width: 50px;
  }
  84% {
    top: 48px;
    left: 21px;
    width: 17px;
  }
  100% {
    top: 45px;
    left: 14px;
    width: 25px;
  }
}

@-webkit-keyframes animateSuccessLong {
  0% {
    top: 54px;
    right: 46px;
    width: 0;
  }
  65% {
    top: 54px;
    right: 46px;
    width: 0;
  }
  84% {
    top: 35px;
    right: 0;
    width: 55px;
  }
  100% {
    top: 38px;
    right: 8px;
    width: 47px;
  }
}

@keyframes animateSuccessLong {
  0% {
    top: 54px;
    right: 46px;
    width: 0;
  }
  65% {
    top: 54px;
    right: 46px;
    width: 0;
  }
  84% {
    top: 35px;
    right: 0;
    width: 55px;
  }
  100% {
    top: 38px;
    right: 8px;
    width: 47px;
  }
}

@-webkit-keyframes rotatePlaceholder {
  0% {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  5% {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  12% {
    -webkit-transform: rotate(-405deg);
    transform: rotate(-405deg);
  }
  100% {
    -webkit-transform: rotate(-405deg);
    transform: rotate(-405deg);
  }
}

@keyframes rotatePlaceholder {
  0% {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  5% {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  12% {
    -webkit-transform: rotate(-405deg);
    transform: rotate(-405deg);
  }
  100% {
    -webkit-transform: rotate(-405deg);
    transform: rotate(-405deg);
  }
}

.animateSuccessTip {
  -webkit-animation: animatesuccesstip 0.75s;
  animation: animateSuccessTip 0.75s;
}

.animateSuccessLong {
  -webkit-animation: animatesuccesslong 0.75s;
  animation: animateSuccessLong 0.75s;
}

.sa-icon.sa-success.animate::after {
  -webkit-animation: rotateplaceholder 4.25s ease-in;
  animation: rotatePlaceholder 4.25s ease-in;
}

@-webkit-keyframes animateErrorIcon {
  0% {
    opacity: 0;
    -webkit-transform: rotateX(100deg);
    transform: rotateX(100deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
}

@keyframes animateErrorIcon {
  0% {
    opacity: 0;
    -webkit-transform: rotateX(100deg);
    transform: rotateX(100deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
}

.animateErrorIcon {
  -webkit-animation: animateerroricon 0.5s;
  animation: animateErrorIcon 0.5s;
}

@-webkit-keyframes animateXMark {
  0% {
    margin-top: 26px;
    opacity: 0;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  50% {
    margin-top: 26px;
    opacity: 0;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  80% {
    margin-top: -6px;
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
  }
  100% {
    margin-top: 0;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes animateXMark {
  0% {
    margin-top: 26px;
    opacity: 0;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  50% {
    margin-top: 26px;
    opacity: 0;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  80% {
    margin-top: -6px;
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
  }
  100% {
    margin-top: 0;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.animateXMark {
  -webkit-animation: animatexmark 0.5s;
  animation: animateXMark 0.5s;
}

@-webkit-keyframes pulseWarning {
  0% {
    border-color: #f8d486;
  }
  100% {
    border-color: #f8bb86;
  }
}

@keyframes pulseWarning {
  0% {
    border-color: #f8d486;
  }
  100% {
    border-color: #f8bb86;
  }
}

.pulseWarning {
  -webkit-animation: pulsewarning 0.75s infinite alternate;
  animation: pulseWarning 0.75s infinite alternate;
}

@-webkit-keyframes pulseWarningIns {
  0% {
    background-color: #f8d486;
  }
  100% {
    background-color: #f8bb86;
  }
}

@keyframes pulseWarningIns {
  0% {
    background-color: #f8d486;
  }
  100% {
    background-color: #f8bb86;
  }
}

.pulseWarningIns {
  -webkit-animation: pulsewarningins 0.75s infinite alternate;
  animation: pulseWarningIns 0.75s infinite alternate;
}

/* Internet Explorer 9 has some special quirks that are fixed here */

/* The icons are not animated. */

/* This file is automatically merged into sweet-alert.min.js through Gulp */

/* Error icon */
.sweet-alert .sa-icon.sa-error .sa-line.sa-left {
  -ms-transform: rotate(45deg) \9;
}

.sweet-alert .sa-icon.sa-error .sa-line.sa-right {
  -ms-transform: rotate(-45deg) \9;
}

/* Success icon */
.sweet-alert .sa-icon.sa-success {
  border-color: transparent\9;
}

.sweet-alert .sa-icon.sa-success .sa-line.sa-tip {
  -ms-transform: rotate(45deg) \9;
}

.sweet-alert .sa-icon.sa-success .sa-line.sa-long {
  -ms-transform: rotate(-45deg) \9;
}

.sweet-alert button.confirm {
  display: inline-block;
  background-color: rgb(221, 107, 85);
  box-shadow: rgba(221, 107, 85, 0.8) 0 0 2px,
    rgba(0, 0, 0, 0.05) 0 0 0 1px inset;
}

.sweet-alert button.info {
  display: inline-block;
  background-color: rgb(174, 222, 244);
  box-shadow: rgba(174, 222, 244, 0.8) 0 0 2px,
    rgba(0, 0, 0, 0.05) 0 0 0 1px inset;
}
</style>
