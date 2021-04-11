Tooltip com acessibilidade, não otimizado para touch

Para usar o tooltip  é necessario o elemento html conter
o **data-tooltip** e o **aria label** contendo o texto a ser exibido 
e ter position **RELATIVE**

ex:
 <p data-tooltip aria-label="Esse é um Tooltip que segue o mouse">Texto</p>

necessario
css: tooltip.css
js: tolltip.js