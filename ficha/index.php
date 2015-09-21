<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<title>Document</title>

	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<form action='inc/sql-insert-data.php' method='post'>
		<img src="img/logo-greenpark.png" style="float:left">
		<img src="img/logo-teamprime.png" style="float:right">

		<h2>Ficha Cadastral - Pessoa Física</h2>

		<div class="w1">
			<label for="nome">Nome</label>
			<input id="nome" name="nome" required>
		</div>

		<div class="w2">
			<label for="pai">Pai</label>
			<input id="pai" name="pai" required>
		</div>

		<div class="w2">
			<label for="mae">Mãe</label>
			<input id="mae" name="mae" required>
		</div>

		<div class="w6">
			<label for="dia">Nascimento</label>
			<input type="date" name="nascimento">
		</div>

		<div class="w6">
			<label for="naturalidade">Naturalidade</label>
			<input id="naturalidade" name="naturalidade" required>
		</div>

		<div class="w6">
			<label for="nacionalidade">Nacionalidade</label>
			<input id="nacionalidade" name="nacionalidade" required>
		</div>

		<div class="w6">
			<label for="sexo">Sexo</label>
			
			<select id="sexo" name="sexo" required>
				<option value="Masculino">Masculino</option>
				<option value="Feminino">Feminino</option>
			</select>
		</div>

		<div class="w6">
			<label for="estado_civil">Estado Civil</label>
			
			<select id="estado_civil" name="estado_civil" required>
				<option value="Casado">Casado</option>
				<option value="Solteiro">Solteiro</option>
				<option value="Divorciado">Divorciado</option>
				<option value="Viuvo">Viuvo</option>
			</select>
		</div>

		<div class="w6">
			<label for="regime_casamento">Regime de Casamento</label>
			
			<select id="regime_casamento" name="regime_casamento" required>
				<option value="total">Total</option>
				<option value="parcial">Parcial</option>
				<option value="separacao">Separação</option>

			</select>
		</div>

		<div class="w4">
			<label for="rg_rne_pass">RG / RNE / PASS</label>
			<input id="rg_rne_pass" name="rg_rne_pass" required>
		</div>

		<div class="w4">
			<label for="cpf">CPF</label>
			<input id="cpf" name="cpf" placeholder="123.456.789-10" required>
		</div>

		<div class="w4">
			<label for="empresa">Empresa</label>
			<input id="empresa" name="empresa" required>
		</div>

		<div class="w4">
			<label for="profissao">Profissão</label>
			<input id="profissao" name="profissao" required>
		</div>

		<div class="w4">
			<label for="tempo_de_servico">Tempo de Serviço</label>
			<input type="number" id="tempo_de_servico" name="tempo_de_servico"  data-affixes-stay="true" data-prefix="" data-thousands="." data-decimal="" placeholder="0" required>
		</div>

		<div class="w4">
			<label for="renda">Renda</label>
			<input id="renda" name="renda" data-affixes-stay="true" data-prefix="R$ " data-thousands="." data-decimal="," placeholder="R$ 0,00" required>
		</div>

		<div class="w4">
			<label for="fgts">FGTS</label>
			<input id="fgts" name="fgts" data-affixes-stay="true" data-prefix="R$ " data-thousands="." data-decimal="," placeholder="R$ 0,00" required>
		</div>

		<div class="w4">
			<label for="outras Rendas">Outras Rendas</label>
			<input id="outras_rendas" name="outras_rendas" data-affixes-stay="true" data-prefix="R$ " data-thousands="." data-decimal="," placeholder="R$ 0,00" required>
		</div>

		<div class="w10">
			<label for="uf">UF</label>
			<select name="uf" id="uf" required>
				<option value="AC">AC</option>
				<option value="AL">AL</option>
				<option value="AP">AP</option>
				<option value="AM">AM</option>
				<option value="BA">BA</option>
				<option value="CE">CE</option>
				<option value="DF">DF</option>
				<option value="ES">ES</option>
				<option value="GO">GO</option>
				<option value="MA">MA</option>
				<option value="MT">MT</option>
				<option value="MS">MS</option>
				<option value="MG">MG</option>
				<option value="PA">PA</option>
				<option value="PB">PB</option>
				<option value="PR">PR</option>
				<option value="PE">PE</option>
				<option value="PI">PI</option>
				<option value="RJ">RJ</option>
				<option value="RN">RN</option>
				<option value="RS">RS</option>
				<option value="RO">RO</option>
				<option value="RR">RR</option>
				<option value="SC">SC</option>
				<option value="SP">SP</option>
				<option value="SE">SE</option>
				<option value="TO">TO</option>
			</select>
		</div>

		<div class="w5">
			<label for="cidade">Cidade</label>

			<select id="cidade" name="cidade" required>
				<option value="">Selecionar Estado</option>
			</select>
		</div>

		<div class="w2">
			<label for="rua">Rua</label>
			<input id="rua" name="rua" required>
		</div>

		<div class="w5">
			<label for="numero">Número</label>
			<input id="numero" name="numero" required>
		</div>

		<div class="w4">
			<label for="bairro">Bairro</label>
			<input id="bairro" name="bairro" required>
		</div>

		<div class="w8">
			<label for="telefone">Telefone</label>
			<input id="telefone" name="telefone" placeholder="11-1234-5678" required>
		</div>

		<div class="w8">
			<label for="celular">Celular</label>
			<input id="celular" name="celular" placeholder="11-1234-56789" required>
		</div>

		<div class="w4">
			<label for="email">Email</label>
			<input type="email" id="email" name="email" placeholder="nome@email.com" required>
		</div>

		<div class="w4">
			<label for="cartorio">Cartório</label>
			<input id="cartorio" name="cartorio" required>
		</div>

		<div class="w1">
			<input type="submit" name="submit" class="submit">
		</div>
	</form>

	<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>

	
	<script src="js/masked-input.js"></script>
	<script src="js/mask-money.js"></script>

	<script>
		$('#cpf').mask("999.999.999-99")
		$('#celular').mask("99-9999-99999")
		$('#telefone').mask("99-9999-9999")
		// $('#tempo_de_servico').maskMoney()
		$('#renda').maskMoney()
		
		document.querySelector('#uf').onchange = function() {
			data = 'uf='+this.value
			
			request = new XMLHttpRequest;
			request.open('POST', 'inc/sql-select-cities.php', true);
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			request.send(data);

			request.onload = function() {
			  
			  if ( this.status >= 200 && this.status < 400 ) {
			      response = request.responseText;
			      $("#cidade").html(response);
			  }
			}
		}
	</script>
</body>
</html>