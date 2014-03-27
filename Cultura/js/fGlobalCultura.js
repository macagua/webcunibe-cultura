/***************************************************************************************
     Author: Eric King
     Url: http://redrival.com/eak/index.shtml
     This script is free to use as long as this info is left in
     Featured on Dynamic Drive script library (http://www.dynamicdrive.com)
****************************************************************************************/
var win=null;
function NewWindow(mypage,myname,w,h,scroll,pos)
{
 if(pos=="random")
 {
  LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;
  TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;
 }
 if(pos=="center")
 {
  LeftPosition=(screen.width)?(screen.width-w)/2:100;
  TopPosition=(screen.height)?(screen.height-h)/2:100;
 }
 else 
 if((pos!="center" && pos!="random") || pos==null)
 {
  LeftPosition=0;
  TopPosition=20
 }
 settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
 win=window.open(mypage,myname,settings);
}

// IMAGEN DE AFICHE PROMOCIONAL
function mostrarAfiche(flag1)
{
 if (flag1 =="1931032004")
  open('avisos/'+String(flag1)+'.html','_blank','width=360,height=514,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
 if (flag1 =="2426032004")
  open('avisos/'+String(flag1)+'.html','_blank','width=360,height=481,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
 if (flag1 =="30032004")
  open('avisos/'+String(flag1)+'.html','_blank','width=398,height=614,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
 if (flag1 =="27042004")
  open('avisos/'+String(flag1)+'.html','_blank','width=360,height=540,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
 if (flag1 =="180406052004")
  open('avisos/'+String(flag1)+'.html','_blank','width=499,height=124,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');  
}

// IMAGEN DE BANNER ARRIBA
function imgBanner ()
{
 document.write("<table width='684' border='0' cellspacing='2' cellpadding='0' align='center'>");
 document.write("<tr><td colspan='3'><div align='center'>");
 document.write("<img src='imagenes/cultura.gif' alt='Coordinaci&oacute;n de Cultura' height='80' width='683' border='0'>");
 document.write("</div></td></tr></table>");
}

// PIE DE PAGINA
function pieDePagina ()
{
 document.write("<table width='679' border='0' cellPadding='2' cellSpacing='3' align='center'>");
 document.write("<tr><td bgcolor='#3184bd'><div align='center'>");
 document.write("<table border='0' cellpadding='4' bgcolor='#3184bd' height='24' width='679'>");
 document.write("<tr><td bgcolor='#FFFFFF'><div align='center'>");
 document.write("<b><font color='#000000' face='tahoma,arial' size='2'>Colegio Universitario Dr. Rafael Belloso Chac&iacute;n - Coordinaci&oacute;n de Cultura<br>Todos los Derechos Reservados &copy; Estado Zulia, Maracaibo, Venezuela - 1998, 2004</font></b>");
 document.write("</div></td></tr>");
 document.write("</table>");
 document.write("</div></td>	</tr>");
 document.write("</table>");
}

// TABLA DE CONTACTOS 
function tablaDeContactos ()
{
 web = "¡Contacta al Webmaster de CUNIBE!"
 cultura ="¡Contacta a la Coordinación de Cultura de CUNIBE!"
 porDefecto ="CUNIBE - Coordinación de Cultura" 
 document.write("<table border='0' cellpadding='0' cellspacing='0' width='100%'><tbody>");
 document.write("<tr><td height='9' width='90%'>");
 document.write("<font color='#000000' face='tahoma,arial' size='2'><b><u>Contactanos</u></b></font>");
 document.write("</td></tr>");
 document.write("<tr><td height='9' width='90%'><div align='left'>");
 document.write("<font color='#000000' face='tahoma,arial' size='1'><a href='mailto:webmaster@cunibe.org?subject=Inquietud sobre la P&aacute;gina del Colegio Univesitario Dr. Rafael Belloso Chacín' target='_self' onmouseover='window.status=String(web); return true;' onmouseout='window.status=String(porDefecto); return true;' title='Webmaster'>Webmaster</a></font>");
 document.write("</div></td></tr>");
 document.write("<tr height='52'><td height='52' width='90%'><div align='left'>");
 document.write("<font face='Tahoma' size='1'><b>TELFS.: (Central)<br></b>58-261-7911252<br>58-261-7911352<br>58-261-7915567<br></font>");
 document.write("</div></td>	</tr>");
 document.write("<tr height='13'><td height='13' width='90%'><div align='left'>");
 document.write("<font face='Tahoma' size='1'><b>Extensiones: </b>141</font>");
 document.write("</div></td>	</tr>");
 document.write("<tr height='13'><td height='13' width='90%'><div align='left'>");
 document.write("<font face='Tahoma' size='1'><b>FAX: </b>(0261) 7939749 </font>");
 document.write("</div></td>	</tr>");
 document.write("<tr><td height='2' width='90%'><div align='left'>");
 document.write("<font face='Tahoma' size='1'><b>Correo Electr&oacute;nico:</b><br><a href='mailto:cultura@cunibe.org?subject=Cometarios sobre la P&aacute;gina Web de la Coordinaci&oacute;n de Cultura' target='_self'  onmouseover='window.status=String(cultura); return true;' onmouseout='window.status=String(porDefecto); return true;' title='Coordinaci&oacute;n de Cultura'>cultura@cunibe.org</a></font>");
 document.write("</div></td></tr>");
 document.write("<tr height='52'><td height='52' width='90%'><div align='left'>");
 document.write("<font face='Tahoma' size='1'><b>Direcci&oacute;n F&iacute;sica:<br>(Sede CUNIBE II)<br></b>Calle 75 Esq. Ave. 3 H,<br>Edificio # 76 -74.<br></font>");
 document.write("</div></td></tr>");
 document.write("</tbody></table>");
}

// document.write("");