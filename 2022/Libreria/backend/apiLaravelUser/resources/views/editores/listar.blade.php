<table border=1>
    <tr>
        <td>Id Editor</td>
        <td>Nombre Editorial</td>
    </tr>
    <?php foreach($editores as $editor): ?>
    <tr>
        <td>
            <a href="#">
                <?php //echo $editor['editorid']; ?>
                <?php echo $editor->editorid; ?>

            </a>

        </td>
        <td>
            <a href="http://peliculas.test/api/admin/libros?codEd=<?php echo $editor['editorid'] ?>">
                <?php //echo $editor['nombreeditorial']; ?>
                <?php echo $editor->nombreeditorial; ?>

            </a>    
        </td>
        <td>
            <select>
                <?php foreach($editor->libros as $libro): ?>
                    <option><?php echo $libro->nombrelibro ?></option>
                <?php endforeach ?>
            </select>
            <ul>
                <?php foreach($editor->libros as $libro): ?>
                    <li><?php echo $libro->nombrelibro ?></li>
                <?php endforeach ?>
            </ul>
        </td>
    </tr>
    <?php endforeach ?>
</table>