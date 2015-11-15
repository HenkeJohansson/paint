<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Paint - Gallery</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css"></link>
</head>
<body>
	<div id="wrapper-gallery">

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

					if ( $handle = opendir($path) ):
						while ( false !== ( $file = readdir($handle) ) ):
							if ('.' === $file):
								continue;
							endif;

							if ('..' === $file):
								continue;
							endif; ?>

							<div class="col-sm-6 col-md-4 gallery-col">
								<div class="img-frame" style="background-image: url(images/<?= $file ?>);">
									<!-- <img src="images/<?= $file ?>" class="img-responsive"> -->
								</div><!-- .img-frame -->
							</div><!-- .col-md-4 -->

						<?php endwhile;

						closedir($handle);

					endif; ?>
				</div><!-- .col-sm-10 -->
			</div><!-- .row -->
		</div><!-- .container-fluid -->

	</div><!-- #wrapper-gallery -->

	<script src="js/gallery.js"></script>
</body>
</html>