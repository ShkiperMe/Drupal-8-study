<?php
namespace Drupal\custom_page\Controller;
use Drupal\Core\Controller\ControllerBase;
/**
 * Provides route responses for the Example module.
 */
class CustomPageController extends ControllerBase {
  /**
   * Returns a simple page.
   *
   * @return array
   *   A simple renderable array.
   */
  public function customPage() {

    $element = array(
      '#markup' => '',
    );
    return $element;
  }
}
