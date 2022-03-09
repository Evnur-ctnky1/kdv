function Hesapla()
		{
			var fiyat=Number(document.getElementById("txtFiyat").value);
			var kdv=Number(document.getElementById("txtKdv").value);
			var toplamTutar=fiyat+(fiyat*kdv/100);

            document.getElementById("sonuc").innerHTML="KDV Dahil Fiyat : "+toplamTutar;
		
		
		var hesapBtn=document.getElementById("btn");
		hesapBtn.onclick=Hesapla;
        }