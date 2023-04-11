<template>
  <footer>
    <section class="footer-section">
      <div class="container">
        <div class="footer-title">
          <div>
            <h3 class="title-footer">Or</h3>
            <p class="with-title">{{ title }} with...</p>
          </div>
        </div>
        <ul class="footer-masange">
          <li>
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.039 0.5C8.96814 0.493164 1.42709 7.48309 0.746796 16.5284C0.0664673 25.5737 6.47717 33.613 15.447 34.963L15.447 22.434H11.157V17.876H15.448V14.843C15.448 9.82098 17.894 7.61798 22.068 7.61798C23.257 7.60205 24.4456 7.67419 25.624 7.83398L25.624 11.813H22.777C21.006 11.813 20.387 13.492 20.387 15.386V17.877H25.579L24.879 22.434H20.386V35C29.4155 33.7645 35.9452 25.7464 35.3266 16.6538C34.708 7.56116 27.1526 0.501282 18.039 0.5H18.039Z"
                fill="#4267B2"
              />
            </svg>
            <span class="massange-title">Sign up with Apple</span>
          </li>
          <li>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.22 17.9908C34.2209 16.8284 34.1207 15.666 33.9204 14.5189L17.798 14.5168V21.1009H27.033C26.6514 23.2282 25.4166 25.1069 23.6149 26.3009L23.615 30.5729H29.125C32.5281 27.2894 34.3797 22.717 34.22 17.9908Z"
                fill="#4285F4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.798 34.696C21.9634 34.8129 26.0166 33.3365 29.131 30.568L23.619 26.297C20.9308 28.0165 17.6006 28.4025 14.5902 27.3436C11.5799 26.2847 9.22479 23.8988 8.20502 20.875H2.51904V25.275C5.42194 31.0508 11.3337 34.696 17.798 34.696Z"
                fill="#34A853"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.198 20.8748C7.48187 18.7516 7.48187 16.452 8.198 14.3288V9.9248H2.51898C0.0940552 14.7556 0.0940552 20.4481 2.51898 25.2788L8.198 20.8748Z"
                fill="#FBBC04"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.798 7.26697C20.236 7.22754 22.5917 8.14807 24.357 9.82996L29.238 4.94897C26.1423 2.04431 22.0427 0.450378 17.798 0.500916C11.3329 0.499878 5.42029 4.1463 2.51904 9.92395L8.198 14.3239C9.55444 10.1564 13.4156 7.31647 17.798 7.26294V7.26697Z"
                fill="#EA4335"
              />
            </svg>

            <span class="massange-title">Sign up with Google</span>
          </li>
          <li>
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.039 0.5C8.96814 0.493164 1.42709 7.48309 0.746796 16.5284C0.0664673 25.5737 6.47717 33.613 15.447 34.963L15.447 22.434H11.157V17.876H15.448V14.843C15.448 9.82098 17.894 7.61798 22.068 7.61798C23.257 7.60205 24.4456 7.67419 25.624 7.83398L25.624 11.813H22.777C21.006 11.813 20.387 13.492 20.387 15.386V17.877H25.579L24.879 22.434H20.386V35C29.4155 33.7645 35.9452 25.7464 35.3266 16.6538C34.708 7.56116 27.1526 0.501282 18.039 0.5H18.039Z"
                fill="#4267B2"
              />
            </svg>
            <span class="massange-title">Sign up with Apple</span>
          </li>
        </ul>
        <h4 class="allredy">Already have an account? Please Log in.</h4>
      </div>
    </section>
  </footer>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
console.log(props);
</script>

<style scoped>
.title-footer {
  font-weight: 600;
  font-size: 54px;
  line-height: 81px;
  color: #ffffff;
}
.footer-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
.with-title {
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
}
.footer-masange {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-masange > li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 2px solid #ffffff;
  padding: 20px 50px;
  border-radius: 10px;
}
.massange-title {
  font-weight: 400;
  font-size: 21px;
  line-height: 32px;
  color: #ffffff;
}
.allredy{ 
    margin-top: 40px;
    text-align: center;
    font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
}
</style>
