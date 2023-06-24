
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

