<script lang="ts">
  import Logo from "./assets/logo.jpg";
  import MailIcon from "./assets/mail.svg?component";
  import TwitterIcon from "./assets/twitter-sign.svg?component";
  import GithubIcon from "./assets/github.svg?component";
</script>

<main class="fixed inset-0 bg-black text-white">
  <div class="container mx-auto h-screen">
    <div class="flex justify-center items-center h-full">
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <div>
          <img src={Logo} class="h-60 w-auto" alt="Laurie Poulter" />
        </div>
        <div class="text-2xl leading-relaxed w-60 sm:w-auto">
          <p class="mb-4">Hello !</p>
          <p>I'm Laurie.</p>
          <p class="mb-8">I'm a freelance Web Developer.</p>

          <div class="flex justify-around align-baseline">
            <a href="mailto:lpoulter1984@gmail.com"
              ><MailIcon
                class="fill-white hover:opacity-80 animate__shakeY"
                width={42}
                height={42}
              />
            </a>
            <a href="https://github.com/lpoulter1"
              ><GithubIcon
                class="fill-white hover:opacity-80"
                width={42}
                height={42}
              />
            </a>
            <a href="https://twitter.com/LauriePoulter"
              ><TwitterIcon
                class="fill-white hover:opacity-80"
                width={42}
                height={42}
              /></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
