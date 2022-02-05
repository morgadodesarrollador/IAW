<h2>Hola Mundo desde el Contralador de Cliente333333333s</h2>

<table border=1>
    <?php foreach($clientes as $indice => $dato): ?>
    <tr>
        <td><?php echo $indice; ?></td>
        <td><?php echo $dato; ?></td>
    </tr>
    <?php endforeach ?>
    </table>
<!-- Se genera de forma implícita una RESPONSE con el HTML Generado del SERVIDOR
