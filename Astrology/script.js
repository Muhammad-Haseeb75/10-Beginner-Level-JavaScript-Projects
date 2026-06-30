let predictions = [
  "A new opportunity will soon come your way.",
  "You will meet someone who changes your perspective.",
  "Success is closer than you think.",
  "A challenge will teach you an important lesson.",
  "Good news will arrive unexpectedly.",
  "Your hard work will soon pay off.",
  "You will discover a hidden talent.",
  "A journey will bring you clarity.",
  "Someone is thinking positively about you.",
  "You will overcome a fear.",
  "A financial gain is on the horizon.",
  "You will reconnect with an old friend.",
  "A bold decision will benefit you.",
  "Your confidence will inspire others.",
  "You will learn something valuable soon.",
  "A surprise will make your day.",
  "You are about to enter a lucky phase.",
  "Your patience will be rewarded.",
  "A new idea will lead to success.",
  "You will receive appreciation for your efforts.",
  "A small risk will bring big rewards.",
  "Someone will seek your advice.",
  "You will achieve a personal goal.",
  "A new connection will be meaningful.",
  "You will find peace in a difficult situation.",
  "Your creativity will shine.",
  "An unexpected event will bring joy.",
  "You will gain clarity about your future.",
  "A positive change is coming soon.",
  "You will solve a long-standing problem.",
  "Your energy will attract success.",
  "You will make a wise decision.",
  "A hidden opportunity will reveal itself.",
  "You will experience personal growth.",
  "Your efforts will be recognized.",
  "A new path will open for you.",
  "You will feel more confident than ever.",
  "Someone will support you when needed.",
  "You will achieve balance in life.",
  "A new beginning is approaching.",
  "You will find inspiration in unexpected places.",
  "A dream of yours will start becoming reality.",
  "You will handle a tough situation successfully.",
  "A positive mindset will change everything.",
  "You will receive unexpected help.",
  "Your future holds exciting possibilities.",
  "You will take a step toward your dreams.",
  "A calm phase will bring you clarity.",
  "You will realize your true potential.",
  "Something you wished for is coming true."
];



    
    
    const button = document.getElementById('button')
    const form = document.querySelector('form')

    form.addEventListener('submit' , (e)=>{
        e.preventDefault()
        let lucky = document.getElementById('lucky').value
        const result = lucky % 51
        document.getElementById('result').textContent = `Yout Futurs is : ${predictions[result]}`
        form.reset()
    })

    


