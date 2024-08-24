<template>
  <div class="bg-white text-black min-h-screen flex items-center justify-center">
    <div class="lg:w-3/4 xl:w-2/3 p-8 rounded-md bg-gray-100">
      <h1 class="text-3xl font-bold mb-6">
        Streaming OpenAI API to Support for any kind of questions regarding to our system!
      </h1>
      <div id="resultContainer" class="mt-4 h-48 overflow-y-auto">
        <p class="text-gray-500 text-sm mb-2">Generated Text</p>
        <p id="resultText" class="whitespace-pre-line">{{ generatedText }}</p>
      </div>
      <input
          type="text"
          v-model="prompt"
          @input="handleInput"
          class="w-full px-4 py-2 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none mt-4"
          placeholder="Enter prompt..."
      />
      <div class="flex justify-center mt-4">
        <button
            @click="generateText"
            :disabled="isGenerating"
            class="w-1/2 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none mr-2"
        >
          Generate
        </button>
        <button
            @click="stopText"
            :disabled="!isGenerating"
            class="w-1/2 px-4 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-gray-700 hover:border-gray-700 focus:outline-none ml-2"
        >
          Stop
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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'; // Replace with your actual API key

const prompt = ref('');
const generatedText = ref('');
const isGenerating = ref(false);

const handleInput = () => {
  // Handle input if needed
};

// const generateText = async () => {
//   try {
//     isGenerating.value = true;
//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: prompt.value }],
//         stream: true,
//       }),
//     });
//     const data = await response.json();
//     generatedText.value = data.choices[0].message.content;
//   } catch (error) {
//     console.error('Error:', error);
//     generatedText.value = 'Error occurred while generating.';
//   } finally {
//     isGenerating.value = false;
//   }
// };

const generateText = async () => {
  try {
    isGenerating.value = true;
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt.value }],
        stream: true,
      }),
    });
    const data = await response.json();
    console.log('Response data:', data); // Log the response data for debugging
    if (data.choices && data.choices.length > 0 && data.choices[0].message) {
      generatedText.value = data.choices[0].message.content;
    } else {
      generatedText.value = 'Error: Unexpected response format.';
    }
  } catch (error) {
    console.error('Error:', error);
    generatedText.value = 'Error occurred while generating.';
  } finally {
    isGenerating.value = false;
  }
};

const stopText = () => {
  isGenerating.value = false;
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
