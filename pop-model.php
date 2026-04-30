<div class="sticklist">
  <button class="open-close-arrow">
    <span class="open-arrow"><i class="fa fa-chevron-right"></i></span>
    <span class="close-arrow"><i class="fa fa-chevron-left"></i></span>
  </button>
  <ul>
    <li class="none-li inquiery-icon  imgnone">
      <a href="javascript:;" class="click1">
        <span class="icon1"> <i class="fa fa-envelope"></i></span> <span class="btn-text"> Send Inquiry</span>
      </a>
    </li>

    <li class="download-pdf none-li inquiery-icon  imgnone">
      <a href="tel:+917041510802" onclick="gtag('event', 'send', { 'event_category': 'click on Mobile', 'event_action': 'Mobile', 'event_label': '917041510802' });">
        <span class="icon"><i class="fa-solid fa-phone-volume" aria-hidden="true"></i>
        </span> <span class="btn-text">Call</span>
      </a>
    </li>

    <li class="whataspp-icon none-li imgnone">
      <a onclick="gtag('event', 'send', { 'event_category': 'click on whatsapp', 'event_action': 'Mobile', 'event_label': '+917041510802' });"
        href="https://api.whatsapp.com/send?phone=917041510802&amp;text=Hello Team Naksh Technology Solutions LLP, I was going through your Website, Please connect me for product discussion." target="_blank">
        <span class="icon1"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" style="width: 30px;" alt="WhatsApp"></span> <span class="btn-text"> Whatsapp</span>
      </a>
    </li>
  </ul>
</div>
<div class="modal fade bs-example-modal-sm cstm-modal-top-header my-custom-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="onload">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <input type="hidden" id="ispopupopen" value="1">
    <div class="modal-content">
      <div class="modal-body stick_popup">
        <h5 class="modal-title">Get Your Free Quote…!</h5>
        <div class="stick_close" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></div>
        <div class="row mt-40">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="footer-widgets tag-widget">
              <input id="inquiery-model" value="<?= $_COOKIE['inquierymodel']; ?>" type="hidden" />
              <input id="isloadopenmodel" value="<?= $_COOKIE['isloadopenmodel']; ?>" type="hidden" />
              <input name="junk_trap" class="junk_trap" type="hidden" />
              <form class="form-horizontal form1" action="https://www.nakshtechnology.in/inquiry-action.php" method="post" novalidate="novalidate">
                <input type="hidden" name="recaptcha" id="recaptcha2" class="recaptcha2">
                <div class="form-group has-feedback">
                  <div class="col-md-12">
                    <input name="name" id="name" type="text" placeholder="Enter Your Name" class="form-control">

                  </div>
                </div>
                <div class="form-group has-feedback">
                  <div class="col-md-12">
                    <input name="company_name" id="company_name" type="text" placeholder="Enter Company Name" class="form-control">

                  </div>
                </div>

                <div class="form-group has-feedback">
                  <div class="col-md-12">
                    <input name="email" id="email" type="text" placeholder="Enter Your E-mail" class="form-control">

                  </div>
                </div>

                <div class="form-group has-feedback">
                  <div class="col-md-12">
                    <input name="number" id="number" type="tel" placeholder="Enter Phone Number" maxlength="15" minlength="8" class="form-control number21">
                  </div>
                </div>

                <div class="form-group has-feedback class-feedback">
                  <div class="col-md-12">
                    <input name="city" id="city" type="text" placeholder="Enter Your City" class="form-control">
                  </div>
                </div>

                <div class="form-group has-feedback">
                  <div class="col-md-12">
                    <textarea class="form-control" name="message" id="message" placeholder="Enter Your Requirement"></textarea>

                  </div>
                </div>
                <div class="form-group has-feedback">
                  <div class="col-md-12">
                    <div class="captchaGrid">
                      <div class="captchaInput">
                        <input name="captcha" id="captcha" placeholder="Captcha Code" class="form-control" type="text">
                      </div>
                      <div class="captchaImg">
                        <img src="https://www.nakshtechnology.in/captcha.php" class="capside">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group has-feedback">
                  <div class="col-md-12 col-sm-3 col-xs-12">
                    <input name="submit" class="submit submitbutton" type="submit" value="Submit Now!">
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="footer-box" style="display: none;">

  <div class="book-app" style="background:#cb0011;" id="req-apnmt2">
    <a class="nav_up click1" href="javascript:;" style="color:#FFF; font-size:14px;font-weight:600;"><i class="fa fa-envelope" style="margin-right: 5px;"></i> Enquire Now</a>
  </div>

  <div class="book-app" style="background: #2db640;">
    <a onclick="gtag('event', 'send', { 'event_category': 'click on whatsapp', 'event_action': 'Mobile', 'event_label': '+917041510802' });"
      href="https://api.whatsapp.com/send?phone=917041510802&amp;text=Hello Team Naksh Technology Solutions LLP, I was going through your Website, Please connect me for product discussion." target="_blank"
      style="color:#FFF; font-size:14px;font-weight:600;"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" style="width: 20px;" alt="WhatsApp"> WhatsApp</a>
  </div>
</div>

<!-- End My Model -->