<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Paint - Gallery</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css"></link>
</head>
<body>

	<header>
		<ul class="menu">
			<li><a href="index.html">Hem</a></li>
			<li><a href="painter.html">Painter</a></li>
			<li><a href="gallery.php">Galleri</a></li>
		</ul>
	</header>
	
	<div class="container-fluid">
		<div class="row">
			<div class="jumbotron">
				<div class="feat-img"></div>
			</div><!-- .jumbotron -->
		</div><!-- .row -->
		<div class="row">
			<div class="col-sm-10 col-sm-offset-1">
				<?php
				$path = 'images';

				if ( $handle = opendir($path) ) {
					while ( false !== ( $file = readdir($handle) ) ) {
						if ('.' === $file) {
							continue;
						}
						if ('..' === $file) {
							continue;
						}

						echo '<div class="col-sm-6 col-md-4">';
						echo '<img src="images/' . $file . '" class="img-responsive">';
						echo '</div>';
					}
					closedir($handle);
				}
				?>
			</div><!-- .col-sm-10 -->
		</div><!-- .row -->
	</div><!-- .container-fluid -->

	<script src="js/gallery.js"></script>
</body>
</html>