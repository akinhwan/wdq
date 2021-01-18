<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- CTA box -->
      <div class="dark relative bg-gray-800 py-10 px-8 md:py-16 md:px-12">

        <!-- Background illustration -->
        <div class="absolute inset-0 left-auto  pointer-events-none" aria-hidden="true">
          <svg class="h-full" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                <stop stop-color="#667EEA" offset="0%" />
                <stop stop-color="#667EEA" stop-opacity="0" offset="100%" />
              </radialGradient>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                <stop stop-color="#3ABAB4" offset="0%" />
                <stop stop-color="#3ABAB4" stop-opacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-85 -369)" fill="none" fill-rule="evenodd">
              <circle fill-opacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240" />
              <circle fill-opacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400" />
            </g>
          </svg>
        </div>

        <div class="relative flex flex-col lg:flex-row justify-between items-center">

          <!-- CTA content -->
          <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
            <h3 class="h3 font-red-hat-display text-gray-100">Free until you’re ready to launch</h3>
          </div>

          <!-- CTA form -->
          <form action="https://app.convertkit.com/forms/1967626/subscriptions"
            class="w-full lg:w-1/2 seva-form formkit-form" method="post" data-sv-form="1967626" data-uid="f0509ae312"
            data-format="inline" data-version="5"
            data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
            min-width="400 500 600 700 800">
            <div data-style="clean flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
              <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
                <div class="formkit-field">
                  <input class="formkit-input form-input w-full mb-2 sm:mb-0 sm:mr-2" name="email_address"
                    style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"
                    aria-label="Email Address" placeholder="Email Address" required="" type="email">
                    </div>
                    <button
                  data-element="submit" class="formkit-submit formkit-submit btn text-white bg-teal-500 hover:bg-teal-400 flex-shrink-0"
                  style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 4px; font-weight: 400;">
                  <div class="formkit-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div><span class="bg-teal-500 hover:bg-teal-400 flex-shrink-0">Subscribe</span>
                </button>
              </div>
              <div class="formkit-powered-by-convertkit-container"><a
                  href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
                  data-element="powered-by" class="formkit-powered-by-convertkit" target="_blank"
                  rel="noopener noreferrer">Built with ConvertKit</a></div>
            </div>
          </form>


          <!-- <form class="w-full lg:w-1/2">
            <div class="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
              <input type="tel" class="form-input w-full mb-2 sm:mb-0 sm:mr-2" placeholder="Phone number" aria-label="Phone number" />
              <a class="btn text-white bg-teal-500 hover:bg-teal-400 flex-shrink-0" href="#0">Request code</a>
            </div>
            Success message
            <p class="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p>
          </form> -->

        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Cta',
}
</script>