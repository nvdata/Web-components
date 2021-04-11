export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
  
    tooltips.forEach((item) => {
      item.addEventListener('mouseover', onMouseOver);
    })
  
    function onMouseOver(event) {
      const tooltipBox = criarTooltipBox(this);
  
      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener('mousemove', onMouseMove); //objeto pasado como parametro
  
      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener('mouseleave', onMouseLeave);
    }
  
    const onMouseLeave = { //objeto do evento
      handleEvent() { //handle event smp é necessario para objetos passados como paramentro de evento
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
      }
    }
  
    const onMouseMove = { //objeto do evento
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
      }
    }
  
    function criarTooltipBox(element) { //cria o tolltip
      const tooltipBox = document.createElement('div');
      const text = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }
  }
  