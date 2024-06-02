<script setup lang="ts">
import { PropType } from 'vue';

interface Account {
  name: string;
  bankName: string;
  accountNumber: string;
}

const props = defineProps({
  groom: { type: Array as PropType<Account[]>, required: true, default: [] as Account[] },
  bride: { type: Array as PropType<Account[]>, required: true, default: [] as Account[] },
});

const copyToClipboard = (text: string) => {
  const account = text.replace('-', '');
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(account)
      .then(() => {
        alert(`계좌번호(${account})가 복사되었습니다.\n필요한 곳에 붙여넣기 하세요.`);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }
};

const toggleClass = (el: Element, className: string) => {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
    return false;
  } else {
    el.classList.add(className);
    return true;
  }
};
const openAccount = (type: 'groom' | 'bride') => {
  const el = document.getElementById(type);
  if (!el) return;
  const [titleEl, contentsEl] = el.children;
  const arrowEl = titleEl.querySelector('.arrow');
  if (!arrowEl) return;
  if (toggleClass(arrowEl, 'opened')) {
    const length = type === 'groom' ? props.groom?.length : props.bride?.length;
    (contentsEl as HTMLElement).style.maxHeight = `${78 * length}px`;
  } else {
    (contentsEl as HTMLElement).style.maxHeight = '';
  }
};
</script>

<template>
  <div class="account-wrap">
    <div class="section-title"><span>마음 전하실 곳</span></div>
    <div class="account">
      <div id="groom" class="item">
        <div class="item-title" @click="openAccount('groom')">
          <div>신랑측 계좌번호</div>
          <div class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        <div class="item-contents">
          <div v-for="item of groom" :key="`${item.name}`" class="item-inner">
            <div>
              <span class="bank">{{ item.bankName }} | </span>
              <span>{{ item.accountNumber }}</span>
            </div>
            <div style="font-weight: bold">{{ item.name }}</div>
            <div class="btn-action" @click="copyToClipboard(item.accountNumber)">
              <svg width="12" height="12" viewBox="0.48 0.48 23.04 23.04" fill="#222F3D" class="ov-icon">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                ></path>
              </svg>
              <div>복사</div>
            </div>
          </div>
        </div>
      </div>
      <div id="bride" class="item">
        <div class="item-title" @click="openAccount('bride')">
          <div>신부측 계좌번호</div>
          <div class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        <div class="item-contents">
          <div v-for="item of bride" :key="`${item.name}`" class="item-inner">
            <div>
              <span class="bank">{{ item.bankName }} | </span>
              <span>{{ item.accountNumber }}</span>
            </div>
            <div style="font-weight: bold">{{ item.name }}</div>
            <div class="btn-action" @click="copyToClipboard(item.accountNumber)">
              <svg width="12" height="12" viewBox="0.48 0.48 23.04 23.04" fill="#222F3D" class="ov-icon">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                ></path>
              </svg>
              <div>복사</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.account-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto;
}
.item {
  width: 300px;
  margin: 8px 0;
}
.item-title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2eeee;
  color: var(--text-dark-color);
  border-radius: 5px;
  padding: 10px;
  cursor: default;
  font-family: var(--font-gothic);
}
.item-title:hover {
  cursor: pointer;
}
.arrow {
  width: 12px;
  position: absolute;
  right: 18px;
  top: 12px;
  transform: rotate(0deg);
  transition: transform 0.2s ease;
  color: rgb(82, 69, 72);
}
.opened {
  transform: rotate(180deg);
}
.item-contents {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease;
  color: var(--text-color);
  font-family: var(--font-gothic);
}
.item-inner {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  margin-bottom: 5px;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
  background-color: white;
  font-family: var(--font-gothic);
}

.btn-action {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: calc(0.75rem - 1px);
  right: 0.75rem;
  width: 54px;
  cursor: pointer;
  padding: 1px 4px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #e1e1e1;
  color: #333;
}
</style>
