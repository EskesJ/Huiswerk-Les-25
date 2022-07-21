function checker() {
  let goedeAntwoorden = 0;
  let goedeVragen = [];
  let fouteVragen = [];
  let antwoorden = ["Katana", "Bushido", "Dienen", "Seppuku", "Ronin", "Shi", "gevecht"];

  const antwoord1 = $('input[name="wapen"]:checked').val();
  const antwoord2 = $('input[name="filosofie"]:checked').val();
  const antwoord3 = $('input[name="term"]:checked').val();
  const antwoord4 = $('input[name="zelfmoord"]:checked').val();
  const antwoord5 = $('input[name="zonder-meester"]:checked').val();
  const antwoord6 = $('input[name="klasse"]:checked').val();
  const antwoord7 = $('input[name="sterven"]:checked').val();

  let userAntwoorden = [antwoord1, antwoord2, antwoord3, antwoord4, antwoord5, antwoord6, antwoord7];
  for (let i = 0; i < 7; i++){
    antwoorden[i] === userAntwoorden[i] ? goedeVragen.push((i+1)) : fouteVragen.push((i+1));
  }

  if (goedeVragen.length >= 1) {
    for (let i = 0; i<goedeVragen.length; i++) {
      let element = document.querySelector(".vraag"+goedeVragen[i]);
      element.style.backgroundColor = "#98FB98";
    }
  }

  if (fouteVragen.length >= 1) {
    for (let i = 0; i<fouteVragen.length; i++) {
      let element = document.querySelector(".vraag"+fouteVragen[i]);
      element.style.backgroundColor = "#fd5c63";
    }
  }

  console.log(goedeVragen.length);
  console.log(fouteVragen);
  switch (goedeVragen.length) {
    case 7:
      $(".uitslag").html(`<p>Gefeliciteerd! Je hebt 0 fout!!</p><p>Jouw rank is: HATAMOTO</p>`);
      break;
    case 6:
      $(".uitslag").html(`<p>Gefeliciteerd! Je hebt maar 1 fout!!</p><p>Jouw rank is: HATAMOTO</p>`);
      break;
    case 5:
    case 4:
    case 3:
      $(".uitslag").html(`<p> Je hebt ${goedeVragen.length} vragen goed beantwoord.</p><p>Jouw rank is: GOSHI</p>`);
      break;
    case 2:
    case 1:
    case 0:
      $(".uitslag").html(`<p> Oei dat ging niet zo goed. Jouw score is: ${goedeVragen.length} .</p><p>Jouw rank is: GOKENIN</p>`);

  }
}
