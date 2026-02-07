(function(){
  const codeEl = document.getElementById('refCode');
  const copyBtn = document.getElementById('copyCodeBtn');
  const toast = document.getElementById('toast');

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(()=>toast.classList.remove('show'), 1600);
  }

  async function copyText(text){
    try{
      await navigator.clipboard.writeText(text);
      showToast('복사 완료!');
      return;
    }catch(e){}
    // fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly','');
    ta.style.position='absolute';
    ta.style.left='-9999px';
    document.body.appendChild(ta);
    ta.select();
    try{
      document.execCommand('copy');
      showToast('복사 완료!');
    }catch(e){
      showToast('복사 실패: 직접 선택해 주세요');
    }finally{
      document.body.removeChild(ta);
    }
  }

  copyBtn?.addEventListener('click', ()=>{
    const code = codeEl?.textContent?.trim() || 'G0F095Q2';
    copyText(code);
  });
})();
