<?php 
	class Handle_upload_file{
		private function _rangeNumber()
		{
			return "hello word";
		}
		public function showWord()
		{
			echo $this->_rangeNumber();
		}
	}
	$oHandle_upload_file=new Handle_upload_file();
	$oHandle_upload_file->showWord();
	
	?>