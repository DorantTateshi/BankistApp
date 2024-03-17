

<!--<template>-->
<!--  <div class="p-8">-->


<!--    <div class="max-w-md mx-auto p-4 bg-white shadow-md">-->
<!--      <h1 class="text-2xl font-bold mb-4">Credit Card Form</h1>-->

<!--      <form @submit.prevent="checkCards">-->
<!--        <div class="mb-4">-->
<!--          <label for="cardNumber" class="block text-sm font-medium text-gray-600">Card Number</label>-->
<!--          <input v-model="cardName" type="text" id="cardNumber" class="mt-1 p-2 w-full border rounded-md" />-->
<!--        </div>-->

<!--        <div class="mb-4">-->
<!--          <label for="expiry" class="block text-sm font-medium text-gray-600">Expiry Date</label>-->
<!--          <input v-model="cardDate" type="text" id="expiry" placeholder="MM/YY" class="mt-1 p-2 w-full border rounded-md" />-->
<!--        </div>-->

<!--        <div class="mb-4">-->
<!--          <label for="cvc" class="block text-sm font-medium text-gray-600">CVC</label>-->
<!--          <input v-model="cardCvc" type="text" id="cvc" class="mt-1 p-2 w-full border rounded-md" />-->
<!--        </div>-->

<!--        <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">Submit</button>-->
<!--      </form>-->
<!--    </div>-->


<!--    <SuccessfullNotification v-if="postSuccess"/>-->
<!--    <ErrorNotification v-if="postError"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->

<!--import SuccessfullNotification from "@/components/SuccesfullNotification.vue";-->
<!--import ErrorNotification from "@/components/ErrorNotification.vue";-->

<!--import {ref} from 'vue';-->


<!--const cards=[];-->
<!--const cardsState=ref(cards);-->

<!--let cardName=ref(null);-->
<!--let cardDate=ref(null);-->
<!--let cardCvc=ref(null);-->

<!--cardName.value = ''-->
<!--cardDate.value = ''-->
<!--cardCvc.value = ''-->


<!--let postSuccess = ref(false)-->
<!--let postError = ref(false)-->

<!--const checkCards=()=> {-->
<!--  // console.log(cardName.value, cardDate.value, cardCvc.value)-->
<!--  if (!cardName.value || !cardDate.value || !cardCvc.value) {-->
<!--    console.log("error");-->
<!--    postError.value = true;-->
<!--    return;-->
<!--  } else {-->
<!--    const newCard = {-->
<!--      name: cardName,-->
<!--      expire: cardDate,-->
<!--      cvc: cardCvc-->
<!--    }-->
<!--    cardsState.value = [...cardsState.value, newCard];-->
<!--    postSuccess.value = true;-->
<!--    postError.value = false;-->
<!--  }-->
<!--  cardName.value='';-->
<!--  cardDate.value='';-->
<!--  cardCvc.value='';-->
<!--}-->

<!--</script>-->

<template>
  <div class="p-8">
    <div class="max-w-md mx-auto p-4 bg-white shadow-md">
      <h1 class="text-2xl font-bold mb-4">Credit Card Information</h1>

      <!-- Introduction Section -->
      <div class="mb-4 text-gray-600">
        <p>
          Welcome to our secure payment portal! Please fill out the form below to proceed with your payment.
          Choose your preferred card type and provide the necessary details.
        </p>
      </div>

      <!-- Credit Card Form -->
      <form @submit.prevent="checkCards">
        <div class="mb-4">
          <label for="cardType" class="block text-sm font-medium text-gray-600">Card Type</label>
          <select v-model="cardType" id="cardType" class="mt-1 p-2 w-full border rounded-md">
            <option value="mastercard">MasterCard</option>
            <option value="visa">Visa</option>
            <option value="applepay">Apple Pay</option>
            <option value="paypal">PayPal</option>
            <option value="debit">Debit Card</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="cardNumber" class="block text-sm font-medium text-gray-600">Card Number</label>
          <input v-model="cardNumber" type="text" id="cardNumber" class="mt-1 p-2 w-full border rounded-md" />
        </div>

        <div class="mb-4">
          <label for="expiry" class="block text-sm font-medium text-gray-600">Expiry Date</label>
          <input v-model="cardDate" type="text" id="expiry" placeholder="MM/YY" class="mt-1 p-2 w-full border rounded-md" />
        </div>

        <div class="mb-4">
          <label for="cvc" class="block text-sm font-medium text-gray-600">CVV</label>
          <input v-model="cardCvc" type="text" id="cvc" class="mt-1 p-2 w-full border rounded-md" />
        </div>

        <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">Submit</button>
      </form>
    </div>

    <SuccessfullNotification v-if="postSuccess" />
    <ErrorNotification v-if="postError" />
  </div>
</template>

<script setup>
import SuccessfullNotification from "@/components/SuccesfullNotification.vue";
import ErrorNotification from "@/components/ErrorNotification.vue";
import { ref } from 'vue';

const cards = [];
const cardsState = ref(cards);

let cardType = ref('mastercard');
let cardNumber = ref(null);
let cardDate = ref(null);
let cardCvc = ref(null);

cardNumber.value = '';
cardDate.value = '';
cardCvc.value = '';

let postSuccess = ref(false);
let postError = ref(false);

const checkCards = () => {
  if (!cardType.value || !cardNumber.value || !cardDate.value || !cardCvc.value) {
    console.log('error');
    postError.value = true;
    return;
  } else {
    const newCard = {
      type: cardType.value,
      number: cardNumber.value,
      expire: cardDate.value,
      cvc: cardCvc.value,
    };
    cardsState.value = [...cardsState.value, newCard];
    postSuccess.value = true;
    postError.value = false;
  }
  cardType.value = 'mastercard';
  cardNumber.value = '';
  cardDate.value = '';
  cardCvc.value = '';
};
</script>


