<table border=1>
    <tr>
        <td>Nombre</td>
        <td>Editor</td>
        <td>Nombre Editorial</td>
        <td>Nombre Categoria</td>
        
        <td>Precio</td>   
    </tr>
    <?php foreach($libros as $libro): ?>
    <tr>
        <td>
            <a href="#">
                <?php echo $libro->nombrelibro; ?>
               
            </a>

        </td>
        <td>
            <a href="#">
                <?php echo $libro['editorid']; ?>
            </a>

        </td>
        <td>
            <a href="#">
                <?php echo $libro->editor->nombreeditorial ?>
                <?php //echo $libro['editor']['nombreeditorial']; ?>
            </a>

        </td>
        <td>
            <a href="#">
                <?php //echo $libro->categoria->nombrecategoria; ?>
                <?php //echo $libro['nombrecategoria']; ?>
            </a>

        </td>
        <td>
            <a href="#">
                <?php echo $libro['precio']; ?>
            </a>

        </td>
    </tr>
    <?php endforeach ?>
</table>