<?php

namespace Drupal\react_app\Controller;
use Drupal\Core\Controller\ControllerBase;

class ReactAppPageController extends ControllerBase {
  /**
   * Returns a simple page.
   *
   * @return array
   *   A simple renderable array.
   */
  public function githubRatingPage() {
    $module_handler = \Drupal::service('module_handler');
    $path = $module_handler->getModule('your_module')->getPath();
    $element = array(
      '#markup' => '<div id="github-rating"></div>',
      '#attached' => array(
        'library' => array(
          'react_app/github-rating',
        ),
        'drupalSettings' => array(
          'react_app' => array(
            'polyfillURL' => $path . '/js/polyfill.js',
          )
        )
      ),
    );
    return $element;
  }
}
